var casper = require('casper').create({
  pageSettings: {
    userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/54.0.2840.98 Safari/537.36'
  },
  logLevel: 'debug',
  verbose: true
});

casper.on('error', function(msg,backtrace) {
    console.log(msg);
    console.log(backtrace);
    this.exit();
});

Alipay = require('./alipay.js');
alipay = new Alipay(casper);
alipay.login();
alipay.run();
