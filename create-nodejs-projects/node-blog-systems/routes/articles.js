const express = require("express");
const router = express.Router();

const Article = require("../models/article");

router.get("/new", (request, response) => {
  response.render("articles/newArticles", { article: new Article() });
});
router.get("/edit/:id", async (request, response) => {
  const article = await Article.findById(request.params.id);
  response.render("articles/edit", { article: article });
});

// router for id/slug
router.get("/:slug", async (request, response) => {
  const article = await Article.findOne({ slug: request.params.slug });
  if (article == null) {
    response.redirect("/");
  }
  response.render("articles/show", { article: article });
});

router.post(
  "/",
  async (request, response) => {
    request.article = new Article();
    next();
    // let article = new Article({
    //   title: request.body.title,
    //   decription: request.body.description,
    //   markdown: request.body.markdown,
    // });
    // try {
    //   article = await article.save();
    //   response.redirect(`/articles/${article.slug}`);
    // } catch (error) {
    //   console.log(error);
    //   response.render("articles/new", { article: article });
    // }
  },
  saveArticleAndRedrect("new")
);

router.put(
  "/",
  async (request, response) => {
    request.article = Article.findById(request.params.id);
    next();
  },
  saveArticleAndRedrect("edit")
);

// set the form method to _DELETE
router.delete("/:id", async (request, response) => {
  await Article.findByIdAndDelete(request.params.id);
  response.redirect("/");
});
router.put("/", (request, response) => {});

function saveArticleAndRedrect(path) {
  return (request, response) => {
    let article = request.article;
    (article.title = request.body.title),
      (article.decription = request.body.description),
      (article.markdown = request.body.markdown);
    try {
      article = await article.save();
      response.redirect(`/articles/${article.slug}`);
    } catch (error) {
      response.render(`articles/${path}`, { article: article });
    }
  };
}

module.exports = router;
