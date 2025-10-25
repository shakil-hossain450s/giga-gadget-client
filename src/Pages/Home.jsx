import React, { Suspense } from 'react';
import Hero from '../components/Hero';
import BrandCategory from '../components/BrandCategory';
import ExploreProducts from '../components/ExploreProducts';
import HeaderInfo from '../components/HeaderInfo';
import { BiCategory } from 'react-icons/bi';

const brandsPromise = fetch("http://localhost:3000/brands").then(res => res.json());

const Home = () => {
  return (
    <section className="w-11/12 mx-auto my-20">
      <Hero></Hero>
      <div>
        <div className="w-11/12 mx-auto my-20">
          <HeaderInfo iconName={<BiCategory />} info={"Top Brands"}></HeaderInfo>
          <h2 className="text-4xl font-bold text-neutral-800">Browse by Brands</h2>
        </div>
        <div>
          <Suspense fallback={<p className='text-xl font-medium text-center'>Brand Data Loading...</p>}>
            <BrandCategory brandsPromise={brandsPromise}></BrandCategory>
          </Suspense>
        </div>
      </div>
      <ExploreProducts></ExploreProducts>
    </section>
  );
};

export default Home;