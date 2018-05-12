require('mockserver-node')

var mockserver = require('mockserver-node');
mockserver.start_mockserver({serverPort: 80,
                	     verbose: true
});
