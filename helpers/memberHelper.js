const Member = require("../models").memberModel;
const Family = require("../models").familyModel;

newMember = async params => {
  let isSuccessful = false;
  if (params.familyMemberNo == "none" || params.familyMemberNo == "") {
    params.familyMemberNo = params.memberNo;
    params.familyMember = params.surName;
  }
  Family.findOne({ familyMemberNo: params.familyMemberNo }).then(record => {
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
  });
  const newMember = new Member(params);
  Member.init().then(() => {
    newMember.save().then(results => {
      if (results) {
        isSuccessful = true;
      }
    });
  });
  return isSuccessful;
};

module.exports = {
  newMember
};
