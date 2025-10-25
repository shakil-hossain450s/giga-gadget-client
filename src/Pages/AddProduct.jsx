import React from 'react';
import { IoBagAdd } from 'react-icons/io5';
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';

const AddProduct = () => {
  const brands = useLoaderData();
  const handleAddProduct = e => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const newProduct = Object.fromEntries(formData.entries());

    console.log(newProduct);

    fetch(`http://localhost:3000/addProduct`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newProduct)
    })
      .then(res => res.json())
      .then(data => {
        console.log('after post data: ', data);
        if (data.success) {
          Swal.fire({
            title: "Product added successfully!",
            icon: "success",
            draggable: true
          });
        }
      })

  }
  return (
    <section className='my-6 w-11/12 mx-auto border border-gray-200 rounded-2xl p-4 shadow'>
      <div className='flex items-center gap-2 justify-center text-3xl font-bold mb-4'>
        <span className='text-white bg-primary p-2 rounded-full flex items-center justify-center'><IoBagAdd /></span>
        <h2 className=''>Add your product</h2>
      </div>

      <form onSubmit={handleAddProduct}>
        <div className='grid grid-cols-12 gap-8'>
          {/* name */}
          <div className="col-span-6">
            <label className="label mb-1 text-neutral-900 font-semibold">Name:</label>
            <input
              type="text"
              name="productName"
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
              className="input bg-base-100 border border-neutral-200 outline-none w-full"
              placeholder="Enter image URL"
              required
            />
          </div>

          {/* brand */}
          <div className="col-span-6">
            <label className="label mb-1 text-neutral-900 font-semibold">Brand Name:</label>
            <select name="brandName" className="select bg-base-100 border border-neutral-200 outline-none w-full">
              <option disabled={true}>Select Brand</option>
              {brands.map(brand => (
                <option value={brand.brandName}>{brand.brandName}</option>
              ))}
            </select>
          </div>

          {/* Type */}
          <div className="col-span-6">
            <label className="label mb-1 text-neutral-900 font-semibold">Type:</label>
            <input
              type="text"
              name="type"
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
              rows="30"
              className="input bg-base-100 border border-neutral-200 outline-none w-full h-24 p-3"
              placeholder="Enter description"
              required
            />

          </div>
          <div className='col-span-12'>
            <button type='submit' className='btn btn-primary w-full'>Add Product</button>
          </div>
        </div>


      </form>
    </section>
  );
};

export default AddProduct;