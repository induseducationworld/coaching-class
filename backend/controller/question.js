const Question = require("../model/question");
const Options = require("../model/options");

const { validateQuestionCreate } = require("./validation");

const createQuestion = async (req, res) => {
  const { error } = validateQuestionCreate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const {
    questionBody,
    options: option,
    subject,
    weightage,
    explaination,
  } = req.body;

  const op = await Options.insertMany(option);

  const rightAnswers = [];

  op.map((o) => {
    if (o.isAnswer) rightAnswers.push(o._id);
  });

  let data = new Question({
    questionBody,
    explaination,
    subject,
    options: op,
    createdBy: req.user._id,
    weightage,
    rightAnswers,
  });

  data = await data.save();
  res.send(data);
};

const deleteQuestion = async (req, res) => {
  const ques = await Question.findOneAndUpdate({
    _id: req.params.id,
    isDeleted: false,
  });

  if (!ques) {
    return res.status(404).send("Question does not exist.");
  }
  res.send("Deleted Successfully.");
};

const getAllQuestions = async (req, res) => {
  const allques = await Question.find({
    createdBy: req.user._id,
    isDeleted: false,
  })
    .populate("options")
    .sort("-createdAt")
    .select("-createdAt");

  res.send(allques);
};

const getSingleQuestion = async (req, res) => {
  const ques = await Question.find({
    _id: req.params.id,
    isDeleted: false,
  }).populate("options");

  if (!ques) {
    return res.status(404).send("Question not found!");
  }
  res.send(ques);
};

module.exports = {
  createQuestion,
  deleteQuestion,
  getAllQuestions,
  getSingleQuestion,
};
