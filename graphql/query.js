import gql from 'graphql-tag'

export const hauptseitenHeaderQuery = gql`
query {
    hauptseitens{
      id
      HTitel
      HName
    }
  }
`

export const sportartenHeaderQuery = gql`
query {
    sportartens{
        id
        STitel
        mannschafts{
            id
            MTitel
        }
    }
  }
`

export const sportartenQuery = gql`
query {
  sportartens{
    id
    SName
    STitel
    Kurzbeschreibung
    hauptseiten{
      HName
    }
    mannschafts{
      MName
      MTitel
      Kurzbeschreibung
    }
  }
}
`