import Button from './Button';

const array = ['cerdo feliz', 'cerdo triste', 'cerdo emocionado'];

const App = () => {
	const miVar = false;

	if (miVar) {
		return <p>Mi variable es True.</p>;
	}

	return (
		<div>
			<h1 onClick={(element) => console.log('Click', element)}>¡Hola Mundo!</h1>
			{array.map((element) => (
				<p key={element}>{element}</p>
			))}
			<Button onClick={() => console.log('Clickeado')}>Enviar</Button>
		</div>
	);
};

export default App;
