import React, {useContext, useState} from 'react';
import {GlobalContext} from '../context/GlobalState';

const AddTransaction = () => {
    const { addTransaction } = useContext(GlobalContext);
    const [text, setText] = useState('');
    const [amount, setAmount] = useState('');
    
    const onSubmit = e => {
        e.preventDefault();
        const newTransaction = {
            id: Math.floor(Math.random() * 10000000000),
            text: text,
            amount: +amount
        }
        
        addTransaction(newTransaction);

        
    }

    

    return (
        <div>
           <h3>Add new transaction</h3>
           <div className="border-transaction"></div>
           <div className="form">
                <form onSubmit={onSubmit} id="form"> 
                    <div className="f-containers">
                        <label htmlFor="text">Text</label>
                        <input value={text} type="text" onChange={(e) =>setText(e.target.value)} placeholder="Enter text..." />
                    </div> 
                    <div className="f-containers">
                        <label htmlFor="amount">Amount <br /> 
                        <small>(Expense: -value) (Income: +value)</small>
                        </label>
                        <input type="number" value={amount} onChange={(e) =>setAmount(e.target.value)} placeholder="Enter amount..." />
                    </div>
                    <button className="btn">Add transaction</button>  
                </form> 
            </div>
        </div>
    )
}

export default AddTransaction
