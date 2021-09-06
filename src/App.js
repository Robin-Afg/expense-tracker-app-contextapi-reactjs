import {react, useState} from 'react';
import Header from './components/Header';
import Balance from './components/Balance';
import IncomeExp from './components/IncomeExp';
import TransactionList from './components/TransactionList';
import AddTransaction from './components/AddTransaction';
import {GlobalProvider} from './context/GlobalState';

function App() {

 return (
    <GlobalProvider>
      
            <div className="body">
                <Header />
                <div className="container">
                    <Balance />
                    <IncomeExp />
                    <TransactionList />
                    <AddTransaction />
                </div>
            </div>
       
    </GlobalProvider>
    

 );
}

export default App;
