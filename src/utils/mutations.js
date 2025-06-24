import { gql } from "@apollo/client";

// add user

export const ADD_USER = gql`
  mutation addUser(
    $name: String!
    $email: String!
    $password: String!
    $birthday: String!
    $gender: String!
    $interestedIn: [String!]
    $lookingFor: [String!]
    $profileImage: String!
    $interests: [String]
  ) {
    addUser(
      name: $name
      email: $email
      password: $password
      birthday: $birthday
      gender: $gender
      interestedIn: $interestedIn
      lookingFor: $lookingFor
      profileImage: $profileImage
      interests: $interests
    ) {
      token
      user {
        _id
        email
       
      }
    }
  }
`;

export const UPLOAD_IMAGE = gql`
mutation UploadImage($file: Upload!) {
  uploadImage(file: $file)
}
`;


// login

export const LOGIN_USER = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        # name
        email
      }
    }
  }
`;

// update user

export const UPDATE_USER = gql`
  mutation updateUser(
    $name: String
    $email: String
    $password: String
    $city: String
    $state: String
    $birthday: String
    $jobTitle: String
    $bio: String
    $gender: String
    $interestedIn: [String]
    $profileImage: String
    $additionalImages: [String]
    $interests: [String]
    $personalityTraits: String
    $metatags: [String]
    $loveLanguage: [String]
    $bestFeature: String
    $socialCircle: String
    $lookingFor: [String]
    $basicInfo: [String]
    $proMember: Boolean
  ) {
    updateUser(
      name: $name
      email: $email
      password: $password
      city: $city
      state: $state
      birthday: $birthday
      jobTitle: $jobTitle
      bio: $bio
      gender: $gender
      interestedIn: $interestedIn
      profileImage: $profileImage
      additionalImages: $additionalImages
      interests: $interests
      personalityTraits: $personalityTraits
      metatags: $metatags
      loveLanguage: $loveLanguage
      bestFeature: $bestFeature
      socialCircle: $socialCircle
      lookingFor: $lookingFor
      basicInfo: $basicInfo
      proMember: $proMember
    ) {
    
      _id
      email
      
    }
  }
`;

// delete user

export const DELETE_USER = gql`
  mutation DeleteUser($id: ID!) {
    deleteUser(id: $id) {
      _id
      email
    }
  }
`;

// purchase a ticket

export const PURCHASE_TICKET = gql`
  mutation purchaseTicket($eventId: ID!, $ticketType: String!) {
    purchaseTicket(eventId: $eventId, ticketType: $ticketType) {
      _id
      eventName
      date
      time
      city
      attendees {
        _id
        name
      }
    }
  }
`;

// create a chat

export const CREATE_CHAT = gql`
  mutation createChat($userIds: [ID]!) {
    createChat(userIds: $userIds) {
      _id
      users {
        _id
        name
      }
      messages {
       _id
        message
        sender {
          _id
          name
        }
      }
    }
  }
`;

// add message to the chat

export const ADD_MESSAGE = gql`
  mutation addMessage(
    $chatId: ID!
    $senderId: ID!
    $message: String!
    $attachment: String
    $media: String
    $voiceMessage: String
    $emoji: String
  ) {
    addMessage(
      chatId: $chatId
      senderId: $senderId
      message: $message
      attachment: $attachment
      media: $media
      voiceMessage: $voiceMessage
      emoji: $emoji
    ) {
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

// update message

export const UPDATE_MESSAGE = gql`
  mutation updateMessage($id: ID!, $message: String, $emoji: String) {
    updateMessage(id: $id, message: $message, emoji: $emoji) {
      _id
      message
      emoji
      timestamp
    }
  }
`;

// delete message

export const DELETE_MESSAGE = gql`
  mutation deleteMessage($id: ID!) {
    deleteMessage(id: $id) {
      _id
      message
    }
  }
`;
