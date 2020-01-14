import React from 'react';
import { SampleConsumer } from '../context/sample';

const Receives = () => {
  return (
    <SampleConsumer>
      {
        (sample) => (
          <div>
            현재 설정된 값: { sample.state.value.value }
          </div>
        )
      }
    </SampleConsumer>
  );
};

export default Receives;