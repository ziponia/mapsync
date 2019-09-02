/* tslint:disable */
//  This file was automatically generated and should not be edited.

export type TableEventFilterInput = {
  id?: TableIDFilterInput | null,
  name?: TableStringFilterInput | null,
  where?: TableStringFilterInput | null,
  when?: TableStringFilterInput | null,
  description?: TableStringFilterInput | null,
};

export type TableIDFilterInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type TableStringFilterInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type CreateEventMutationVariables = {
  name: string,
  when: string,
  where: string,
  description: string,
};

export type CreateEventMutation = {
  // Create a single event.
  createEvent:  {
    __typename: "Event",
    id: string,
    name: string | null,
    where: string | null,
    when: string | null,
    description: string | null,
    // Paginate through all comments belonging to an individual post.
    comments:  {
      __typename: "CommentConnection",
      nextToken: string | null,
    } | null,
  } | null,
};

export type DeleteEventMutationVariables = {
  id: string,
};

export type DeleteEventMutation = {
  // Delete a single event by id.
  deleteEvent:  {
    __typename: "Event",
    id: string,
    name: string | null,
    where: string | null,
    when: string | null,
    description: string | null,
    // Paginate through all comments belonging to an individual post.
    comments:  {
      __typename: "CommentConnection",
      nextToken: string | null,
    } | null,
  } | null,
};

export type CommentOnEventMutationVariables = {
  eventId: string,
  content: string,
  createdAt: string,
};

export type CommentOnEventMutation = {
  // Comment on an event.
  commentOnEvent:  {
    __typename: "Comment",
    // The id of the comment's parent event.
    eventId: string,
    // A unique identifier for the comment.
    commentId: string,
    // The comment's content.
    content: string,
    // The comment timestamp. This field is indexed to enable sorted pagination.
    createdAt: string,
  } | null,
};

export type GetEventQueryVariables = {
  id: string,
};

export type GetEventQuery = {
  // Get a single event by id.
  getEvent:  {
    __typename: "Event",
    id: string,
    name: string | null,
    where: string | null,
    when: string | null,
    description: string | null,
    // Paginate through all comments belonging to an individual post.
    comments:  {
      __typename: "CommentConnection",
      nextToken: string | null,
    } | null,
  } | null,
};

export type ListEventsQueryVariables = {
  filter?: TableEventFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListEventsQuery = {
  // Paginate through events.
  listEvents:  {
    __typename: "EventConnection",
    items:  Array< {
      __typename: "Event",
      id: string,
      name: string | null,
      where: string | null,
      when: string | null,
      description: string | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type SubscribeToEventCommentsSubscriptionVariables = {
  eventId: string,
};

export type SubscribeToEventCommentsSubscription = {
  subscribeToEventComments:  {
    __typename: "Comment",
    // The id of the comment's parent event.
    eventId: string,
    // A unique identifier for the comment.
    commentId: string,
    // The comment's content.
    content: string,
    // The comment timestamp. This field is indexed to enable sorted pagination.
    createdAt: string,
  } | null,
};
