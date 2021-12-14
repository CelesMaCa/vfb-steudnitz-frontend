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
        SName
        mannschafts{
            id
            MTitel
            MName
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
      id
      MName
      MTitel
      Kurzbeschreibung
    }
  }
}
`

export const sportartenMannschaftenQuery = gql`
query ($name: String!){
  sportartens(where: {SName: $name}) {
    id
    SName
    STitel
    hauptseiten{
      HName
    }
    mannschafts{
      id
      MName
      MTitel
      Cover{
        caption
        url
      }
      Kurzbeschreibung
    }
  }
}`