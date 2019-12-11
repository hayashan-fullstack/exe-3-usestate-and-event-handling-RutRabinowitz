import React, { useState, useRef } from 'react';
import ReactDOM from 'react-dom';

const App = (props) => {

    const [counter, setCounter] = useState(0)
    const [counter2, setCounter2] = useState(0)
    console.log(counter)
    console.log(counter2)
    const timeout = useRef(null)
    // const restart = () => {
    //     clearTimeout
    // setCounter(0)
    // }
    timeout.current = setTimeout(() => {
        //counter++
        if(counter2 == 59){
            setCounter2(0)
            setCounter(counter + 1)
        }
        else setCounter2(counter2 + 1) 
    }, 300)
    const restart = () => {
        console.log(timeout)
        clearTimeout(timeout)
    }
    // for(let i=0; i<10; i++) {
    //     console.log(props.counter)
    // }
    return (
        <div style={{ padding: '30em', top: '11em',left: '10em', width: '24em' , color: 'blue', font: '"Times New Roman"',background:'darkgoldenrod'}}>
            <h6> Rut Rabinowitz </h6>
            <h1> Timer </h1>
            <h1>{counter}:{counter2}</h1>
            <button style={{width:'200px', top: '2em',left: '20em', width: '9em', color: 'darkgoldenrod', font: '"Times New Roman"',background:'blue' }}onClick={restart}>restart</button>
        </div>
    )
}



ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
