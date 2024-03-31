const mongoosh = require("mongoose");

// app.listen(3000, () => {
//   console.log("server started at 3000");
// });

//connect to mongodb
mongoosh
  .connect("mongodb://127.0.0.1:27017/college-info")
  .then(() => {
    console.log("connected to mongodb succesully");
  })
  .catch((err) => {
    console.log(err);
  });

//create schema
const college = new mongoosh.Schema({
  stuId: Number,
  stuName: String,
  branch: String,
  cgpa: Number,
});

//create model

const College = new mongoosh.model("College", college);

//method-1
// const adder = async () => {
//   const co = new College({
//     stuId: 1234,
//     stuName: "Nirbhay",
//     branch: "cse",
//     cgpa: 8.5,
//   });
//   await co.save();
// };

//method-2
// const adder = async () => {
//   const cc = await College.create({
//     stuId: 223,
//     stuName: "kunal",
//     branch: "cse",
//     cgpa: 9,
//   });
// };

// adder();

const find = async () => {
  try {
    //To find using filter
    const coll = await College.find({ name: { $eq: "Nirbhay" } });
    console.log(coll);
  } catch (error) {
    console.error("Error while finding:", error);
  }
};

find();
