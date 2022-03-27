import React from 'react';
import './NewBracketForm.css';

const NewBracketForm = () => {
    return(
        <form>
            <div className="new-bracket__controls">
                <div className="new-bracket__control">
                    <label>Bracket Name</label>
                    <input type="text" />
                </div>
                <div className="new-bracket__control">
                    <label>Bracket Size</label>
                    <input type='number' min='8' step='8' max='64'/>
                </div>
                <div className="new-bracket__control">
                    <label>Bracket Category</label>
                    <input type='text' />
                </div>
                <div className="new-bracket__actions">
                    <button type='submit'>Create Bracket</button>
                </div>
            </div>
        </form>
    )
}

export default NewBracketForm;