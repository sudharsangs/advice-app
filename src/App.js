import React,{useState,useEffect} from 'react';
import axios from 'axios';
import './App.css';

function App(){
    const [advice,setAdvice] = useState('');

    const fetchAdvice = async () => {
        const response = await axios.get('https://api.adviceslip.com/advice');
        console.log(response.data.slip.advice);
        setAdvice(response.data.slip.advice);
    }
    useEffect(() => {
        fetchAdvice();
    },[]);


    return(
        <div className="app">
            <div className="card">
                <h1 className="heading">{advice}</h1>
                <button className="button" onClick={fetchAdvice}>
                    <span>GIVE ME ADVICE!</span>
                </button>
            </div>
        </div>
    )
}

export default App;