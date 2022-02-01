const express = require("express");
const router = express.Router();
const a = require("../models/User");
const b = require("../models/Address");
router.post("/Registration", (req, res) => {
  const usermodel = new a({
    FirstName: req.body.FirstName,
    LastName: req.body.LastName,
    Email: req.body.Email,
    Password: req.body.Password,
  });
  usermodel
    .save()
    .then((data) => {
      console.log(data);
      res.json(data);
    })
    .catch((error) => {
      console.log(error);
    });
});
router.post("/AddressForm", (req, res) => {
  const addressmodel = new b({
    FullName: req.body.FullName,
    Address: req.body.Address,
    Contact: req.body.Contact,
    PostalCode: req.body.PostalCode,
  });
  addressmodel
    .save()
    .then((data) => {
      console.log(data);
      res.json(data);
    })
    .catch((error) => {
      console.log(error);
    });
});

router.get("/userdata", (req, res) => {
  a.find()
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      console.log(error);
    });
});
router.delete("/userdata/:id", (request, response) => {
  a.deleteOne({ _id: request.params.id })
    .then((result) => {
      console.log("Deleted Applicant");
      response.status(200).json(result);
    })
    .catch((error) => console.log(error));
});
router.put("/userdata/:id", (request, response) => {
  a.updateOne(
    { _id: request.params.id },
    {
      $set: {
        FirstName: request.body.FirstName,
        LastName: request.body.LastName,
        Email: request.body.Email,
        Password: request.body.Password,
      },
    }
  )
    .then((result) => {
      result.status(201).json(result);
    })
    .catch((error) => console.log(error));
});
router.get("/userdata/:id", function (req, res) {
  a.findById(req.params.id)
    .then((data) => {
      console.log("Data by ID Fetched");
      res.json(data);
    })
    .catch((error) => console.log(error));
});
module.exports = router;
