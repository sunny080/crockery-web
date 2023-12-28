import { gql } from "@apollo/client";

export const allPages = gql`
  {
    allPages {
      _type
      slug {
        current
      }
    }
  }
`;
