import React, { useContext } from "react";
import { IndicesDataContext } from "../App";

function DataInput(props) {
  const { handleDataInput } = props;

  // method to get data from context defined
  const { rawData, indicesResults } = useContext(IndicesDataContext);
  console.log(rawData);
  console.log(indicesResults);

  return (
    <div className='data-type-container'>
      <div className='data-type'>
        <input
          type='radio'
          id='rain'
          name='input-radio'
          onClick={handleDataInput}
        />
        <label htmlFor='precipitation'>precipitation</label>
      </div>
      <div className='data-type'>
        <input
          type='radio'
          id='snow'
          name='input-radio'
          onClick={handleDataInput}
        />
        <label htmlFor='snow'>snowfall</label>
      </div>
      <div className='data-type'>
        <input
          type='radio'
          id='wind'
          name='input-radio'
          onClick={handleDataInput}
        />
        <label htmlFor='wind'>wind</label>
      </div>
      <div className='data-type'>
        <input
          type='radio'
          id='temp'
          name='input-radio'
          onClick={handleDataInput}
        />
        <label htmlFor='temperature'>temperature</label>
      </div>
    </div>
  );
}

export default DataInput;
