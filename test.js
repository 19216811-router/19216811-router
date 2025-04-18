const { loginToRouter, getRouterStatus, updateWiFiSettings } = require('./index');

// Test the login function
loginToRouter('admin', 'admin').then(result => {
  console.log('Login result:', result);
});

// Test getting router status
getRouterStatus().then(status => {
  console.log('Router Status:', status);
});

// Test updating Wi-Fi settings
updateWiFiSettings('MyNewSSID', 'MyNewPassword').then(result => {
  console.log('Wi-Fi Update Result:', result);
});
