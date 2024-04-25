import React from "react";

const AddCraft = () => {
  return (
    <div className="max-w-sm px-6 md:max-w-3xl md:px-8 lg:max-w-6xl mx-auto lg:mt-12">
      <div className="bg-[#F4F3F0] md:px-32 md:py-16 text-center">
        <h1 className="font-rancho  text-5xl">Add Craft Items</h1>
        
        <form  className="card-body grid grid-cols-2">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Image</span>
            </label>
            <input
              type="text"
              name="image"
              placeholder="Enter Image Url"
              className="input"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Item Name</span>
            </label>
            <input
              type="text"
              name="item_name"
              placeholder="Enter Item Name"
              className="input "
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Subcategory Name</span>
            </label>
            <input
              type="text"
              name=" subcategory_name"
              placeholder="Enter Subcategory Name"
              className="input "
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Short Description</span>
            </label>
            <input
              type="text"
              name="short_description"
              placeholder="Enter Short Description"
              className="input "
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              type="text"
              name="price"
              placeholder="Enter Price"
              className="input "
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Rating</span>
            </label>
            <input
              type="text"
              name="rating"
              placeholder="Enter Rating"
              className="input "
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Stock Status</span>
            </label>
            <input
              type="text"
              name="stock_status"
              placeholder="Enter Stock Status"
              className="input "
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">User Email</span>
            </label>
            <input
              type="text"
              name="user_email"
              placeholder="Enter User Email"
              className="input "
              required
            />
          </div>
          <div className="form-control col-span-2">
            <label className="label">
              <span className="label-text">User Name</span>
            </label>
            <input
              type="text"
              name="user_name"
              placeholder="Enter User Name"
              className="input "
              required
            />
          </div>
          <div className="form-control mt-6 col-span-2">
            <button type="submit" className="btn bg-[#D2B48C]">
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCraft;
