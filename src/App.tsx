// import React from 'react';
// import styled from 'styled-components';

import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import { TransactionModal } from './components/TransactionModal'
import Modal from 'react-modal';
import { useState } from "react";
import { TransactionsProvider } from "./hooks/useTransactions";
// import {TransactionsContext} from './TransactionsContext.tsx'
// import { TransactionsProvider } from "./TransactionsContext";


// const Title = styled.h1`
//   color: #8257e6;
//   font-size: 64px;
// `

Modal.setAppElement('#root');

export function App() {

  const [modalTransactionIsOpen, setTransactionIsOpen] = useState(false);

  function openModal(){
      setTransactionIsOpen(true);
  }

  function closeModal(){
      setTransactionIsOpen(false);
  }

  return (
    <TransactionsProvider>
      <Header onOpenTransactionModal = {openModal} />
      <Dashboard />
      <TransactionModal 
        onModalIsOpen={modalTransactionIsOpen}
        onCloseModal={closeModal}  
      />
      <GlobalStyle />
    </TransactionsProvider >
  );
}