config = require('./config.js');

function fill_form(casper){
  casper.fill('form[id="login"]', {
    'logonId': config.account,
    'password_rsainput': config.password
  }, false)
  casper.capture('./images/fill.png');
  casper.click('input#J-login-btn');
}

module.exports.fill_form = fill_form;
