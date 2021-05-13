import Modal from 'react-modal';
import {Container,RadioButton,TransactionButtonsContainer} from './styles'

import closeImg from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import { FormEvent, useState } from 'react';
import { useTransactions } from '../../hooks/useTransactions';


type ModalProps = {
    onModalIsOpen: boolean;
    onCloseModal: () => void;
}

export function TransactionModal({onModalIsOpen, onCloseModal}:ModalProps){


    const {createTransaction} = useTransactions()
    
    const [title, setTitle] = useState('');
    const [value, setValue] = useState(0);
    const [category, setCategory] = useState('');
    
    const [type, setType] = useState('deposit');

    async function handleCreateTransaction(e:FormEvent){
        e.preventDefault();

        await createTransaction({
            title,
            amount: value,
            category,
            type,
        })
        
        setTitle('');
        setValue(0);
        setCategory('');
        setType('deposit')
        onCloseModal();
        
    }

    return(
        <Modal
        closeTimeoutMS={500}
        isOpen= {onModalIsOpen}
        onRequestClose= {onCloseModal}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
      >

        <button className="close-modal" type="button" onClick={onCloseModal}>
            <img src={closeImg} alt="close-modal"/>
        </button>

        <Container onSubmit={handleCreateTransaction}>

            <h2>Cadastrar Transação</h2>
            

            <input 
                placeholder='Nome'
                value = {title}
                onChange = {e => setTitle(e.target.value)}
            />
            <input 
                type="number"
                step='0.05'
                placeholder='Preço'
                value = {value}
                onChange = {e => setValue(parseFloat(e.target.value))}
            />

            <TransactionButtonsContainer>
                <RadioButton
                    type="button"
                    onClick={()=>{setType('deposit');}}
                    isActive= {type ==='deposit'}
                    activeColor="green"
                
                >
                    <img src={incomeImg} alt="income-logo" />
                    <span>Entrada</span>
                </RadioButton>
                <RadioButton
                    type="button"
                    onClick={()=>{setType('withdraw');}}
                    isActive= {type ==='withdraw'}
                    activeColor="red"
                >
                    <img src={outcomeImg} alt="outcome-logo" />
                    <span>Saída</span>
                </RadioButton>
            </TransactionButtonsContainer>

            <input 
                type="text"
                placeholder='Categoria'
                value = {category}
                onChange = {e => setCategory(e.target.value)}
            />
            <button type="submit">
                Cadastrar
            </button>

        </Container>

      </Modal>
    )
}