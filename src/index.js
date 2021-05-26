import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router }  from "react-router-dom";

ReactDOM.render(

//<App  authorized={false} />,
//<App loginuser="pradeepbisht" />,
<Router>

<App />

</Router>,

document.getElementById('root')
);




/* function AppTwo(){

return <h1>this is second app</h1>;

} */

/* ReactDOM.render(
  <React.Fragment>
    <AppTwo />
    <App/>
  </React.Fragment>,
  document.getElementById('root')
); */


//ReactDOM.render(
  //<React.StrictMode>
    //<App />
  //</React.StrictMode>,
  //React.createElement(    'h1', {style:{color:'Blue'}} ,"hey everyone !!!"  ),

  //React.createElement(
  //  'ul',null,
  //  React.createElement('li',null,'Monday'),
  //  React.createElement('li',null,'Tuesday'),
  //  React.createElement('li',null,'Wednesday')
//),
//document.getElementById('root')
//);

/* ReactDOM.render(
<ul>
<li>Monday</li>
<li>Tuesday</li>
<li>Wednesday</li>
<li>Thursday</li>
</ul>,

  document.getElementById('root')
); */

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
