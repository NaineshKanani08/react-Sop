import React from 'react';

const ChildUseCallback = ({numberInc}) => {
      console.log('child call')
  return <div>
      <button onClick={numberInc}>Number</button>
  </div>;
};

export default React.memo(ChildUseCallback);
