import React from 'react';
import PrimaryBtn from './PrimaryBtn';

const BrandCard = ({ brand }) => {
  const { brandName, imageURL } = brand;
  return (
    <div className="shadow border-gray-200 p-4">
      <img src={imageURL} alt={brandName} />
      <PrimaryBtn className="w-full">
        {brandName}
      </PrimaryBtn>
    </div>
  );
};

export default BrandCard;