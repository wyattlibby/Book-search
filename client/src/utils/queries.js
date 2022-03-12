import { gql } from '@apollo/client';

export const getMyBooks = gql` 
    query me {
        me{
            _id
           username
           email
           savedBooks {
               bookId
               authors
               image
               description
               title
               link
           }
        }
    }
`;