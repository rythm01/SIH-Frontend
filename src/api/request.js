import axios from 'axios';

// Create an instance of Axios with a base URL
const instance = axios.create({
  baseURL: 'https://signbase.onrender.com', // Replace with your API base URL
  timeout: 5000, // You can adjust the timeout as needed
});

// You can also set default headers or authentication tokens here if necessary
// instance.defaults.headers.common['Authorization'] = 'Bearer YourAccessToken';

export default instance;
