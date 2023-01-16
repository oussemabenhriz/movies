import { Rate } from 'antd';
import React, {useState} from 'react';
function Rater  ({setRate})  {

  const [value, setValue] = useState(1)

  const handleChange = value => {
    setValue(value);

  };
 setRate(value)


    return (
      <span>
        <Rate  onChange={handleChange} value ={value} />
      </span>
    );
  }

export default Rater;