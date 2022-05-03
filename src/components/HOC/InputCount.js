import React from 'react';
import UpdatedComp from './withHoc'
const InputCount = ({count,handleClick,name}) => {
    return <div>
        <h3>{name}</h3>
    <input type='number'onChange={handleClick} value={count}/>
    <h2>Value:{count}</h2>
</div>;
};

export default UpdatedComp(InputCount,1);