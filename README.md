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
    created_by{
      name
      github
      discord
      member
    }
  }
}
```

Which will return a similar output to the following:

```json
{
  "data": {
    "cheese": {
      "id": "1",
      "name": "Parmesan",
      "description": "Parmesan is an Italian hard, granular cheese produced from cow's milk and aged at least 12 months. It is named after the producing areas, the provinces of Reggio Emilia, Parma, the part of Bologna west of the Reno, and Modena; and the part of Mantua on the right/south bank of the Po.",
      "origin": "Unknown",
      "score": 5,
      "legal": true,
      "searches": 50000,
      "created_by": {
        "name": "William Burton",
        "github": "WillTheDeveloper",
        "discord": "WillDotChill#2156",
        "member": true
      }
    }
  }
}
```

## Dependencies

- GraphQL
- Express
