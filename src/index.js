import React from 'react';
import ReactDOM from 'react-dom';

class label extends React.Component {}

const App = () => {
  //function getButtonText() {
  // return 'Click me!!!';
  //};

  var texto = {
    name: 'Click me!!',
  };

  const style = {
    backgroundColor: 'blue',
    color: 'white',
  };

  return (
    <div style={style}>
      <label className="label" htmlFor="name">
        Enter name
      </label>
      <input id="name" type="text" />

      <button>{texto.name}</button>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
