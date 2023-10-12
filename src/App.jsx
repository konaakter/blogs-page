import { useForm } from "react-hook-form";
import { FaCloudUploadAlt } from "react-icons/fa";

import './App.css'
import { useState } from "react";

const imgToken = import.meta.env.VITE_IMG_HOSTING_TOKEN;
console.log(imgToken)

function App() {
  const [upload, setUpload] = useState(null);
  const imgUrl = `https://api.imgbb.com/1/upload?expiration=600&key=${imgToken}`
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    const formData = new FormData();
    formData.append('image', data.photo[0])

    fetch(imgUrl, {
      method: 'POST',

      body: formData
    })
      .then(res => res.json())
      .then(imgResponse => {
        console.log(imgResponse)
        if (imgResponse.success) {
          const imageurl = imgResponse.data.display_url;
          console.log(imageurl)
          const { title, shortDescription } = data;
          const blogData = { title, shortDescription, img: imageurl }
          fetch('http://localhost:3000/blog', {
            method: 'POST',
            headers: {
              'content-type': 'application/json'
            },
            body: JSON.stringify(blogData)
          })
            .then(res => res.json())
            .then(data => {
              console.log(data)


            })
        }


      })

    
  };


  return (
    <>
      <div>
        <div className="bg-slate-700 px-16 pt-5 pb-20">
          <h1 className="text-3xl font-semibold text-white py-2">
            Add a new blog
          </h1>
        </div>
        <div className="w-[90%] relative bottom-16 mx-auto bg-white  px-12 py-10 shadow-xl rounded-md">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <h1 className=" font-semibold text-slate-700">Blog Title</h1>
              <input
                className="w-full px-8 py-3 mt-2 rounded-lg font-medium  border  drop-shadow-md text-sm focus:outline-none focus:border border-gray-300"
                type="text"
                {...register("title", { required: "Title field is required" })}
                placeholder="Please enter blog title"
              />
              {errors.title && (
                <p className="text-red-500 mt-3">{errors.title.message}</p>
              )}
            </div>

            <div>
              <h1 className=" font-semibold text-slate-700">Author Name</h1>
              <input
                className="w-full px-8 py-3 mt-2 rounded-lg font-medium  border  drop-shadow-md text-sm focus:outline-none focus:border border-gray-300"
                type="text"
                {...register("authorName", {
                  required: "Author name is required",
                })}
                placeholder="Please enter author name"
              />
              {errors.authorName && (
                <p className="text-red-500 mt-3">{errors.authorName.message}</p>
              )}
            </div>
            <div className="mt-5">
              <h1 className=" font-semibold text-slate-700">
                Short Description for blog{" "}
              </h1>
              <textarea
                rows="4"
                className="w-full px-8 py-3 mt-2 rounded-lg font-medium  border  drop-shadow-md text-sm focus:outline-none focus:border border-gray-300"
                type="text"
                {...register("shortDescription", {
                  required: "Short description field is required",
                })}
                placeholder="Please enter short description"
              />
              {errors.shortDescription && (
                <p className="text-red-500 mt-3">
                  {errors.shortDescription.message}
                </p>
              )}
            </div>

            <div>
              <input
                onInput={(e) => setUpload(e.target.files[0].name)}
                className="  mt-8 rounded-lg font-medium file:border-slate-600 file:p-12 file:border-dashed file:cursor-pointer  drop-shadow-lg text-sm  "
                type="file"
                id="upload"
                {...register("photo", { required: "Photo field is required" })}
                hidden
              />
              <div>
                <label
                  htmlFor="upload"
                  className=" w-[300px] h-[100px] mx-auto flex flex-col justify-center items-center border-2 border-dashed border-blue-500 rounded-md cursor-pointer mt-8 "
                >
                  <span>
                    <FaCloudUploadAlt className="w-12 h-12 text-blue-600" />
                  </span>
                  <p className="text-blue-500 font-semibold">
                    {upload ? "Uploaded" : "Click to upload"}
                  </p>
                </label>
                {upload && (
                  <p className="bg-blue-500 text-white px-3 py-1 rounded mt-2">
                    {upload}
                  </p>
                )}
                {errors.photo && (
                  <p className="text-red-500 mt-3">{errors.photo.message}</p>
                )}
              </div>
            </div>


            <div className="flex justify-center mt-5">
              <button className="bg-slate-700 px-10 py-2 text-lg rounded text-white ">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default App
