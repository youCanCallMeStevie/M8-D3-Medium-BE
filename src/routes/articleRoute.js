const express = require("express");

const router = express.Router();
const {
  getArticlesController,
  getOneArticleController,
  createNewArticleController,
  editArticleController,
  deleteArticleController,
  getMyArticlesController,
  createMyNewArticleController,
  editMyArticleController,
  deleteMyArticleController,
} = require("../controllers/article");

const {
  getReviewsController,
  getOneReviewController,
  postReviewController,
  editReviewController,
  deleteReviewController,
} = require("../controllers/reviews");


const validation = require("../validation/validationMiddleware");
const valSchema = require("../validation/validationSchema");


router.get("/", getArticlesController);
router.get("/:id", getOneArticleController);
router.post("/", validation(valSchema.articleSchema), createNewArticleController);
router.put("/:id", validation(valSchema.articleSchema), editArticleController);
router.delete("/:id", deleteArticleController);
router.get("/:id/reviews", getReviewsController);


router.get("/:id/reviews/:reviewId", getOneReviewController);
router.post("/:id", validation(valSchema.reviewSchema), postReviewController);
router.put("/:id/reviews/:reviewId", validation(valSchema.reviewSchema), editReviewController);
router.delete("/:id/reviews/:reviewId", deleteReviewController);

router.get("/me", getMyArticlesController);
router.post("/me", validation(valSchema.articleSchema), createMyNewArticleController);
router.put("/me/:id", validation(valSchema.articleSchema), editMyArticleController);
router.delete("/me/:id", deleteMyArticleController);


module.exports = router;
