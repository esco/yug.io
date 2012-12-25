(function (exports) {

  "use strict";  

  exports.index = function (req, res) {
    res.render('index', { 
        'title' : 'Express' 
    });
  };

}(exports));
