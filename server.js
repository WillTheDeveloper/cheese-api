const express = require('express');
const {graphqlHTTP} = require('express-graphql');
const graphql = require('graphql');

const fakeDatabase = {
    1: {
        id: 1,
        name: 'Parmesan',
        description: 'Its just a cheese!',
    },
    2: {
        id: 2,
        name: 'Cheddar',
        description: 'Pretty pog cheese!'
    }
}

const cheeseType = new graphql.GraphQLObjectType({
    name: 'Cheese',
    fields: {
        id: {type: graphql.GraphQLID},
        name: {type: graphql.GraphQLString},
        description: {type: graphql.GraphQLString}
    }
});

const queryType = new graphql.GraphQLObjectType({
    name: 'Query',
    fields: {
        cheese: {
            type: cheeseType,
            args: {
                id: {type: graphql.GraphQLID}
            },
            resolve: (_, {id}) => {
                return fakeDatabase[id];
            }
        }
    }
})

const schema = new graphql.GraphQLSchema({query: queryType})

const app = express();
app.use('/cheeseapi', graphqlHTTP({
    schema: schema,
    graphiql: true,
}));
app.listen(4000);
console.log('Running a GraphQL API server at http://localhost:4000/cheeseapi');
