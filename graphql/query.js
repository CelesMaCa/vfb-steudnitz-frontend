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
    Cover{
			caption
      url
    }
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