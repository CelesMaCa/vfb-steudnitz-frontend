import gql from 'graphql-tag'

export const hauptseitenHeaderQuery = gql`
query {
    hauptseitens{
      id
      HTitel
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
    SName
    STitel
    Kurzbeschreibung
    mannschafts{
      MName
      MTitel
      Kurzbeschreibung
    }
  }
}
`