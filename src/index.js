//* Core react library
import React from 'react';

//* ReactDOM | Separate library user to render to the DOM
import ReactDOM from 'react-dom';
// * Create a new component
// * Produce HTML

//* CLASS not an INSTANCE
const App = () => {
    return <div>Hi!</div>;
}

//* Take generated HTML & put it on the page (DOM)

//* Create an instance of App:
//* Where do we put the instance? In the 2nd argument
ReactDOM.render(<App />, document.querySelector('.container'));