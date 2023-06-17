const userSchema = require("./Model");
const dbconnect = require("./MongooseDb");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const server = express();
server.use(cors());
server.use(bodyParser.json());
dbconnect();

// function client() {
//   mongoose
//     .connect("mongodb://127.0.0.1:27017/user")
//     .then(() => console.log("Connected!"));
// }
// client();

server.get("/", async (req, res) => {
  // let n = req.body.name;
  // const userData = req.user;
  // User.name = req.body.name;
  // User.phone = req.body.phone;
  // User.password = req.body.password;
  console.log(req.query);

  let filters = {};

  if (req.query.name) {
    filters.name = { $regex: new RegExp(req.query.name, "i") };
  } else if (req.query.password) {
    filters.password = { $regex: new RegExp(req.query.password, "i") };
  } else if (req.query.phone) {
    filters.phone = { $regex: new RegExp(req.query.phone, "i") };
  }

  let page = Number(req.query.page) || 1;
  let limit = Number(req.query.limit) || 10;

  console.log("page:", page);
  console.log("limit:", limit);

  let skip = (page - 1) * limit;

  let data = await userSchema
    .find(filters)
    .sort({ name: -1 })
    .skip(skip)
    .limit(limit);
  console.log(data, "hjgjhhg jjhjh");
  res.json(data);
});

server.put("/:id", async (req, res) => {
  let personData = await userSchema.findOneAndUpdate(
    { _id: req.params.id },
    { $set: { name: req.body.name } },
    { new: true }
  );
  res.json(personData);
});

server.delete("/:id", async (req, res) => {
  const deletedDocument = await userSchema.deleteOne({ _id: req.params.id });
  res.json(deletedDocument);
});
server.post("/", async (req, res) => {
  try {
    let dataUser = await userSchema({ phone: req.body.phone });
    if (dataUser) {
      res.send("Field Already Exists");
    }
    let User = new userSchema();
    console.log("check the data in body", req.body);

    User.name = req.body.name;
    User.phone = req.body.phone;
    User.password = req.body.password;

    const doc = await User.save();
    console.log(doc, "Post request");
    res.send(doc);
  } catch (err) {
    console.log("field required");
  }
});

server.listen(3200);

// userSchema.insertMany([
//   {
//     name:"aman",
//     phone:"1234567",
//     password:"15545mj"
//   }
// ]).then((user)=>{
//   console.log(user)
//   return userSchema.find()
// }).then(user=>{
//   console.log(user);
// })
// client();
