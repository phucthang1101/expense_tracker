import React, { useContext } from 'react';
import {Header} from './components/Header';
import {Balance} from './components/Balance';
import {IncomeExpenses} from './components/IncomeExpenses';

import {TransactionList} from './components/TransactionList';
import {AddTransaction} from './components/AddTransaction';

import './App.css';

import {GlobalProvider,GlobalContext} from './context/GlobalState';

function App() {
  const { loading } = useContext(GlobalContext);
  console.log(loading);
  return (
    <GlobalProvider>
      <Header/>
      <div className="container">
        <Balance/>
        <IncomeExpenses/>
        <TransactionList/>
        <AddTransaction/>
      </div>
    </GlobalProvider>
  );
}

export default App;
