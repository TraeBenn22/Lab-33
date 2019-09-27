import React, {useEffect, useReducer} from 'react';
import Counter from './components/counter/counter';
import Decrementer from './components/decrementer';
import Incrementer from './components/incremeter';

const style = {
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-evenly',
  width: '40%',
};

export default class App extends React.Component {
  render() {
    return (
      <>
        <Counter />
        <div style={style}>
          <Decrementer />
          <Counter />
          <Incrementer />
        </div>
      </>
    );
  }
}
