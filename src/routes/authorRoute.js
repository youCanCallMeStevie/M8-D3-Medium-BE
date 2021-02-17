const express = require("express");

const router = express.Router();
const {
  getAuthorsController,
  getOneAuthorController,
  postAuthorController,
  editAuthorController,
  deleteAuthorController,
} = require("../controllers/authors");

const validation = require("../validation/validationMiddleware");
const valSchema = require("../validation/validationSchema");

router.get("/", getAuthorsController);
router.get("/me", )
router.get("/:id", getOneAuthorController);
router.post("/", validation(valSchema.authorSchema), postAuthorController);
router.put("/:id", validation(valSchema.authorSchema), editAuthorController);
router.delete("/:id", deleteAuthorController);

module.exports = router;
