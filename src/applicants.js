const { APPLICANTS } = require("./data");

const get = applicantId => APPLICANTS.find(({ id }) => id === applicantId);

module.exports = {
  get
};
