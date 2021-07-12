import { useState } from 'react';
import './App.css';
import Create from './Create'



function App() {
	const [ randomQuote, setRandomQuote ] = useState('It’s not a bug — it’s an undocumented feature.');

	const[ max, setMax ] = useState(6);

	function randNum(max) {
		return Math.floor(Math.random() * max);
	  }

	async function getQuote() {
		const res = await fetch(process.env.REACT_APP_RANDOM_API_URL);
		const data = await res.json();
		setRandomQuote(data[randNum(max)].wisdom);
		setMax(data.length);
	}

	// useEffect(()=>{
	// 	getQuote();
	// },[]);

	function handleClick() {
		getQuote();
	};

	return (
		<div className='App' >
				<h1 className ='header'>-BE INSPIRED-</h1>
				<p>{randomQuote}</p>
				<button className= 'button' onClick = {handleClick}>GET YOUR DOSE OF WISDOM</button>
				<Create/>

		</div>
	);
}

export default App;
