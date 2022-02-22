const express = require('express');
const {graphqlHTTP} = require('express-graphql');
const graphql = require('graphql');
const {Cheese, Contributor} = require('./db');


const cheeseType = new graphql.GraphQLObjectType({
    name: 'Cheese',
    fields: {
        id: {type: graphql.GraphQLID},
        name: {type: graphql.GraphQLString},
        description: {type: graphql.GraphQLString},
        origin: {type: graphql.GraphQLString},
        score: {type: graphql.GraphQLInt},
        legal: {type: graphql.GraphQLBoolean},
        searches: {type: graphql.GraphQLInt},
    }
});

const contributorType = new graphql.GraphQLObjectType({
    name: 'Contributor',
    fields: {
        id: {type: graphql.GraphQLID},
        name: {type: graphql.GraphQLString},
        github: {type: graphql.GraphQLString},
        discord: {type: graphql.GraphQLString},
        member: {type: graphql.GraphQLBoolean}
    }
})

const queryType = new graphql.GraphQLObjectType({
    name: 'Query',
    fields: {
        cheese: {
            type: cheeseType,
            args: {
                id: {type: graphql.GraphQLID}
            },
            resolve: (_, {id}) => {
                return Cheese[id];
            }
        },
        contributor: {
            type: contributorType,
            args: {
                id: {type: graphql.GraphQLID}
            },
            resolve: (_, {id}) => {
                return Contributor[id];
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
