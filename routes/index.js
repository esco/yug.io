(function (exports) {

  "use strict";

  var common = require('./common')
  , user = require('./user');

  exports.init = function (app) {

    app.get('/', common.index);
    
    app.get('/users', user.list);

  };

}(exports));
