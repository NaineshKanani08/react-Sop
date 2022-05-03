import React from 'react';

const ChildMemo = (props) => {
    console.log('ChildMemo')
  return <div>
      <h3>Props:{props.name}</h3>
  </div>;
};

export default React.memo(ChildMemo);
