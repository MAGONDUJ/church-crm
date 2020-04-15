const express = require("express");
const router = express.Router();
const chalk = require("chalk");
const multer = require("multer");
const uuidv4 = require("uuid/v4");

const helpers = require("../helpers");
const utils = require("../utils");

// SET STORAGE
const DIR = "./public/uploads/";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, DIR);
  },
  filename: (req, file, cb) => {
    const fileName = file.originalname
      .toLowerCase()
      .split(" ")
      .join("-");
    cb(null, uuidv4() + "-" + fileName);
  }
});

var upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    if (
      file.mimetype == "image/png" ||
      file.mimetype == "image/jpg" ||
      file.mimetype == "image/jpeg"
    ) {
      cb(null, true);
    } else {
      cb(null, false);
      return cb(new Error("Only .png, .jpg and .jpeg format allowed!"));
    }
  }
});
router.post("/upload", upload.single("myFile"), async (req, res, next) => {
  const url = req.protocol + "://" + req.get("host");
  res.status(200).json({
    message: "Success",
    details: "File Uploaded successfully",
    profileImg: url + "/public/uploads/" + req.file.filename
  });
});
router.post("/add", async (req, res) => {
  console.log(
    chalk.blackBright(">>>>>>>>>>>>>>|adding a member|>>>>>>>>>>>>>>")
  );
  let params = {};
  params.memberNo = await utils.memberNoGenerator();
  params.profileImg = req.body.profileImg;
  params.title = req.body.title;
  params.firstName = req.body.firstName;
  params.middleName = req.body.middleName;
  params.surName = req.body.surName;
  params.gender = req.body.gender;
  params.idNumber = req.body.idNumber;
  params.dob = req.body.dob;
  params.maritalStatus = req.body.maritalStatus;
  params.maritalStatusDesc = req.body.maritalStatusDesc;
  params.phoneOne = req.body.phoneOne;
  params.phoneTwo = req.body.phoneTwo;
  params.email = req.body.email;
  params.box = req.body.box;
  params.city = req.body.city;
  params.code = req.body.code;
  params.residenceCity = req.body.residenceCity;
  params.geographicalArea = req.body.geographicalArea;
  params.estate = req.body.estate;
  params.road = req.body.road;
  params.houseNo = req.body.houseNo;
  params.joinYear = req.body.joinYear;
  params.familyMember = req.body.familyMember;
  params.familyMemberNo = req.body.familyMemberNo;
  params.familyMemberRelationship = req.body.familyMemberRelationship;
  params.familyMemberPhone = req.body.familyMemberPhone;
  params.baptized = req.body.baptized;
  params.baptizeDate = req.body.baptizeDate;
  params.baptizePlace = req.body.baptizePlace;
  params.baptizeNature = req.body.baptizeNature;
  params.homeChurch = req.body.homeChurch;
  params.churchCounty = req.body.churchCounty;
  params.churchLocation = req.body.churchLocation;
  params.churchLandMark = req.body.churchLandMark;
  params.churchPastor = req.body.churchPastor;
  params.churchPastorContact = req.body.churchPastorContact;
  params.professionalData = req.body.professionalData;
  params.professionalDataOS = req.body.professionalDataOS;
  console.log(params);

  if (await helpers.newMember(params)) {
    res.status(200).json({
      message: "Success",
      details: "Member successfully added"
    });
  } else {
    res.json({
      message: "Failed",
      details: "Error adding Member"
    });
  }
});
router.get("/members", async (req, res) => {
  console.log(chalk.yellow("========|Getting Members|======"));
  let getTxn = await helpers.getMembers();
  if (getTxn.isSuccessful) {
    res.status(200).json(getTxn.row);
  } else {
    res.json({
      message: "Failed",
      details: "Error getting members"
    });
  }
});
router.get("/families", async (req, res) => {
  console.log(chalk.yellow("========|Getting Families|======"));
  let getTxn = await helpers.getFamilies();
  if (getTxn.isSuccessful) {
    res.status(200).json(getTxn.row);
  } else {
    res.json({
      message: "Failed",
      details: "Error getting families"
    });
  }
});
module.exports = router;
