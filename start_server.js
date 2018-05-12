require('mockserver-node')

var mockserver = require('mockserver-node');
mockserver.start_mockserver({serverPort: process.env.PORT,
                	     verbose: true
});
