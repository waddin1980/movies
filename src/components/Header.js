import React from 'react';
import Slider from './Slider';
import Checkbox from './GenreCheckbox';

class Header extends React.Component {
    
    render(){
        return(
        <header>
            <h1>Movies</h1>
            <Slider rating={this.props.rating} />
            <Checkbox />
        </header>
        )
    }
}

export default Header;