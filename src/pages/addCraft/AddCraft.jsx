import React from "react";

const AddCraft = () => {
  const handleAddCraft = (e) => {
    e.preventDefault();
    e.preventDefault();
    const form = e.target;
    const image = form.image.value;
    const item_name = form.item_name.value;
    const subcategory_name = form.subcategory_name.value;
    const short_description = form.short_description.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const stock_status = form.stock_status.value;
    const user_email = form.user_email.value;
    const user_name = form.user_name.value;

    const formValues = {
      image,
      item_name,
      subcategory_name,
      short_description,
      price,
      rating,
      stock_status,
      user_email,
      user_name
    };
    console.log(formValues);
  };

  return (
    <div className="max-w-sm px-6 md:max-w-3xl md:px-8 lg:max-w-6xl mx-auto lg:mt-12">
      <div className="bg-[#f7d16015] md:px-32 md:py-16 text-center">
        <h1 className="font-rancho text-[#FF6D60] text-5xl">Add Craft Items</h1>

        <form onSubmit={handleAddCraft} className="card-body grid grid-cols-2">
          <div className="form-control">
            <label className="label">
              <span className="font-rancho text-[14px] font-semibold label-text">
                Image
              </span>
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
              <span className="font-rancho text-[14px] font-semibold label-text">
                Item Name
              </span>
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
              <span className="font-rancho text-[14px] font-semibold label-text">
                Subcategory Name
              </span>
            </label>
            <input
              type="text"
              name="subcategory_name"
              placeholder="Enter Subcategory Name"
              className="input "
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="font-rancho text-[14px] font-semibold label-text">
                Short Description
              </span>
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
              <span className="font-rancho text-[14px] font-semibold label-text">
                Price
              </span>
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
              <span className="font-rancho text-[14px] font-semibold label-text">
                Rating
              </span>
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
              <span className="font-rancho text-[14px] font-semibold label-text">
                Stock Status
              </span>
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
              <span className="font-rancho text-[14px] font-semibold label-text">
                User Email
              </span>
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
              <span className="font-rancho text-[14px] font-semibold label-text">
                User Name
              </span>
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
            <button type="submit" className="btn bg-[#FF6D60] text-white">
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCraft;
