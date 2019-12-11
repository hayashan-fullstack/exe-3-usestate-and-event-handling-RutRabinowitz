import React, { useState, useRef } from 'react';
//import {Timer} from './components/timer';
import ReactDOM from 'react-dom';

const Header = () =>{
return(
    <div>
    <table border = '1'>
    <tr >
                <th style={{width: '5%', color: 'rgb(194, 20, 101)', font: '"Times New Roman"',background:'darkgoldenrod'}}>Detail</th>
                <th style={{width: '5%', color: 'rgb(194, 20, 101)', font: '"Times New Roman"',background:'darkgoldenrod'}}>Deadline</th>
                <th style={{width: '5%', color: 'rgb(194, 20, 101)', font: '"Times New Roman"',background:'darkgoldenrod'}}>Is important?</th>
                <th style={{width: '5%', color: 'rgb(194, 20, 101)', font: '"Times New Roman"',background:'darkgoldenrod'}}>Is done?</th>
    </tr>
    </table>
    </div>
)
}

const Line = (props) =>{
    return(
        <div>
        <table border = '1'>
        <tr>
                    <th style={{width: '5%', color: 'rgb(194, 20, 101)', font: '"Times New Roman"',background:'darkgoldenrod'}}>{props.line.Details}</th>
                    <th style={{width: '5%', color: 'rgb(194, 20, 101)', font: '"Times New Roman"',background:'darkgoldenrod'}}>{props.line.Deadline}</th>
                    <th style={{width: '5%', color: 'rgb(194, 20, 101)', font: '"Times New Roman"',background:'darkgoldenrod'}}>{props.line.Is_important}</th>
                    <th style={{width: '5%', color: 'rgb(194, 20, 101)', font: '"Times New Roman"',background:'darkgoldenrod'}}>{props.line.Is_don}</th>
        </tr>
        </table>
        </div>
        
    )
}

  export const App = () => {
    const HomeList = [
        //{
        //     Home: [
        //         {
        //                 Details: "sara",
        //                 Deadline: "123456789",
        //                 address: "israel",
        //                 category: "family"
        //             },  
        //     ]
        // },
        {
            Details: "sleeping",
            Deadline: "tonight",
            Is_important: "very much",
            Is_don: "✔"
        },
        {
            Details: "eating",
            Deadline: "now",
            Is_important: "not so much",
            Is_don: "❌"
        },
        {
            Details: "jogging",
            Deadline: "in the morning",
            Is_important: "important",
            Is_don: "✔"
        }
    ]
    const WorkList = [
        {
            Details: "getting a car",
            Deadline: "1/1/2020",
            Is_important: "important",
            Is_don: "❌"
        },
        {
            Details: "calling boss",
            Deadline: "up to four o'clock",
            Is_important: "very very much",
            Is_don: "✔"
        },
        {
            Details: "ordering documents",
            Deadline: "24/12/2019",
            Is_important: "not so much",
            Is_don: "❌"
        }
    ];
   
    return (
        <div style={{ margin: '10%' }}>
        <h1 style={{padding: '1em'}}>My TODO list</h1>
        <br/>
        <h2>Home:</h2>
        <Header/>
        {HomeList.map((line, index)=>{
            console.log(index)
            return <Line key ={index} line={line}/>}
        )}
         <h2>Work:</h2>
         <Header/>
        {WorkList.map((line, index)=>{
            console.log(index)
            return <Line key ={index} line={line}/>}
        )}
        </div>
    )
}
ReactDOM.render(<App />, document.getElementById('root'));


