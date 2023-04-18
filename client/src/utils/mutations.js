import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation loginUser ($email: String!, $password: String!) {
    login (email: $email, password: #password) {
      token
      user {
        _id
        username
      }
    }
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
  mutation saveBook($book: SavedBookInput!) {
    saveBook(book: $book) {
      username
      email
      bookCount
      savedBooks {
        authors
        description
        bookId
        image
        link
        title
      }
    }
  }
`;

export const REMOVE_BOOK = gql`
  mutation removeBook {
    userId
  }
`;
