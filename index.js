import React from "react";
import ReactDOM from "react-dom";
import { Timer } from "./timer";
import { TODO } from "./TODO";




const App = () => {
    return (
        <div style={{margin:'10%'}}>
        <Timer/>
        <br/>
        <TODO/>
        </div>
    );
};
ReactDOM.render(<App />, document.getElementById("root"));
