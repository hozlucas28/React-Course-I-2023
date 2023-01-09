import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

// const Li = ({ children, state, house, age }) => {
// 	console.log(state, house, age);
// 	return (
// 		<li>
// 			{children} {state}
// 		</li>
// 	);
// };

// const X = () => (
// 	<ul>
// 		<Li state={'feliz'} house={false} age={21}>
// 			Cerdo
// 		</Li>
// 		<Li state={'triste'} house={true} age={32}>
// 			Cerdo
// 		</Li>
// 		<Li state={'amargo'} house={false} age={18}>
// 			Cerdo
// 		</Li>
// 	</ul>
// );

// root.render(<X />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
