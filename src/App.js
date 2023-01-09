import { Component } from 'react';

// Componente
class Button extends Component {
	state = {};

	constructor(props) {
		super(props);
		console.log('Constructor ', props);
	}

	componentDidMount() {
		console.log('componentDidMount');
	}

	componentDidUpdate(prevProps, prevState) {
		console.log('componentDidUpdate ', prevProps, ' ', prevState);
	}

	componentWillUnmount() {
		console.log('componentWillUnmount ', this.props, ' ', this.state);
	}

	render() {
		console.log('Ejecutando método de render de Button');
		return <button onClick={() => this.setState({ prop: 1 })}>Enviar en Button</button>;
	}
}

// Aplicación
class App extends Component {
	state = {
		value: 3
	};

	render() {
		console.log(this.state);
		return (
			<div>
				<p>¡Hola Mundo!</p>
				{this.state.value === 3 ? <Button pig="Happy" /> : null}
				<button className={this.state.value} onClick={() => this.setState({ value: 2 })}>
					Enviar en App
				</button>
			</div>
		);
	}
}

export default App;
