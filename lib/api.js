// lib/api.js
import axios from 'axios';

// Function to fetch data from the API
export const fetchPerks = async () => {
  try {
    const response = await axios.get('https://your-api-endpoint.com/perks');
    return response.data;  // Return the fetched data
  } catch (error) {
    console.error('Error fetching perks:', error);
    return { perks: [] };  // Return an empty array in case of an error
  }
};
