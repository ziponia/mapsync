// tslint:disable
// this is an auto generated file. This will be overwritten

export const createEvent = `mutation CreateEvent(
  $name: String!
  $when: String!
  $where: String!
  $description: String!
) {
  createEvent(
    name: $name
    when: $when
    where: $where
    description: $description
  ) {
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
export const deleteEvent = `mutation DeleteEvent($id: ID!) {
  deleteEvent(id: $id) {
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
export const commentOnEvent = `mutation CommentOnEvent($eventId: ID!, $content: String!, $createdAt: String!) {
  commentOnEvent(eventId: $eventId, content: $content, createdAt: $createdAt) {
    eventId
    commentId
    content
    createdAt
  }
}
`;

export const createPoint = `
mutation CreatePoint($lat: Float!, $lng: Float!, $createdAt: String) {
  createPoint(input: { lat: $lat, lng: $lng, createdAt: $createdAt }) {
    pointId
    lat
    lng
  }
}
`;

export const deletePoint = `
mutation DeltePoint($id: ID!) {
  deletePoint(input: {pointId: $id}) {
    pointId
  }
}
`;

export const createChatting = `
  mutation CreateChatting(
    $autor: String
    $createdAt: String
    $message: String
  ) {
    createChatting(input: {
      autor: $autor
      createdAt: $createdAt
      message: $message
    }) {
      id
      autor
      message
      createdAt
    }
  }
`;
