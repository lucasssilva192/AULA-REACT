import {gql} from '@apollo/client';

export const ADD_USER = gql`
mutation ADD_USER($nome: String!, $password: String!, $username: String!) {
    insert_user(objects: {nome: $nome, password: $password, username: $username}) {
      returning {
        id
        nome
        username
      }
    }
  }  
`;