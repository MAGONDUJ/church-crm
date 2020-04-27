const Giving = require("../models").givingModel;

newGiving = async (params) => {
  let isSuccessful = false;
  const nGiving = new Giving(params);
  await Giving.init().then(async () => {
    await nGiving.save().then((srs) => {
      if (srs) {
        isSuccessful = true;
        console.log("New giving saved");
      }
    });
  });
  return isSuccessful;
};
getGivings = async () => {
  let isSuccessful = false;
  let row = {};
  await Giving.find().then(async (record) => {
    if (record) {
      row = record;
      isSuccessful = true;
    }
  });
  return {
    isSuccessful,
    row,
  };
};
module.exports = {
  newGiving,
  getGivings,
};
