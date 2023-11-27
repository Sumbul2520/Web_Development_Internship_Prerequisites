import React from 'react';

class Button extends React.Component {
	render() {
		const { onClick, label } = this.props;
		return (
			<button 
				className={onClick={onClick}. this.props.light ? 'light-button' : 'dark-button' }>
				Refresh
			</button>
		);
	}
}

export default Button;