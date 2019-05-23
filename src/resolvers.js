const Loans = require("./loans");
const Applicants = require("./applicants");

const resolvers = {
  Query: {
    health: () => true,
    loan: (_, { loanid }) => Loans.get(loanid),
    loans: (parent, args, context, info) => Loans.list()
  },
  Mutation: {
    loan: (_, { loanid, data }) => Loans.update({ loanid, data })
  },
  Loan: {
    applicant: ({ applicant }) => Applicants.get(applicant),
    interestRevenue: ({ interestRate, amount }) => amount * (interestRate / 100)
  }
};

module.exports = resolvers;
