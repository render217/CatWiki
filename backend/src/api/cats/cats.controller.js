const { NotFound } = require("../../errors");
const mongoose = require("mongoose");
const Cat = require("./cats.model");
const Image = require("./catsImages.model");
exports.test = (req, res) => {
  res.send("cats route working");
};

exports.getAllBreeds = async (req, res) => {
  const query = Cat.find({});

  const { page, limit } = req.query;

  const total = await Cat.countDocuments();

  // Convert page and limit to integers
  let pageNumber = parseInt(page) || 1;
  let limitNumber = parseInt(limit) || 10;

  //validate limit value
  if (limitNumber <= 0) {
    limitNumber = 10;
  } else if (limitNumber > total) {
    limitNumber = 10;
  }

  const totalPages = Math.ceil(total / limitNumber);

  let skip;
  // Validate page value
  if (pageNumber > totalPages) {
    skip = (totalPages - 1) * limitNumber;
    pageNumber = totalPages;
  } else if (pageNumber <= 0) {
    pageNumber = 1;
    skip = 0;
  }

  skip = (pageNumber - 1) * limitNumber;

  const cats = await query.populate("images").skip(skip).limit(limitNumber);

  res.send({
    total,
    totalPages: Math.ceil(total / limitNumber),
    currentPage: pageNumber,
    limit: limitNumber,
    breeds: cats,
  });
};

exports.getAllBreedNames = async (req, res) => {
  const cats = await Cat.find({}).select("short_name name");
  res.send({ breeds: cats });
};

exports.getBreedById = async (req, res) => {
  const { breedId } = req.params;
  validateBreedId(breedId);
  const catBreed = await Cat.findOne({ _id: breedId }).populate("images");
  if (!catBreed) {
    throw new NotFound(`Breed with Id ${breedId} not found`);
  }
  res.send({ breed: catBreed });
};

exports.getBreedByName = async (req, res) => {
  const { breedName } = req.params;
  
  const catBreed = await Cat.findOne({ name: breedName }).populate("images");
  if (!catBreed) {
    throw new NotFound(`Breed with Name ${breedName} not found`);
  }
  res.send({ breed: catBreed });
};

// function to validate breed ID
const validateBreedId = (breedId) => {
  if (!mongoose.isValidObjectId(breedId)) {
    throw new NotFound(`Breed with Id ${breedId} not found`);
  }
};
