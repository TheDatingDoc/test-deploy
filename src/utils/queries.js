import { gql } from "@apollo/client";

// Fetch all users - for admin use
export const GET_USERS = gql`
  query {
    users {
      _id
      name
      email
      city
      state
      gender
      interestedIn
      profileImage
    }
  }
`;

// Fetch a single user by ID
export const GET_USER = gql`
  query getUser($id: ID!) {
    user(id: $id) {
      _id
      name
      email
      birthday
      gender
      lookingFor
      interestedIn
      profileImage 
      interests
    }
  }
`;

// Fetch all events
export const GET_EVENTS = gql`
  query {
    events {
      _id
      name
      description
      date
      time
      city
      address
      images
      eventType
      tags
      price
      status
      maxParticipants
      soldTickets
    }
  }
`;

// Fetch a single event by ID
export const GET_EVENT = gql`
  query getEvent($id: ID!) {
    event(id: $id) {
      _id
      name
      description
      date
      time
      city
      address
      images
      eventType
      tags
      price
      status
      maxParticipants
      soldTickets
      attendees {
        _id
        name
      }
    }
  }
`;

// fetch user's attended and upcoming events
export const GET_MY_EVENTS = gql`
query MyEvents {
  myEvents {
    _id
    email
    registeredEvents {
      _id
      name
      date
      description
      eventId
      time
    }
  }
}
`;

// fetch user's matches for a specific event
export const GET_MY_MATCHES = gql`
  query getMyMatches($eventId: ID!) {
    myMatches(eventId: $eventId) {
      _id
      name
      email
      profileImage
    }
  }
`;

// fetch chat messages by chat ID
export const GET_CHAT = gql`
  query getChat($id: ID!) {
    chat(id: $id) {
      _id
      users {
        _id
        name
      }
      messages {
        _id
        message
        timestamp
        sender {
          _id
          name
        }
      }
    }
  }
`;

// fetch messages of a chat by chat ID
export const GET_MESSAGES = gql`
  query getMessages($chatId: ID!) {
    messages(chatId: $chatId) {
      _id
      message
      timestamp
      sender {
        _id
        name
      }
    }
  }
`;
