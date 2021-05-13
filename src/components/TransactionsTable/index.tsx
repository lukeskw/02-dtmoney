import { useTransactions } from "../../hooks/useTransactions";

import { Container } from "./styles";


export function TransactionsTable(){
    


    const {transactions} = useTransactions();

    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>   {/* <tr>
                        <td>Desenvolvimento de Site</td>
                        <td className="deposit">R$12.000</td>
                        <td>Desenvolvimento</td>
                        <td>15/05/2021</td>
                    </tr>
                    <tr>
                        <td>Aluguel</td>
                        <td className="withdraw">-R$1.100</td>
                        <td>Moradia</td>
                        <td>17/05/2021</td>
                    </tr>
                    <tr>
                        <td>Luz</td>
                        <td className="withdraw">-R$100</td>
                        <td>Despesas</td>
                        <td>12/05/2021</td>
                    </tr> */}
                 
                    {transactions.map(transaction =>{
                        return(
                            <tr key={transaction.id}>
                                <td>{transaction.title}</td>
                                <td className={
                                    transaction.type
                                }>{
                                    new Intl.NumberFormat('pt-BR',{
                                        style: 'currency',
                                        currency: 'BRL',
                                    }).format(transaction.amount)
                                }</td>
                                <td>{
                                    transaction.category
                                }</td>
                                <td>
                                    {new Intl.DateTimeFormat('pt-BR').format(new Date(transaction.createdAt))
                                    }</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </Container>
    )
}