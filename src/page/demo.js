import React from 'react';

class Demo extends React.Component {
 	 state = {
    	text: '',
  	}

  	onTextChange = (event) => {
    	this.setState({ text: event.target.value });
  	}

  	onTextReset = () => {
	  	this.setState({ text: '' });
	}

  	render() {
  		const MyInput = ({ value = '', onChange }) => (
	  		<input value={value} onChange={onChange} />
		);

    	return (
      		<div>
      			<input />
			 	<MyInput value={this.state.text} onChange={this.onTextChange} />
			  	<button onClick={this.onTextReset}>Reset</button>
			</div>
    	);
  	}
}

export default Demo;