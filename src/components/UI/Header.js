import React, { useRef } from 'react'

const Header = ({ bracketSize, setBracketSize }) => {
    const inputRef = useRef(null);
    const handleChange = (e) => {
        setBracketSize(e.target.value);
    }
    const handleClick = (e) => {
        e.preventDefault();
        setBracketSize(inputRef.current.value);
        console.log('Generate Button Clicked.')
        inputRef.current.value = '';
    }
    return (
        <nav id='nav'>
            <form onSubmit={handleClick}>
                <label htmlFor="bracket-size">Bracket-Size: </label>
                <input ref={inputRef} type="number" name="bracket-size" id="bracket-size" />
                <button type="submit">Generate Bracket</button>
            </form>
        </nav>
    )
}

export default Header