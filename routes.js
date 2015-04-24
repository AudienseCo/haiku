var router = require('express').Router();

router.get('/:page', function(req, res, next) {
  var page = req.params.page;
  res.render(page);
});

module.exports = router;
