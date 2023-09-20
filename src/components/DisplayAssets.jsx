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
    <div>
      {/* <p>ALL DATA</p> */}
      <div className="container mx-auto">
        <h1 className="text-2xl font-bold mb-4">User Data</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
         
          {userData.map((user) => {
            return (
              user.map((data) => {
                console.log(data._id);
                return (<div key={user._id}>
                  <h1>BLOCK</h1>
                  <h2 className="text-lg font-semibold">{data._id}</h2>
                  <div className="bg-white shadow-md rounded-lg overflow-hidden">
                  <img
                    className="w-full h-48 object-cover"
                    src={data.image}
                    alt={data.char}
                  />
                  </div>
                  <h2 className="text-lg font-semibold">{data.char}</h2>
                </div>)
              })

            )
          })}
        </div>
      </div>
    </div>
  );
}

export default DisplayAssets;



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
