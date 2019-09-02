// tslint:disable
// this is an auto generated file. This will be overwritten

export const getEvent = `query GetEvent($id: ID!) {
  getEvent(id: $id) {
    id
    name
    where
    when
    description
    comments {
      nextToken
    }
  }
}
`;
export const listEvents = `query ListEvents(
  $filter: TableEventFilterInput
  $limit: Int
  $nextToken: String
) {
  listEvents(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      where
      when
      description
    }
    nextToken
  }
}
`;

export const ListPoint = `
query ListPoint {
  listPoints {
    items {
      pointId
      lat
      lng
      createdAt
    }
  }
}
`;
