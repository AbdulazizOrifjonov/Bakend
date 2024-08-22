const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Role {
    id: ID!
    name: String!
  }

  type Query {
    getAllRoles: [Role]
  }

  type Mutation {
    createRole(name: String!): Role
    updateRole(id: ID!, name: String!): Role
    deleteRole(id: ID!): Boolean
  }
`;

module.exports = typeDefs;
