
import React, { createContext, useState } from 'react';

const Context = createContext();

const {
  Provider,
  Consumer: AnotherConsumer
} = Context;

const AnotherProvider = (props) => {
    const [number, _setNumber] = useState(1);

    const setNumber = () => {
        _setNumber(
            number + 1
        )
    }
    const state = {number};
    const actions = {setNumber};
    return (
        <Provider value={{state, actions}}>
            {props.children}
        </Provider>
    )
}

const useAnother = (WrappedComponent) => {
  return function UseAnother(props) {
    return (
      <AnotherConsumer>
        {
          ({ state, actions }) => (
            <WrappedComponent
              number={state.number}
              increment={actions.setNumber}
            />
          )
        }
      </AnotherConsumer>
    )
  }
}

export {
  AnotherProvider,
  AnotherConsumer,
  useAnother
};