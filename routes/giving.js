const express = require("express");
const router = express.Router();
const chalk = require("chalk");

const helpers = require("../helpers");

router.post("/add", async (req, res) => {
  console.log(
    chalk.blackBright(">>>>>>>>>>>>>>|adding a giving|>>>>>>>>>>>>>>")
  );
  let params = req.body;
  console.log(params);
  let newTxn = await helpers.newGiving(params);
  if (newTxn) {
    res
      .status(200)
      .json({ message: "Success", details: "Giving successfully added" });
  } else {
    res.json({
      message: "Failed",
      details: "Error adding giving",
    });
  }
});
router.get("/givings", async (req, res) => {
  console.log(chalk.yellow("========|Getting Givings|======"));
  let getTxn = await helpers.getGivings();
  if (getTxn.isSuccessful) {
    res.status(200).json(getTxn.row);
  } else {
    res.json({
      message: "Failed",
      details: "Error getting givings",
    });
  }
});
module.exports = router;
