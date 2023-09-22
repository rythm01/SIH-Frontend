import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import axios from "axios";

  const AddAssets = () => {
  const [formData, setFormData] = useState({
    name: "",
  });

  const [selectedFile, setSelectedFile] = useState(null);

  // Function to handle form input changes
  const handleChange = (e) => {
    // const { name, value } = e.target;
    setFormData({
      ...formData,
     "name":e.target.value,
    });
  };

  // Function to handle file input changes
  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
    // console.log()
  };

  // Function to handle form submission
  const handleSubmit = async (values) => {
    // Create a FormData object to send the file
    const form = new FormData();
    form.append("char", formData.name);
    form.append("image", selectedFile);
    console.log(typeof(values.name));
    console.log(formData.name);
    console.log(selectedFile);
     // Make a POST request to the API endpoint with the form data and file

     try {
      await axios
      .post("https://signbase.onrender.com/add-char",form, {
        headers: {
          "Content-Type": "multipart/form-data", // Set content type for file upload
        },
      })
      .then((response) => {
        // Handle the API response if needed
        console.log("Data added successfully:", response.data);
      })
      .catch((error) => {
        // Handle any errors here
        console.error("Error adding data:", error.response.data);
      });
      
     } catch (error) {
      console.error("Error adding data:", error);
     }
    
  };

  // Initial form values
  const initialValues = {
    name: "",
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded-lg">
      <h1 className="text-center mb-6 text-2xl font-bold">ADD DATA</h1>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <div className="mb-4">
            <label htmlFor="name" className="block mb-1 font-medium">
              Name:
            </label>
            <Field
              type="text"
              id="name"
              name="name"
              onChange={handleChange}
              value={formData.name}
              style={{
                width: "100%",
                padding: "0.75rem",
                border: "1px solid black",
                borderRadius: "0.375rem",
                boxShadow: "0 1px 2px rgba(0, 0, 0, 0.05)",
                outline: "none",
              }}
            />
          </div>

          <div className="my-5">
            <label
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              htmlFor="files"
            >
              Upload file
            </label>
            <input
              style={{
                width: "100%",
                padding: "0.75rem",
                border: "1px solid black",
                borderRadius: "0.375rem",
                boxShadow: "0 1px 2px rgba(0, 0, 0, 0.05)",
                outline: "none",
              }}
              id="files"
              type="file"
              name="file"
              onChange={handleFileChange}
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-pink-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring focus:ring-pink-200"
          >
            Submit
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default AddAssets;



// import { Formik, Form, Field } from "formik";
// import { useState } from "react";

// const AddAssets = () => {
//   const [selectedFile, setSelectedFile] = useState(null);

//   const initialValues = {
//     name: ""
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...selectedFile,
//       [name]: value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     // Make a POST request to the API endpoint with the form data
//     axios
//       .post('https://signbase.onrender.com/add-char', selectedFile)
//       .then((response) => {
//         // Handle the API response if needed
//         console.log('Data added successfully:', response.data);
//       })
//       .catch((error) => {
//         // Handle any errors here
//         console.error('Error adding data:', error);
//       });
//   }
//   return (
//     <div className="max-w-md mx-auto p-4 bg-white rounded-lg">
//       <h1 className="text-center mb-6 text-2xl font-bold">ADD DATA</h1>
//       <Formik initialValues={initialValues} onSubmit={handleSubmit}>
//         <Form>
//           <div className="mb-4">
//             <label htmlFor="name" className="block mb-1 font-medium">
//               Name:
//             </label>
//             <Field
//               type="text"
//               id="name"
//               name="name"
//               style={{
//                 width: '100%',
//                 padding: '0.75rem',
//                 border: '1px solid black',
//                 borderRadius: '0.375rem',
//                 boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)',
//                 outline: 'none',
//               }}
//             />
//           </div>
          
//           <div className="my-5">
//             <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="multiple_files">Upload file</label>
//             <input
//               style={{
//                 width: '100%',
//                 padding: '0.75rem',
//                 border: '1px solid black',
//                 borderRadius: '0.375rem',
//                 boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)',
//                 outline: 'none',
//               }}
//               id="files"
//               type="file"
//               onChange={handleChange}
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full py-2 px-4 bg-pink-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring focus:ring-pink-200"
//           >
//             Submit
//           </button>
//         </Form>
//       </Formik>
//     </div>
//   );
// };
// export default AddAssets