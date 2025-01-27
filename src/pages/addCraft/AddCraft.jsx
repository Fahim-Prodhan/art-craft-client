import React, { useContext } from "react";
import baseUrl from "../../services/helper";
import Swal from "sweetalert2";
import { AuthContext } from "../../provider/AuthProvider";
import { Helmet } from "react-helmet";

const AddCraft = () => {

  const { user } = useContext(AuthContext);

  const subcategories = ['Landscape Painting', "Portrait Drawing", "Watercolour Painting", "Oil Painting", "Charcoal Sketching", "Cartoon Drawing"]

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
    const processing_time = form.processing_time.value;
    const user_email = form.user_email.value;
    const user_name = form.user_name.value;
    const customization = form.customization.value;

    const formValues = {
      image,
      item_name,
      subcategory_name,
      short_description,
      price,
      rating,
      stock_status,
      processing_time,
      user_email,
      user_name,
      customization,
    };

    fetch(`${baseUrl}/addCrafts`, {
      method: "POST",
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(formValues),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Good job!",
            text: "Craft is added!",
            icon: "success",
          });

          form.reset();
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
          });
        }
      });
  };

  return (
    <div className="mb-12 max-w-sm px-6 md:max-w-3xl lg:px-8 lg:max-w-6xl mx-auto mt-6 lg:mt-12">
      <Helmet>
        <title>CraftoPia | Add Craft Item</title>
      </Helmet>
      <div className="bg-[#eee] lg:px-28 md:py-16 text-center rounded-2xl">
        <h1 className="font-semibold text-[#FF6D60] pt-4 text-3xl md:text-5xl">
          Add Craft Items
        </h1>

        <form onSubmit={handleAddCraft} className="card-body ">
          <div className="md:grid md:grid-cols-2 gap-3">
            <div className="form-control">
              <label className="label">
                <span className=" text-[14px] font-semibold label-text">
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
                <span className=" text-[14px] font-semibold label-text">
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
                <span className=" text-[14px] font-semibold label-text">
                  Subcategory Name
                </span>
              </label>
              <select name="subcategory_name" className="select select-bordered w-full">
                {subcategories.map((subcategory, index) => (
                  <option key={index}>{subcategory}</option>
                ))}
              </select>
            </div>
            <div className="form-control">
              <label className="label">
                <span className=" text-[14px] font-semibold label-text">
                  Subcategory Name
                </span>
              </label>
              <select name="customization" className="select select-bordered w-full">
                <option>Yes</option>
                <option>No</option>
              </select>
            </div>
            <div className="form-control col-span-2">
              <label className="label">
                <span className=" text-[14px] font-semibold label-text">
                  Short Description
                </span>
              </label>
              <textarea
                type="text"
                name="short_description"
                placeholder="Enter Short Description"
                className="input "
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className=" text-[14px] font-semibold label-text">
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
                <span className=" text-[14px] font-semibold label-text">
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
                <span className=" text-[14px] font-semibold label-text">
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
            <div className="form-control ">
              <label className="label">
                <span className=" text-[14px] font-semibold label-text">
                  Processing Time
                </span>
              </label>
              <input
                type="text"
                name="processing_time"
                placeholder="Enter processing_time"
                className="input "
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className=" text-[14px] font-semibold label-text">
                  User Email
                </span>
              </label>
              <input
                value={user?.email}
                type="text"
                name="user_email"
                placeholder="Enter User Email"
                className="input "
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className=" text-[14px] font-semibold label-text">
                  User Name
                </span>
              </label>
              <input
                value={user?.displayName}
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
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCraft;
