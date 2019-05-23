let LOAN_DATA = [
	{
		id: '1',
		amount: 100000,
		interestRate: 3.99,
		applicant: {
			firstName: 'Joe',
			lastName: 'Snuffy',
			address: '123 Main St.',
			city: 'Sacramento',
			state: 'CA',
			zip: '12345'
		},
		date: new Date()
	},
	{
		id: '2',
		amount: 120000,
		interestRate: 4.99,
		applicant: {
			firstName: 'Joe',
			lastName: 'Snuffy',
			address: '123 Main St.',
			city: 'Sacramento',
			state: 'CA',
			zip: '12345'
		},
		date: new Date()
	},
	{
		id: '3',
		amount: 90000,
		interestRate: 2.99,
		applicant: {
			firstName: 'Joe',
			lastName: 'Snuffy',
			address: '123 Main St.',
			city: 'Sacramento',
			state: 'CA',
			zip: '12345'
		},
		date: new Date()
	},
	{
		id: '4',
		amount: 60000,
		interestRate: 2.99,
		applicant: {
			firstName: 'Joe',
			lastName: 'Snuffy',
			address: '123 Main St.',
			city: 'Sacramento',
			state: 'CA',
			zip: '12345'
		},
		date: new Date()
	}
]


const get = (loanid) => {
	const loan = LOAN_DATA.find(({ id }) => id === loanid);
	if (!loan) throw new Error('No loan found');
	return loan;
}

const update = ({ loanid, data }) => {
	const loan = LOAN_DATA.splice(LOAN_DATA.findIndex(({ id }) => id === loanid), 1);
	if (!loan) throw new Error('No loan found');
	const updatedLoan = {...loan, ...data};
	LOAN_DATA = [...loanData, updatedLoan];
	return updatedLoan;
}

const list = () => {
	return LOAN_DATA;
}

module.exports = {
	get,
	update,
	list
}