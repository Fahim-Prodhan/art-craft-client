import React, { useContext } from "react";
import baseUrl from "../../services/helper";
import Swal from "sweetalert2";
import { AuthContext } from "../../provider/AuthProvider";

const AddCraft = () => {

  const { user } = useContext(AuthContext);

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
            text: "You clicked the button!",
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
    <div className="max-w-sm px-6 md:max-w-3xl lg:px-8 lg:max-w-6xl mx-auto mt-6 lg:mt-12">
      <div className="bg-[#f7d16015] lg:px-28 md:py-16 text-center">
        <h1 className="font-semibold text-[#FF6D60] text-5xl">
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
                <span className=" text-[14px] font-semibold label-text">
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

            <div>
              <label className="grid gap-3 label">
                <span className=" text-[14px] font-semibold label-text">
                  Customization
                </span>
                <div>
                  <label className="flex gap-3">
                    <input
                      value={"Yes"}
                      type="radio"
                      name="customization"
                      className="radio"
                      checked
                    />
                    <span>Yes</span>
                  </label>
                </div>
                <div>
                  <label className="flex gap-3">
                    <input
                      value={"No"}
                      type="radio"
                      name="customization"
                      className="radio"
                    />
                    <span>No</span>
                  </label>
                </div>
              </label>
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
