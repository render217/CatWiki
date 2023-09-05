const express = require("express");
const router = express.Router();
const { test, getAllBreeds, getBreedById ,getAllBreedNames} = require("./cats.controller");

router.get("/", test);
router.get("/breeds", getAllBreeds);
router.get('/breeds_names',getAllBreedNames);
router.get("/breeds/:breedId", getBreedById);

module.exports = router;
