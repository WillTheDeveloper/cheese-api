# cheese-api
Official cheese API written in GraphQL

## Prerequisites

- NodeJS
- Web browser

## Running the server

Read prerequisites before continuing here.

```
node server.js
```

If the server starts successfully, you will receive a message like this:

```
Running a GraphQL API server at http://localhost:4000/cheeseapi
```

Otherwise, it will throw errors that require debugging.

## Usage

At the moment, you can only query via the ID of the cheese which is passed in on the first argument.

When you open the web interface, enter the following as an example.

```
{
  cheese(id: 1) {
    id
    name
    description
    origin
    score
    legal
    searches
  }
}
```

Which will return a similar output to the following:

```graphql
{
  "data": {
    "cheese": {
      "id": "1",
      "name": "Parmesan",
      "description": "Its just a cheese!",
      "origin": "Africa",
      "score": 5,
      "legal": true,
      "searches": 50000
    }
  }
}
```

## Dependencies

- GraphQL
- Express
