# router-page-ip-detector

A Node.js package to help manage and configure the router admin page at and detect Gateway IP https://www.19216811.to ,This includes logging in, updating Wi-Fi settings, checking the router status, and more.



## Function Codes
Use the loginToRouter function to log into the router's admin page. Replace admin and admin123 with your router's username and password.

const { loginToRouter } = require('router-page-ip-detector');
loginToRouter('admin', 'admin123').then(result => {
    console.log(result ? 'Logged in successfully' : 'Login failed');
});

##  getRouterStatus 
Use the getRouterStatus function to get the current status of the router.

const { getRouterStatus } = require('router-page-ip-detector');
getRouterStatus().then(status => {
    console.log(status);
});


## Installation
Install the `router-page-ip-detector` package via npm:

```bash
npm install router-page-ip-detector
