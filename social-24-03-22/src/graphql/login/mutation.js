import { gql } from '@apollo/client';

export const ADD_USER = gql `
        mutation ADD_USER($name: String!, $password: String!, $username: String!) {
            insert_user(objects: {nome: $name, password: $password, username: $username}) {
            returning {
                id
                nome
                username
            }
            }
        }
`;

