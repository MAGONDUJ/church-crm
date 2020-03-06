module.exports = async function generateMemberNo() {
  return Math.floor(1000000 + Math.random() * 9000000).toString();
};
