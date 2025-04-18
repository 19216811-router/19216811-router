const axios = require('axios');

/**
 * Logs into the router at 192.168.1.1.
 * @param {string} username - The username to login to the router.
 * @param {string} password - The password to login to the router.
 * @returns {Promise<boolean>} - Returns true if login was successful, otherwise false.
 */
async function loginToRouter(username, password) {
  try {
    const response = await axios.post('http://192.168.1.1/login', {
      username: username,
      password: password
    });

    if (response.data.success) {
      console.log('Login successful');
      return true;
    } else {
      console.log('Login failed');
      return false;
    }
  } catch (error) {
    console.error('Error logging in:', error);
    return false;
  }
}

/**
 * Gets the router status from 192.168.1.1.
 * @returns {Promise<Object>} - Returns router status details.
 */
async function getRouterStatus() {
  try {
    const response = await axios.get('http://192.168.1.1/status');
    return response.data;
  } catch (error) {
    console.error('Error fetching router status:', error);
    return null;
  }
}

/**
 * Updates the Wi-Fi settings for the router.
 * @param {string} ssid - The new SSID for the Wi-Fi network.
 * @param {string} password - The new Wi-Fi password.
 * @returns {Promise<boolean>} - Returns true if Wi-Fi settings were updated, otherwise false.
 */
async function updateWiFiSettings(ssid, password) {
  try {
    const response = await axios.post('http://192.168.1.1/wifi', {
      ssid: ssid,
      password: password
    });

    if (response.data.success) {
      console.log('Wi-Fi settings updated');
      return true;
    } else {
      console.log('Failed to update Wi-Fi settings');
      return false;
    }
  } catch (error) {
    console.error('Error updating Wi-Fi settings:', error);
    return false;
  }
}

module.exports = {
  loginToRouter,
  getRouterStatus,
  updateWiFiSettings
};
