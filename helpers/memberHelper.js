const Member = require("../models").memberModel;
const Family = require("../models").familyModel;

newMember = async params => {
  let isSuccessful = false;
  if (params.familyMemberNo == "New" || params.familyMemberNo == "") {
    params.familyMemberNo = params.memberNo;
    params.familyMember = params.surName;
    params.familyMemberPhone = params.phoneOne;
  }
  await Family.findOne({ familyMemberNo: params.familyMemberNo }).then(
    record => {
      if (!record) {
        const newFamily = new Family(params);
        Family.init().then(() => {
          newFamily.save().then(srs => {
            if (srs) {
              console.log("New family saved");
            }
          });
        });
      }
    }
  );
  const newMember = new Member(params);
  await Member.init().then(async () => {
    await newMember.save().then(results => {
      if (results) {
        isSuccessful = true;
      }
    });
  });
  return isSuccessful;
};
getMembers = async () => {
  let isSuccessful = false;
  let row = {};
  await Member.find().then(async record => {
    if (record) {
      row = record;
      isSuccessful = true;
    }
  });
  return {
    isSuccessful,
    row
  };
};
getFamilies = async () => {
  let isSuccessful = false;
  let row = {};
  await Family.find().then(async record => {
    if (record) {
      row = record;
      isSuccessful = true;
    }
  });
  return {
    isSuccessful,
    row
  };
};

module.exports = {
  newMember,
  getFamilies,
  getMembers
};
