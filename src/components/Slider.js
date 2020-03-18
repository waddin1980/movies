import React from 'react';

class Slider extends React.Component {
	constructor(props) {
		super(props);
		this.state = { rating: 3 };
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange = event => {
		this.setState({
			rating: event.currentTarget.value
		});
	};

	render() {
		return (
			<div className="range-slider">
				<input
					type="range"
					min="1"
					max="10"
					id="slider"
					step="0.5"
					value={this.state.rating}
					onChange={this.handleChange}
				/>
				<span>{this.state.rating}</span>
			</div>
		);
	}
}

export default Slider;