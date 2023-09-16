import { Formik, Form, Field } from "formik";
import { useState } from "react";

const AddAssets = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const initialValues = {
    name: "",
    price: 0,
    stock: 0,
    description: "",
    category: "",
    photos: null,
  };

  const handleSubmit = async (values) => {
    console.log(values);
    console.log(selectedFile);
  }
  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded-lg">
      <h1 className="text-center mb-6 text-2xl font-bold">Product Form</h1>
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
              style={{
                width: '100%',
                padding: '0.75rem',
                border: '1px solid black',
                borderRadius: '0.375rem',
                boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)',
                outline: 'none',
              }}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="price" className="block mb-1 font-medium">
              Price:
            </label>
            <Field
              type="number"
              id="price"
              name="price"
              style={{
                width: '100%',
                padding: '0.75rem',
                border: '1px solid black',
                borderRadius: '0.375rem',
                boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)',
                outline: 'none',
              }}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="stock" className="block mb-1 font-medium">
              Stock:
            </label>
            <Field
              type="number"
              id="stock"
              name="stock"
              style={{
                width: '100%',
                padding: '0.75rem',
                border: '1px solid black',
                borderRadius: '0.375rem',
                boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)',
                outline: 'none',
              }}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="block mb-1 font-medium">
              Description:
            </label>
            <Field
              type="text"
              id="description"
              name="description"
              style={{
                width: '100%',
                padding: '0.75rem',
                border: '1px solid black',
                borderRadius: '0.375rem',
                boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)',
                outline: 'none',
              }}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="category" className="block mb-1 font-medium">
              Category:
            </label>
            <Field
              as="select"
              type="text"
              id="category"
              name="category"
              style={{
                width: '100%',
                padding: '0.75rem',
                border: '1px solid black',
                borderRadius: '0.375rem',
                boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)',
                outline: 'none',
              }}
            >
              <option value="">Select a category</option>
              <option value="LehengaCholi">LehengaCholi</option>
              <option value="Saree">Saree</option>
              <option value="Gown">Gown</option>
              <option value="Top">Top</option>
            </Field>
          </div>
          <div className="my-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="multiple_files">Upload file</label>
            <input
              style={{
                width: '100%',
                padding: '0.75rem',
                border: '1px solid black',
                borderRadius: '0.375rem',
                boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)',
                outline: 'none',
              }}
              id="files"
              type="file"
              onChange={(event) => setSelectedFile(event.target.files[0])}
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
export default AddAssets