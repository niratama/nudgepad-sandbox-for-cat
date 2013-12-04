module.exports = function (app) {
  var url = require('url');
  var engines = require('consolidate');

  var camelize = function (snakeStr) {
    var camelStr = snakeStr.replace(/(?:^|[-_])(\w)/g, function (_, c) {
      return c ? c.toUpperCase() : '';
    });
    return camelStr;
  };

  app.engine('html', engines.hogan);

  app.set('view engine', 'html');
  app.set('views', __dirname + '/views');
  
  app.get('/test', function (req, res, next) {
    res.send('test string');
  });
  app.post('/test', function (req, res, next) {
    var name = req.body.name;
    var comment = req.body.comment;
    res.render('test', { name: name, comment: comment });
  });

  app.get('/camelize', function (req, res, next) {
    var params = url.parse(req.url, true);
    if (params.query.str === void 0) {
      res.send(400, 'Bad Request');
    } else {
      var camelStr = camelize(params.query.str);
      res.send({ str: camelStr });
    }
  });
};
