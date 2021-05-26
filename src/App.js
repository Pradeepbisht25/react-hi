//import logo from './logo.svg';
import './App.css';
//import sample from './sample.jpg';
//import React, { useState, useEffect } from "react";
//import React, { useState, useReducer } from "react";
import {Home, About, Events, Contact, Whoops404, Services, CompnayHistory, Location } from  "./Pages" ;
import { Routes, Route } from 'react-router';




function App(){
return (

    <div>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>}>
                  <Route path="services" element={<Services/>} />
                  <Route path="company-history" element={< CompnayHistory/>} />
                  <Route path ="location" element={<Location />} />
              </Route>
            <Route path="/events"  element={<Events/>}/>
            <Route  path="/contact"  element={<Contact />}/>
            <Route  path="*" element={<Whoops404 />} />
        </Routes>
    </div>
);
}

export default App;

/* function App({loginuser}){

  const [data, setData] = useState(null);
  const [loading,setLoading] = useState(false);
  const [error,setError]  = useState(null);


  useEffect(()=>{
        if(!loginuser) return;
        setLoading(true);
        fetch(`https://api.github.com/users/${loginuser}`)
        .then((Response)=> Response.json())
        .then(setData)
        .then(()=> setLoading(false))
        .catch(setError);
        }, [loginuser] );
  

        if(loading) return <h1>Loading .....</h1>;
        if(error)
                return <pre>{JSON.stringify(error, null, 2)}</pre>;
        if(!data) return null; */

    //if(data){
        //return <div>{JSON.stringify(data)}</div>;

        /* return (
            <div style={{textAlign :"center" }}>
                <h1>{data.login}</h1>
                <div><img src={data.avatar_url}  height="200" alt="user prifle pic" /></div>
            </div>
        ); */

   // }

//return <div>No user Available</div>;

//}


//export default App;

/* function App(){
  //const [checked,setChecked] = useState(false);

  const [checked, toggle] = useReducer(
    (checked) => !checked,
    false
    );

  /* function toggle(){

    setChecked((checked) => !checked);
  } */

  /* return (
    <>
          <input
           type="checkbox"
            value={checked}
            //onChange={()=> setChecked((checked) => !checked)}
            onChange={toggle}
          />
          <p>{checked ? "checked" : "not checkde"}</p>
    </>

  );

}


export default App; */ 

/* function setEmotion(){

return (
  <h1>I am not alone </h1>
);

} */

/* function App(){
const [emotion,setEmotion] = useState("happy");
const [secondary,setSecondary]=useState("tired");

useEffect(()=>{
    console.log(`It is ${emotion} around here` );
  },[secondary]
);

  return (
      <>
          <h1>Hello i am {emotion} and  you are {secondary} </h1>
          <button onClick={()=> setEmotion("furstration")}>Furstate</button>
          <button onClick={()=> setSecondary("crabby")}>make crabby</button>
      </>
  );
} 

export default App;
*/

/* 
function SecrectCompnent(){
return <h1>This is screct components, only authorize person acces this.</h1> ;
}

function RegularComponent(){
  return <h1>This is regulaer component for regulaer purpose.</h1>;

} */

/* function App(props){
return (
  <>
      {props.authorized ? <SecrectCompnent /> : <RegularComponent /> }
  </>
 )*/

  /* if(props.authorized){
    return < SecrectCompnent />;
  }else {
    return <RegularComponent />;
  } */
//return <div className="App">components here eventually </div>

//}

//export default App;



/* function Header(props){
  return(
        <header>
          <h1>{props.name}'s Kitchen</h1>
        </header>
  )
} */

/* function Main(props){
  return(
          <section>
            <p>we serve the most {props.content} food around. </p>
              <ul style={{textAlign:"left"}}>
                 {props.fastfood.map((dishall, i)=>
                 <li key={i}>
                  {dishall}
                 </li>)}
              </ul>
          </section>
  )
} */

/* function Main(props){
  return(
          <section>
            <p>we serve the most {props.content} food around. </p>
              <ul style={{textAlign:"left"}}>
                 {props.fastfood.map((dishall)=>(
                      <li key={dishall.id}> {dishall.title} </li>
                 ))}
              </ul>

              <img 
              src={sample} 
              height={1400}  
              alt="this is blong to the website"
              />
          </section>
  )
}

function Footer(props){
  return(
        <footer>
          <p>since--{props.year}</p>
        </footer>
  )
} */

/* const dishes=[
      'Marcaroni and Cheese',
      'Salmon',
      'Tofu with Vegetables'
]; */

//const dishesObject = dishes.map((dish,i)=> ({id:i, title: dish }));

//function App() {
 // return (
  //  <div className="App">

 //     < Header  name="Tamater"/>
      /* <Main  content="favourable" fastfood={dishes} /> */
 //     <Main  content="favourable" fastfood={dishesObject} />
  //    <Footer  year={new Date().getFullYear()}   />

     /* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */

  //</div>
 /// );
//}

//export default App;
