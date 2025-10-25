import { FaEdit, FaEye, FaStar, FaTrash } from 'react-icons/fa';
import { Link } from 'react-router';

const ProductCardEdit = ({ product, handleDelete }) => {
  const { _id, productName, image, rating, type, price } = product;



  return (
    <div className="card bg-base-100 shadow border border-base-200 p-4">
      <figure>
        <img className="h-40 object-cover"
          src={image}
          alt={productName} />
      </figure>
      <div className="card-body p-0 pt-4">
        <p className='flex items-center gap-1'>
          <FaStar className="text-orange-600" />
          <span>{rating}</span>
        </p>

        <div className='flex justify-between'>
          <h2 className="card-title">{productName.length > 10 ? productName.slice(0, 10) + "..." : productName}</h2>
          <span className='badge badge-success text-white'>In Stock</span>
        </div>
        <p className='text-neutral-500'>Type: {type}</p>
        <p className='text-neutral-600 text-xl font-semibold'>Price: ${price}</p>


        <div className='flex gap-2 place-items-center'>
          <Link to={`/productDetails/${_id}`} className="w-full card-actions mt-3">
            <button className="btn btn-sm border-0 shadow-none w-full  bg-primary text-sm text-white font-medium rounded">
              <FaEye />
            </button>
          </Link>
          <Link to={`/updateProduct/${_id}`} className="w-full card-actions mt-3">
            <button className="btn btn-sm border-0 shadow-none w-full  bg-primary text-sm text-white font-medium rounded">
              <FaEdit />
            </button>
          </Link>
          <Link onClick={() => handleDelete(_id)} className="w-full card-actions mt-3">
            <button className="btn btn-sm border-0 shadow-none w-full  bg-primary text-sm text-white font-medium rounded">
              <FaTrash />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCardEdit;