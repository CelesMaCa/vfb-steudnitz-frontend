import gql from 'graphql-tag'

export const hauptseitenQuery = gql`
query {
    hauptseitens{
      HName
      HTitel
    }
  }
`