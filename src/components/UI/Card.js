import {useState} from 'react'
import './Card.css';

function Card(props) {
    const classes = 'card ' + props.className;
    const [cardValue, setCardValue] = useState('');
    return (
        <div className={classes}>{props.children}
        <p>{cardValue}</p>
        <input type="text" value={cardValue} onChange={(e) =>  setCardValue(e.target.value)}></input>
        </div>
        
    )
}

export default Card;