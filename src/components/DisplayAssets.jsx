import React, { useState, useEffect } from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
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

      
      <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200"></p>
      <div class="flex flex-wrap gap-16"> 
          {userData.map((user) => {
                return (
                  user.map((data) => {
                    return (
                    <div key={user._id}>
                      <div class="w-full rounded-lg bg-blue-500 px-6 mt-8 mb-8 p-6 shadow-md">
                      <h2 className="text-center text-lg font-semibold">{data.char}</h2>
                        <img
                          className="w-full h-full object-cover rounded mb-5 border bg-white"
                          src={data.image}
                          alt={data.char}
                        />
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
