import React from 'react';
const Lazy= React.lazy(()=>import('./Lazy'))
const Home = () => {
  return <div>
      <h1>Suspense and lazy</h1>
      <React.Suspense fallback="Loading first...">
            <Lazy />
      </React.Suspense>
  </div>;
};

export default Home;
