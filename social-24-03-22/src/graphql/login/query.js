import { gql } from '@apollo/client'

export const GET_LOGIN = gql`
query get_login($username: String!) {
    user(where: {username: {_eq: $username}}) {
      id
      nome
      password
      username
    }
  }
`;