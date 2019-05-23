const { gql } = require("apollo-server-lambda");

const typeDefs = gql`
  type Loan {
    id: String
    amount: Float
    date: String
    interestRate: Float
    interestRevenue: Float
    applicant: Applicant
  }

  type Applicant {
    firstName: String
    lastName: String
    address: String
    city: String
    state: String
    zip: String
  }

  input LoanUpdateData {
    amount: Float
    interestRate: Float
  }

  type Query {
    health: Boolean
    loan(loanid: String): Loan
    loans: [Loan]
  }

  type Mutation {
    loan(loanid: String, data: LoanUpdateData): Loan
  }
`;

module.exports = typeDefs;
