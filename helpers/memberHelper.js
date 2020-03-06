const Member = require("../models").memberModel;

newMember = async params => {
  let isSuccessful = false;
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
