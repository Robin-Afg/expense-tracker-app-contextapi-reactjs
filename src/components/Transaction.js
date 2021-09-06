import React, {useContext} from 'react';
import {GlobalContext} from '../context/GlobalState';

const Transaction = ({transaction}) => {
    const { deleteTransaction } = useContext(GlobalContext);
    
    const sign = transaction.amount < 0 ? '-' : '+';
    return (
        <div className="trans">
            <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
                <span id="text">{transaction.text.toLowerCase()}</span> <span id="amount"> {sign}${Math.abs(transaction.amount)}</span>
                
                <button onClick={() => deleteTransaction(transaction.id)} className="delete-btn">x</button>
            </li>
        </div>
        
    )
}

export default Transaction
