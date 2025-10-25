import React from 'react';
import { FaShoppingBag } from 'react-icons/fa';
import HeaderInfo from './HeaderInfo';
import ProductCard from './ProductCard';

const ExploreProducts = ({ allProducts }) => {
  const { products } = allProducts;
  console.log(products);

  return (
    <section className='w-11/12 mx-auto my-20'>
      <HeaderInfo iconName={<FaShoppingBag />} info={"Our Products"}></HeaderInfo>
      <h2 className="text-4xl font-bold text-neutral-800">Explore Our Products</h2>
      <div className="grid grid-cols-4 gap-6 mt-8">
        {
          products.slice(0, 10).map(product => (
            <ProductCard key={product._id} product={product}></ProductCard>
          ))
        }
      </div>
    </section>
  );
};

export default ExploreProducts;