import React from 'react';
import Realtor from './RealtorCard';
import SaleCard from './SaleCard';

//vertical_A : 중개사 미포함  , vertical_B: 중개사 포함  vertical_non_crown_A

const App: React.FC = () => {
  return (
    <>
      {/* <Realtor realtor='asd' /> */}

      <SaleCard align='vertical_B' />
    </>
  );
};

export default App;
