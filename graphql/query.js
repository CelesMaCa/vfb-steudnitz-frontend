import gql from 'graphql-tag'

export const hauptseitenQuery = gql`
query {
    hauptseitens{
      HName
      HTitel
    }
  }
`

export const sportartenQuery = gql`
query {
    sportartens{
        SName
        STitel
        mannschafts{
            MName
            MTitel
        }
    }
  }
`