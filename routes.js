var router = require('express').Router();

// Render a doc section page
router.get('/docs/:section', function(req, res, next) {
  var page    = "docs";
  var section = req.params.section;
  res.render(page, { page: page, section: section });
});

// Render an arbitraty page
router.get('/:page', function(req, res, next) {
  var page = req.params.page;
  res.render(page, { page: page });
});

// Render a landing page
router.get('/', function(req, res, next) {
  res.render("landing");
});

module.exports = router;
