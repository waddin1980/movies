import React from 'react';

const Slider = (onChange) =>{
    return (
        <input 
        type="range" 
        min="1" max="10" 
        value="3"
        className="slider" 
        step="0.5"
        onChange={e => ({ rating: e.target.value })}
        />
    )
}

export default Slider;