import { gql } from "@apollo/client";

export const GET_ALL_DATA = gql`
  query Query {
    allFilms {
      films {
        id
        title
        director
        releaseDate
      }
    }
  }
`;

export const GET_DATA_BY_ID = gql`
  query dataById($id: ID) {
    film(id: $id) {
      title
      openingCrawl
    }
  }
`;
