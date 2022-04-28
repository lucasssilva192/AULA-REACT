import {gql} from '@apollo/client';

export const GET_POSTS = gql`query Posts {
    post(order_by: {created_at: desc}) {
      id
      image
      text
      like
      user {
        id
        image
        nome
        username
      }
    }
  }`;
  