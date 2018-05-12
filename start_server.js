require('mockserver-node')

var mockserver = require('mockserver-node');
mockserver.start_mockserver({serverPort: 5000,
                	     verbose: true
});
