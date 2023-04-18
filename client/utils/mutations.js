import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation loginUser {
    password
    email
  }
`;

export const ADD_USER = gql`
  mutation addUser {
    username
    email
    password
  }
`;

export const SAVE_BOOK = gql`
  mutation saveBook {
    userId
    authors
    title
    description
  }
`;

export const REMOVE_BOOK = gql`
  mutation removeBook {
    userId
  }
`;
