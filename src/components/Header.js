import React from 'react';
import Slider from './Slider';
import Checkbox from './GenreCheckbox';

class Header extends React.Component {
    
    render(){
        return(
        <header>
            <h1>Movies</h1>
                <input
                    type="range"
                    min="1" max="10"
                    value="3"
                    className="slider"
                    step="0.5"
                    onChange={e => ({ rating: e.target.value })}
                />
            <Checkbox />
        </header>
        )
    }
}

export default Header;