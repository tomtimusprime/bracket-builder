import React from 'react';
import Card from './Card';
import './Bracket.css';

const Bracket = () => {
    return (
        <div className="wrapper">
      <div className="bracket-groups1">
        <Card>
          <h2>Hello!</h2>
        </Card>
        <Card>
          <h2>Hello</h2>
        </Card>
        <Card>
          <h2>Hello</h2>
        </Card>
        <Card>
          <h2>Hello</h2>
        </Card>
      </div>
      <div className='bracket-groups2'>
        <Card>
          <h2>Hello</h2>
        </Card>
        <Card>
          <h2>Hello</h2>
        </Card>
      </div>
      <div className="bracket-groups3">
        <Card>
          <h2>Hello</h2>
        </Card>
      </div>
    </div>
    )
}

export default Bracket;