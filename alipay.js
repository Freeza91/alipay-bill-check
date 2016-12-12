config = require('./config.js');
utils = require('./utils.js');

function Alipay(){
  this.casper = casper;
}

Alipay.prototype.login = function(){

  var that = this;
  this.casper.start(config.alipay_login, function(){ utils.fill_form(that.casper); });

  this.casper.waitFor(function check(){
    var currentUrl = this.getCurrentUrl();
    console.log(currentUrl);
    return currentUrl === config.alipay_home || currentUrl === config.alipay_bill;
  }, go_bill
  ,function(){
    this.echo('need login');
    login();
  },20000);
}

function go_bill(){
  this.capture('./images/home.png');

  // this.echo('will be in bill check url');
  // this.thenOpen(this.alipay_bill);
  // this.waitFor(function check(){
  //   var currentUrl = this.getCurrentUrl();
  //   return currentUrl === config.alipay_home || currentUrl === config.alipay_bill;
  // }, check_bill, login, 20000);
}

function check_bill(){
  // this.thenOpen(this.alipay_bill);
  // this.waitFor(function check(){
  //   var currentUrl = this.getCurrentUrl();
  //   return currentUrl === config.alipay_home || currentUrl === config.alipay_bill;
  // }, go_bill, login, 20000);
}

Alipay.prototype.run = function(){
  this.casper.run();
}

module.exports = Alipay;
