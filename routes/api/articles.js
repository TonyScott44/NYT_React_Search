const router = require("express").Router();
const articlesController = require("../../controllers/articlesController");

// Matches with "/api/articles"
router.route("/")
    .get(articlesController.findAll)
    .post(articlesController.create)
    .delete(articlesController.remove);

module.exports = router;