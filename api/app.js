require("dotenv").config();

const express = require("express");
const app = express();
const {
  createCategory,
  getCategory,
  getAllCategories,
  updateCategory,
  deleteCategory,
  findCategory
} = require("./dal");
const port = process.env.PORT || 5000;
const HTTPError = require("node-http-error");
const bodyParser = require("body-parser");
const { propOr, pathOr, prop, isEmpty, not } = require("ramda");
const checkRequiredFields = require("./lib/check-required-fields");

const resourceRequiredFieldCheck = checkRequiredFields([
  "categoryId",
  "name",
  "formalName",
  "shortDesc",
  "purpose",
  "website",
  "desc"
]);
const categoryRequiredFieldCheck = checkRequiredFields([
  "name",
  "shortDesc",
  "desc"
]);
const categoryRequiredPutFieldCheck = checkRequiredFields([
  "_id",
  "_rev",
  "type",
  "name",
  "shortDesc",
  "desc"
]);

app.use(bodyParser.json());

app.get("/", (req, res, next) => res.send("Welcome to the api."));

app.post("/categories", (req, res, next) => {
  if (isEmpty(prop("body"), req)) {
    return next(
      new HTTPError(
        400,
        "Missing request body.  Content-Type header should be application/json."
      )
    );
  }
  const missingFields = categoryRequiredFieldCheck(prop("body", req));
  if (not(isEmpty(missingFields))) {
    return next(
      new HTTPError(401, `Missing required fields: ${join(" ", missingFields)}`)
    );
  }
  createCategory(req.body)
    .then(result => {
      console.log("in then: ", result);
      res.send(result);
    })
    .catch(err => next(new HTTPError(err.status, err.message)));
});

app.get("/categories/:id", (req, res, next) => {
  getCategory(req.params.id)
    .then(result => res.send(result))
    .catch(err => next(new HTTPError(err.status, err.message)));
});

app.put("/categories/:id", (req, res, next) => {
  if (isEmpty(prop("body"), req)) {
    return next(
      new HTTPError(
        400,
        "Missing request body.  Content-Type header should be application/json."
      )
    );
  }
  const missingFields = categoryRequiredPutFieldCheck(prop("body", req));
  if (not(isEmpty(missingFields))) {
    return next(
      new HTTPError(401, `Missing required fields: ${join(" ", missingFields)}`)
    );
  }

  updateCategory(req.body)
    .then(result => res.send(result))
    .catch(err => next(new HTTPError(err.status, err.message)));
});

app.delete("/categories/:id", (req, res, next) => {
  deleteCategory(req.params.id)
    .then(result => res.send(result))
    .catch(next(new HTTPError(err.status, err.message)));
});

app.get("/categories", (req, res, next) => {
  getAllCategories({
    include_docs: true,
    inclusive_end: true,
    start_key: "category_",
    end_key: "category_\ufff0"
  })
    .then(docs => {
      res.send(docs);
    })
    .catch(err => next(new HTTPError(err.status, err.message)));
});

app.use((err, req, res, next) => {
  console.log("api error:", err);
  res.status(err.status || 500).send(err);
});

app.listen(port, () => console.log("Im up and ready to go on port ", port));
