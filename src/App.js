import React from 'react';

function Food(props){
  return (
    <h1>
    I like {props.fav}
  </h1>
  )
  
}

function App() {
  return (
    <div className="App">
      <h1>hello</h1>
      <Food fav="kimchi"/>
      <Food fav="remen"/>
      <Food fav="samgiopsal"/>
      <Food fav="chuumii"/>
    </div>
  );
}

export default App;
