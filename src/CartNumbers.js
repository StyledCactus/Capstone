import React, { createContext , useContext, useState} from 'react';

const DinersContext = createContext();

export const useDinersContext = () => useContext(DinersContext);

export const DinersProvider = ({ children}) => {
    const [valueOne, setValueOne] = useState(1);
    const [valueTwo, setValueTwo] = useState(1);
    const [valueThree, setValueThree] = useState(1);
    

  const raiseValueOne = () => {
    setValueOne(prevValue => prevValue + 1);
    localStorage.setItem("valueOne", valueOne);
  }

  const lowerValueOne = () => {
    setValueOne(prevValue => Math.max(0, prevValue - 1));
    localStorage.setItem("valueOne", valueOne);
  }

  const raiseValueTwo = () => {
    setValueTwo(prevValue => prevValue + 1);
  }

  const lowerValueTwo = () => {
    setValueTwo(prevValue => Math.max(0, prevValue - 1));
  }

  const raiseValueThree = () => {
    setValueThree(prevValue => prevValue + 1);
  }

  const lowerValueThree = () => {
    setValueThree(prevValue => Math.max(0, prevValue - 1));
  }

  return (
    <DinersContext.Provider value={{
        valueOne,
      raiseValueOne,
      lowerValueOne,
      valueTwo,
      raiseValueTwo,
      lowerValueTwo,
      valueThree,
      raiseValueThree,
      lowerValueThree,
    }}>
        {children}
    </DinersContext.Provider>
  )
}