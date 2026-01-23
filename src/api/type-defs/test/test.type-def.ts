import { gql } from "apollo-server-express";

export const test_type_def = gql`
  type Owner {
    _id: ID
    first_name: String
    mobile_no: String
    profile_pic: String
  }
  type Dog {
    _id: ID
    name: String
    age: Int
    breed: String
    owner: Owner
  }
  type Cat {
    _id: ID
    name: String
    age: Int
    breed: String
    owner: Owner
  }
  input UpdateDogBreedInput {
    _id: ID!
    breed: String!
  }
  input UpdateCatBreedInput {
    _id: ID!
    breed: String!
  }
  extend type Query {
    getAllDogs: [Dog]
    getAllCats: [Cat]
    getDogById(_id: ID!): Dog
    getCatById(_id: ID!): Cat
  }
  extend type Mutation {
    updateDogBreed(input: UpdateDogBreedInput!): Dog
    updateCatBreed(input: UpdateCatBreedInput!): Cat
    
  }
`;