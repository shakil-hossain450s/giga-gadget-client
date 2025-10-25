import React from 'react';
import { FaShoppingBag } from 'react-icons/fa';
import HeaderInfo from './HeaderInfo';

const ExploreProducts = () => {
  return (
    <section className='w-11/12 mx-auto my-20'>
      <HeaderInfo iconName={<FaShoppingBag />} info={"Our Products"}></HeaderInfo>
      <h2 className="text-4xl font-bold text-neutral-800">Explore Our Products</h2>
      <div>
        
      </div>
    </section>
  );
};

export default ExploreProducts;