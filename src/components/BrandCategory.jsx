import { use } from "react";
import { BiCategory } from "react-icons/bi";
import HeaderInfo from "./HeaderInfo";


const BrandCategory = ({ brandsPromise }) => {
  const brands = use(brandsPromise);
  console.log(brands);

  return (
    <section className="w-11/12 mx-auto my-20">
      <div className="grid grid-cols-5 gap-6 mt-10">
        {
          brands.map(brand => (
            <div key={brand._id} className="border rounded-lg w-full border-gray-200 p-4 shadow flex flex-col justify-between" >
              <img className="w-full h-[150px] object-contain rounded-md" src={brand.imageURL} alt={brand.brandName} />
              <button className="btn btn-primary text-lg w-full mt-4">{brand.brandName}</button>
            </div>
          ))
        }
      </div>
    </section>
  );
};

export default BrandCategory;