import React from 'react';

const Content = () => {
    const handleNameChange = () => {
        const names = ['Bob', 'Kevin', 'Larisa']; 
        
        const int = Math.floor(Math.random() * 3);
        return names[int];
    }

    const handleClick = () => {
        console.log("you clicked it")
    }

    const handleClick2 = (name) => {
        console.log(`${name} you clicked it`)
    }

    const handleClick3 = (e) => {
        console.log(e)
    }

    return (
        <main>
            <p onDoubleClick={handleClick}>
                    Hello {handleNameChange()}!
            </p>
            <button onClick={handleClick}>Click it</button>
            <button onClick={() => handleClick2('Larisa')}>Click it</button>
            <button onClick={(e) => handleClick3(e.target.innerText)}>Click it</button>
        </main>
    );
    }

export default Content;
