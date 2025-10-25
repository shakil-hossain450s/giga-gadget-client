import { useEffect, useState } from "react";
import { IoBagAdd } from "react-icons/io5";
import { useLoaderData, useNavigate } from "react-router";
import Swal from "sweetalert2";


const UpdateProduct = () => {
  const navigate = useNavigate();
  const [brands, setBrands] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/brands")
      .then(res => res.json())
      .then(data => {
        setBrands(data);
      })
  }, []);

  const { product } = useLoaderData();
  const { _id, productName, image, rating, type, price, brandName, description } = product;

  const handleUpdate = e => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const updatedProduct = Object.fromEntries(formData.entries());
    console.log(updatedProduct);

    fetch(`http://localhost:3000/product/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(updatedProduct)
    })
      .then(res => res.json())
      .then(data => {
        console.log("after update", data);
        if (data.success) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Product updated successfully",
            showConfirmButton: false,
            timer: 1000
          });
          navigate(-1);
        }
      })
  }
  return (
    <section className='my-6 w-11/12 mx-auto border border-gray-200 rounded-2xl p-4 shadow'>
      <div className='flex items-center gap-2 justify-center text-3xl font-bold mb-4'>
        <span className='text-white bg-primary p-2 rounded-full flex items-center justify-center'><IoBagAdd /></span>
        <h2 className=''>Update product</h2>
      </div>

      <form onSubmit={handleUpdate}>
        <div className='grid grid-cols-12 gap-8'>
          {/* name */}
          <div className="col-span-6">
            <label className="label mb-1 text-neutral-900 font-semibold">Name:</label>
            <input
              type="text"
              name="productName"
              defaultValue={productName}
              className="input bg-base-100 border border-neutral-200 outline-none w-full"
              placeholder="Name"
              required
            />
          </div>

          {/* Image */}
          <div className="col-span-6">
            <label className="label mb-1 text-neutral-900 font-semibold">Image:</label>
            <input
              type="text"
              name="image"
              defaultValue={image}
              className="input bg-base-100 border border-neutral-200 outline-none w-full"
              placeholder="Enter image URL"
              required
            />
          </div>

          {/* brand */}
          <div className="col-span-6">
            <label className="label mb-1 text-neutral-900 font-semibold">Brand Name:</label>
            <select
              name="brandName"
              defaultValue={brandName}
              className="select border border-neutral-200 outline-none w-full"
              required
            >
              <option disabled value="">Select Brand</option>
              {brands.map((brand) => (
                <option key={brand._id} value={brand.brandName}>
                  {brand.brandName}
                </option>
              ))}
            </select>
          </div>

          {/* Type */}
          <div className="col-span-6">
            <label className="label mb-1 text-neutral-900 font-semibold">Type:</label>
            <input
              type="text"
              name="type"
              defaultValue={type}
              className="input bg-base-100 border border-neutral-200 outline-none w-full"
              placeholder="Enter Type"
              required
            />
          </div>

          {/* Price */}
          <div className="col-span-6">
            <label className="label mb-1 text-neutral-900 font-semibold">Price:</label>
            <input
              type="text"
              name="price"
              defaultValue={price}
              className="input bg-base-100 border border-neutral-200 outline-none w-full"
              placeholder="Enter price"
              required
            />
          </div>

          {/* Rating */}
          <div className="col-span-6">
            <label className="label mb-1 text-neutral-900 font-semibold">Rating:</label>
            <input
              type="text"
              name="rating"
              defaultValue={rating}
              className="input bg-base-100 border border-neutral-200 outline-none w-full"
              placeholder="Enter rating"
              required
            />
          </div>

          {/* Description */}
          <div className="col-span-12">
            <label className="label mb-1 text-neutral-900 font-semibold">Description:</label>
            <textarea
              type="text"
              name="description"
              defaultValue={description}
              rows="30"
              className="input bg-base-100 border border-neutral-200 outline-none w-full h-24 p-3"
              placeholder="Enter description"
              required
            />

          </div>
          <div className='col-span-12'>
            <button type='submit' className='btn btn-primary w-full'>Update Product</button>
          </div>
        </div>


      </form>
    </section>
  );
};

export default UpdateProduct;