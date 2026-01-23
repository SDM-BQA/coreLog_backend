import { gql } from "apollo-server-express";

const user_type_def = gql`

# extend type Query{}
extend type Mutation{
    create_user_account:Boolean
}
`

export default user_type_def