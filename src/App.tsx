import React from 'react';
import Realtor from './RealtorCard';
import SaleCard from './SaleCard';

// vert_crown_A : 중개사 미포함  , vert_crown_B: 중개사 포함
// vert_non_crown_0Links , vert_non_crown_1Links , vert_non_crown_2Links

const App: React.FC = () => {
  return (
    <>
      {/* <Realtor realtor='asd' /> */}

      <SaleCard align='vert_crown_B' />
    </>
  );
};

export default App;
