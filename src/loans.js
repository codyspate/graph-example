const { LOAN_DATA } = require("./data");

const get = loanid => {
  const loan = LOAN_DATA.find(({ id }) => id === loanid);
  if (!loan) throw new Error("No loan found");
  return loan;
};

const update = ({ loanid, data }) => {
  const loan = LOAN_DATA.splice(
    LOAN_DATA.findIndex(({ id }) => id === loanid),
    1
  );
  if (!loan) throw new Error("No loan found");
  const updatedLoan = { ...loan, ...data };
  LOAN_DATA = [...loanData, updatedLoan];
  return updatedLoan;
};

const list = () => {
  return LOAN_DATA;
};

module.exports = {
  get,
  update,
  list
};
