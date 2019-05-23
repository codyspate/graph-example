# GraphQL Exmaple

install dependencies

```
npm i
```

Run locally

```
npm start
```

Download [GraphQL Playground](https://github.com/prisma/graphql-playground/releases) to connect to the schema

Go to [http://localhost:4000/graphql](http://localhost:4000/graphql) in GraphQL Playground to see the schema

## Example query

```
query getLoan {
  loan(loanid: "1") {
    id
    amount
    interestRate
    interestRevenue
    date
    applicant {
      firstName
      lastName
      address
      city
      state
      zip
    }
  }
}
```
