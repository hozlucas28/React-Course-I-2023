import './main.css';

const styles1 = (bg = '#456') => ({
	boxShadow: '0 5px 3px rgba(0,0,0,0.5)'
});

const styles2 = ({ bg = '#456' }) => ({
	margin: '10px 15px',
	padding: '10px 15px',
	color: '#fff',
	backgroundColor: bg
});

const Li = ({ children }) => {
	return <li className="li-class">{children}</li>;
};

const App = () => {
	const value = 'feliz';
	return (
		<ul className="css-class">
			<Li state="feliz">valor de li</Li>
		</ul>
	);
};

export default App;
