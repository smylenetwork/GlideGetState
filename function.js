window.function = async function () {
  try {
    // Fetch geolocation data from ipapi.co
    const response = await fetch('https://ipapi.co/json/');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    // Return the state
    return data.region || "State not found";
  } catch (error) {
    // Handle errors gracefully
    return `Error: ${error.message}`;
  }
};
