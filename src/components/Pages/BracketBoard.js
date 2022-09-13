import React from 'react';
import Bracket1 from '../UI/Bracket1';

const BracketBoard = ({bracketSize}) => {
    return (
        <div>
            <Bracket1 bracketSize={bracketSize}/>
        </div>
    )
}

export default BracketBoard;