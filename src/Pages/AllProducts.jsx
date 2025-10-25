import { Link, useLoaderData, useNavigate } from 'react-router';
import ProductCardEdit from '../components/ProductCardEdit';
import { FaArrowLeft } from 'react-icons/fa';
import { useState } from 'react';
import Swal from 'sweetalert2';

const AllProducts = () => {
  const { products: initialProducts } = useLoaderData();
  const [products, setProducts] = useState(initialProducts);
  const navigate = useNavigate();

  const handleDelete = (id) => {

    fetch(`http://localhost:3000/product/${id}`, {
      method: "DELETE"
    })
      .then(res => res.json())
      .then(data => {
        console.log('after delete', data);
        if (data.success) {
          Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
              const remaining = products.filter(p => p._id !== id);
              setProducts(remaining);
              Swal.fire({
                title: "Deleted!",
                text: "Your Product has been deleted.",
                icon: "success"
              });
            }
          });
        }
      })
  }

  return (
    <section className="w-11/12 mx-auto my-4">
      <Link onClick={() => navigate(-1)}>
        <button className='btn btn-outline border border-primary p-3 rounded-full text-primary hover:bg-primary hover:text-white'>
          <FaArrowLeft />
        </button>
      </Link>
      <h2>All Products</h2>
      <div className="grid grid-cols-4 gap-8">
        {
          products.map(product => (
            <ProductCardEdit key={product._id} product={product} handleDelete={handleDelete}></ProductCardEdit>
          ))
        }
      </div>
    </section>
  );
};

export default AllProducts;