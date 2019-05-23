const Loans = require('./loans');

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
		interestRevenue: ({ interestRate, amount }) => amount * (interestRate / 100)
	}
};

module.exports = resolvers;