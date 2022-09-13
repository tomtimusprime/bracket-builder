import React from 'react'
import Card from './Card';
import './Bracket1.css'

const Bracket1 = ({bracketSize}) => {
    const createCards = (numOfCards) => {
        const cards = [];
        for (let i = 0; i < numOfCards; i++) {
            cards.push(<Card key={i}>{i + 1}</Card>);
        }
        return cards;
    }

    return (
        <div className="container">

            <div className="container-left">
                <div className='left-column'>
                    {createCards(bracketSize)}
                </div>
                <div className="middle-column">
                    {createCards(bracketSize/2)}
                </div>
                <div className="right-column">
                    {createCards(bracketSize/4)}
                </div>
            </div>

            <div className="container-center">
                <div className="middle-column">
                    {createCards(bracketSize/bracketSize)}
                </div>
            </div>

            <div className="container-right">
            <div className='left-column'>
                {createCards(bracketSize/4)}
            </div>
            <div className="middle-column">
                {createCards(bracketSize/2)}
            </div>
            <div className="right-column">
                {createCards(bracketSize)}
            </div>
        </div>

        </div>
    )
}

export default Bracket1