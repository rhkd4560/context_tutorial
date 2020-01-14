import React, { useState } from 'react';
import { SampleConsumer } from '../context/sample';

const Sends = ({value, setValue}) =>{

    const [inputs, setInputs] = useState({
        inputs: value
    });

    const onChange = (e) => {
        setInputs({
            ...inputs,
            inputs: e.target.value
        })
    }

    const onSubmit = (e) => {
        e.preventDefault();
        setValue(inputs.inputs);
    }

    return (
        <form onSubmit={onSubmit}>
            <input value={inputs.inputs} onChange={onChange} />
            <button type="submit">설정</button>
        </form>
    )
};
// :: Consumer 를 사용하여 context 값을 전달해준 컨테이너 컴포넌트
const SendsContainer = () => (
    <SampleConsumer>
      {  
        ({ state, actions }) => (
          <Sends 
            value={state.value.value}
            setValue={actions.setValue}
          />
        )
      }
    </SampleConsumer>
  )
  
  // :: Sends 대신에 SendsContainer 를 내보내줌
  export default SendsContainer;