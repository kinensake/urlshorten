const express = require("express");
const router = express.Router();
const auth = require("./../middlewares/auth");
const codeController = require("./../controllers/code-controller");
const urlController = require("./../controllers/url-controller");

router.post("/code", codeController)
      .get("/urls", auth, urlController.getUrl)
      .post("/urls", auth, urlController.postUrl)
      .delete("/urls/:id", auth, urlController.deleteUrl)
      .patch("/urls/:id", auth, urlController.patchUrl)

module.exports = router;