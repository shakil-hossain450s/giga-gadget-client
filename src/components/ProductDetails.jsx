import { FaArrowLeft, FaFacebook, FaHeart, FaTwitter } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import { Link, useLoaderData, useNavigate } from "react-router";

const ProductDetails = () => {
  const navigate = useNavigate();
  const { product } = useLoaderData();
  console.log(product);
  const { _id, productName, image, rating, type, price, brandName, description } = product;

  return (
    <section className="w-11/12 mx-auto my-4">
      <Link onClick={() => navigate(-1)}>
        <button className='btn btn-outline border border-primary p-3 rounded-full text-primary mb-6 hover:bg-primary hover:text-white'>
          <FaArrowLeft />
        </button>
      </Link>
      <div className="grid grid-cols-12 gap-8 items-center">
        <div className="col-span-6 border border-gray-300 rounded shadow">
          <img src={image} alt={productName} />
        </div>
        <div className="col-span-6">
          <p className=" text-neutral-700">{brandName}</p>
          <h2 className="text-4xl font-bold">{productName}</h2>
          <div className="space-y-6 mt-6">
            <div className="flex items-center">
              <p>Rating: <span className="text-primary">{rating}</span></p>
              <div className="divider divider-horizontal"></div>
              <div className="flex gap-3 items-center">
                <a className="text-2xl text-neutral-800 cursor-pointer">
                  <FaFacebook />
                </a>
                <a className="text-2xl text-neutral-800 cursor-pointer">
                  <FaTwitter />
                </a>
                <a className="text-2xl text-neutral-800 cursor-pointer">
                  <FaMessage />
                </a>
              </div>
            </div>
            <p className="text-neutral-800">{description}</p>
            <p>Type: <span className="text-primary capitalize">{type}</span></p>
          </div>
          <div className="border-b border-gray-300 my-6"></div>
          <div className="flex justify-between items-center ">
            <h3 className="text-2xl font-bold text-neutral-800">${price}</h3>
            <div className="flex gap-3 items-center">
              <button className="btn btn-primary shadow-none border-none text-white px-6">Add to Cart</button>
              <span className="text-gray-600 bg-gray-300 p-3 rounded-full cursor-pointer">
                <FaHeart />
              </span>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;