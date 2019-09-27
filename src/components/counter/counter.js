import React, {useState, useContext} from 'react';
import { CounterContext } from './counter-context-stuff';


const style = {
  container: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '40%',
  }
};
// const appReducer = (state, action) => {
//   switch(action.type) {
//     case "Increase counter":
//       return {...state, counter: action.data};
//     case "decreasing counter":
//       return {...state, counter: action.data};
//     default:
//       return state;
//   }
//
// };
class Count extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let context = this.context;

    return (
        <span style={style}>{context.count}</span>
    );

  }
}
Count.contextType = CounterContext;

export default Count;
