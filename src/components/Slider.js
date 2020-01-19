import React from 'react';

class Slider extends React.Component {
    state = { rating: 3 }
    
    render(){
        return (
            <input 
            type="range" 
            min="1" max="10" 
            value={this.state.rating} 
            className="slider" 
            step="0.5"
            onChange={e => this.setState({ rating: e.target.value })}
            />
        )
    }
}

export default Slider;