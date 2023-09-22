import React, { useState, useEffect } from 'react';
import axios from 'axios';


function DisplayAssets() {
  const [userData, setUserData] = useState([]);


  useEffect(() => {
    async function fetchData() {
      try {
        // Fetch user data from your API endpoint
        const response = await axios.get('https://signbase.onrender.com/get-all');
        console.log(response.data);
        setUserData(userData => [...userData, response.data.result]);
        console.log("data of response data result",response.data.result);
        console.log(userData);
        // Set loading state to false when data is loaded
      }
      catch (error) {
        console.error('Error fetching user data:', error);
      }
    }

    fetchData();
  }, []);

  return (
    
    <div
      class="block rounded-lg bg-white p-10 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
      <h5
        class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
        <h1>BLOCK</h1>
      </h5>

      <div className="card w-96 bg-base-100 shadow-xl">
      {userData.map((user) => {
                return (
                  user.map((data) => {
                    console.log(data._id);
                    return (
                    <div key={user._id}>
                      <div class="block rounded-lg bg-blue-500 mt-8 mb-8 px-90 p-5 shadow-[0 2px 15px -3px rgba(0,0,0,0.07), 0 10px 20px -2px rgba(0,0,0,0.04)] dark:bg-red-500">
                        <h2 className="text-lg font-semibold">{data._id}</h2>
                        <div className="bg-white shadow-md rounded-lg overflow-hidden w-32 h-32 ">
                        <img
                          className="w-full h-full object-cover rounded border bg-white p-1"
                          src={data.image}
                          alt={data.char}
                        />
                        </div>
                       
                      </div>
                    </div>)
                  })
                )
              })}
        <figure className="px-10 pt-10">
        <img
            className="w-full h-full object-cover rounded border bg-white p-1"
            src={data.image}
            alt={data.char}
        /></figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
      
      {/* <p class="max-w-xs mb-4 text-base text-neutral-600 dark:text-neutral-200">
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-30"> 
          {userData.map((user) => {
                return (
                  user.map((data) => {
                    console.log(data._id);
                    return (
                    <div key={user._id}>
                      <div class="block rounded-lg bg-blue-500 mt-8 mb-8 px-90 p-5 shadow-[0 2px 15px -3px rgba(0,0,0,0.07), 0 10px 20px -2px rgba(0,0,0,0.04)] dark:bg-red-500">
                        <h2 className="text-lg font-semibold">{data._id}</h2>
                        <div className="bg-white shadow-md rounded-lg overflow-hidden w-32 h-32 ">
                        <img
                          className="w-full h-full object-cover rounded border bg-white p-1"
                          src={data.image}
                          alt={data.char}
                        />
                        </div>
                        <h2 className="text-lg font-semibold">{data.char}</h2>
                        <button
                          type="Update"
                          class="inline-block rounded bg-primary px-6 pb-2 py-5 pt-2.5 mr-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                          data-te-ripple-init
                          data-te-ripple-color="light">
                          Update
                        </button>
                        <button
                          type="Delete"
                          class="inline-block rounded bg-primary px-6 pb-2 py-5 pt-2.5 mr-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                          data-te-ripple-init
                          data-te-ripple-color="light">
                          Delete
                        </button>
                      </div>
                    </div>)
                  })
                )
              })}
          </div>
      </p> */}
  </div>
  );
}

export default DisplayAssets;


// <div>
    //   {/* <p>ALL DATA</p> */}
    //   <div className="container mx-auto">
    //     <h1 className="text-2xl font-bold mb-4">User Data</h1>
    //     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
         
    //       {userData.map((user) => {
    //         return (
    //           user.map((data) => {
    //             console.log(data._id);
    //             return (<div key={user._id}>
    //               <h1>BLOCK</h1>
    //               <h2 className="text-lg font-semibold">{data._id}</h2>
    //               <div className="bg-white shadow-md rounded-lg overflow-hidden">
    //               <img
    //                 className="w-full h-48 object-cover"
    //                 src={data.image}
    //                 alt={data.char}
    //               />
    //               </div>
    //               <h2 className="text-lg font-semibold">{data.char}</h2>
    //             </div>)
    //           })

    //         )
    //       })}
    //     </div>
    //   </div>
    // </div>
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';



// function DisplayAssets() {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         // Use the CORS Anywhere proxy to make the request
//         const response = await axios.get('https://signbase.onrender.com/get-all', {
//           headers: {
//             'X-Requested-With': 'XMLHttpRequest',
//             'Authorization': 'Bearer YourAccessToken',
//             'Access-Control-Allow-Origin': 'Content-type',
//             'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, PATCH, OPTIONS',
//             'withCredentials': true,
//             'Content-Type': 'application/json', // Some servers require this header for CORS
//           },
//         });

//         const userdata = response.data;
//         setUsers(userdata);
//         console.log('userdata:', userdata);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     }

//     fetchData();
//   }, []);

//   return (
//     <div className="user-list">
//     <h1>hello</h1>
//       <h2>User List</h2>
//       <ul>
//         {users.map((user) => (
//           <li>
//             <strong>{user.char}</strong> ({user.image})
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default DisplayAssets;
