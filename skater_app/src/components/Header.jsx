import React from 'react';

function Header(props) {
    const skater = [
        'Tony Hawk',
        '55',
        'San Diego',
        '900'

    ] 
    return (
        <div>
            <h1>{skater}</h1>
            <button>Click Me!</button>
        </div>
    );
}

export default Header;