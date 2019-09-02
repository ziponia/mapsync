// tslint:disable
// this is an auto generated file. This will be overwritten

export const subscribeToEventComments = `subscription SubscribeToEventComments($eventId: String!) {
  subscribeToEventComments(eventId: $eventId) {
    eventId
    commentId
    content
    createdAt
  }
}
`;

export const onChangePoint = `
subscription OnChnagePoint {
  onCreatePoint {
    pointId
    lat
    lng
    createdAt
  }
  onDeletePoint {
    pointId
    lat
    lng
  }
}
`;

export const onChatAdd = `
subscription OnChatAdd {
  onCreateChatting {
    id
    autor
    createdAt
    message
  }
}
`;
