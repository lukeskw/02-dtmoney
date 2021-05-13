import {createContext, ReactNode, useContext, useEffect, useState} from 'react'
import { api } from '../services/api';

type TransactionType = {
    id: number;
    title: string;
    type: string;
    amount: number;
    category: string;
    createdAt: string;

}

type TransactionsContextData = {
    transactions: TransactionType[];
    createTransaction: (transaction: TransactionInput) => Promise<void>;
}

// type TransactionInput = {
//     title: string;
//     type: string;
//     amount: number;
//     category: string;
// }

type TransactionInput = Omit<TransactionType, 'id' | 'createdAt'>;

type TransactionsProviderProps = {
    children: ReactNode;
}

const TransactionsContext = createContext<TransactionsContextData>({} as TransactionsContextData);

export function TransactionsProvider(props:TransactionsProviderProps){
    const [transactions, setTransactions] = useState<TransactionType[]>([])

    useEffect(()=>{
        api.get('/transactions')
        .then(response=> setTransactions(response.data.transactions))
    }, [])
    
    async function createTransaction (transactionInput:TransactionInput) {
       const response = await api.post('/transactions', {
           ...transactionInput,
            createdAt: new Date()
        }) 
       const {transaction} = response.data;
       setTransactions([
           ...transactions,
           transaction
       ])
    }

    return (
        <TransactionsContext.Provider 
            value={{transactions, createTransaction}}>
            {props.children}
        </TransactionsContext.Provider>
    )
}

export function useTransactions() {
    const context = useContext(TransactionsContext)
    
    return context;
}