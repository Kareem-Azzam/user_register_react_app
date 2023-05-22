import React from "react";

const Form = () => {
  return (
    <form
      encType="multipart/form-data"
      method="POST"
      action="index.php"
      className="mt-7 grid gap-3 grid-cols-1 md:grid-cols-2 md:w-3/4 mx-auto"
    >
      <div className=" gap-3 flex flex-col ">
        <div>
          <h3 className="text-3xl text-secondColor">Welcome back</h3>
          <h3 className="text-sm text-gray-400">
            please enter your information!
          </h3>
        </div>

        <input
          className="border border-secondColor/25   bg-secondColor/5 rounded-sm p-2 w-full text-sm"
          type="text"
          name="sender_name"
          id="sender_name"
          placeholder="First Name... "
          required
        />
        <input
          className="border border-secondColor/25 bg-secondColor/5 rounded-sm p-2 w-full text-sm"
          type="text"
          name="sender_name2"
          id="sender_name2"
          placeholder="Second Name..."
          required
        />
        <div className="flex m-0">
          <select
            name="number_citys"
            id="number_citys"
            className="border border-secondColor/25  bg-secondColor/5 rounded-sm p-2 mr-2 text-sm"
            required
          >
            <option value="+94" >
              +963
            </option>
            <option value="+968">+963</option>
            <option value="+969">+969</option>
          </select>
          <input
            className="border border-secondColor/25  bg-secondColor/5 rounded-sm p-2 w-full text-sm"
            type="tel"
            name="sender_number"
            id="sender_number"
            placeholder=" Your Phone Number..."
            required
          />
        </div>
        <input
          className="border border-secondColor/25  bg-secondColor/5 rounded-sm p-2 w-full text-sm "
          type="email"
          name="sender_email"
          id="sender_email"
          placeholder="Your Email..."
          required
        />
        <div className=" gap-3 items-center flex text-sm">
          <label className="justify-around items-center flex">
            <div className="">Gender</div>
          </label>
          <label className="justify-around items-center flex gap-1">
            <input
              type="radio"
              name="gender"
              id="gender"
              value="male"
              defaultChecked
            />
            Male
          </label>
          <label className="justify-around items-center flex gap-1">
            <input type="radio" name="gender" id="gender" value="female" />
            Female
          </label>
        </div>
      </div>

      <div className=" border border-gray-700  p-4 rounded-xl flex flex-col gap-6 ">
        <div className="text-sm text-gray-400">
          <h3 className=" text-base">Upload your images</h3>
          <p className="text-gray-500">
            Hinweis: Es muss sehr klare Bilder hinzugefügen
          </p>
          <p className="text-gray-500">
            Es muss in den folgenden Formaten vorliegen: JPG, PNG, GIF
          </p>
        </div>

        <div className="text-sm">
          <label htmlFor="attachment" className="text-gray-500">
            Add your image
          </label>
          <input
            className="mt-1 w-full rounded bg-secondColor/10 p-1"
            type="file"
            name="attachment"
            id="attachment"
            accept="image/png, image/jpg , image/gif"
            required
          />
        </div>
        <div className="text-sm">
          <label htmlFor="attachment" className="text-gray-500">
            Please attach a copy of your ID.{" "}
          </label>
          <input
            className="mt-1 w-full rounded bg-secondColor/10 p-1"
            type="file"
            name="attachment"
            id="attachment"
            accept="image/png, image/jpg , image/gif"
            required
          />
        </div>
        <div className="text-sm">
          <label htmlFor="attachment" className="text-gray-500">
            Please attach a copy of your ID.
          </label>
          <input
            className="mt-1 w-full rounded bg-secondColor/10 p-1"
            type="file"
            name="attachment"
            id="attachment"
            accept="image/png, image/jpg , image/gif"
            required
          />
        </div>
        <div className="text-sm">
          <label htmlFor="attachment3" className="text-gray-500">
            Please attach a copy of your high school diploma certificate here.
          </label>
          <input
            className="mt-2 w-full rounded bg-secondColor/10 p-1"
            type="file"
            name="attachment3"
            id="attachment3"
            accept="image/png, image/jpg , image/gif"
            required
          />
        </div>
        <button
          type="submit"
          className="border-none py-1 px-8 rounded-sm bg-green-500 hover:bg-green-600 transition-all flex self-start justify-center items-center text-sm "
          name="button"
          id="upload_form_butten"
        >
          <div>
            <h3>Send</h3>
          </div>
        </button>
      </div>

    </form>
  );
};

export default Form;
