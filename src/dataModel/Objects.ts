import * as Fields from './Fields';
import { DocumentFormatting } from '../Firebase/Formatters';

// notifications/{notificationId}
export interface Message {
  token: string;
  notification: {
    title: string;
    body: string;
  };
  data: {
    title?: string;
    body?: string;
    channelId: string;
    appLink: string;
  };
  android: {
    priority: string;
  };
  apns: {
    headers: {
      ['apns-priority']: string;
    };
    payload: {
      aps: {
        alert: {
          title: string;
          body: string;
        };
        badge: number;
      };
    };
  };
}

export const messageDefault: Message = {
  token: '',
  notification: {
    title: '',
    body: ''
  },
  data: {
    title: '',
    body: '',
    channelId: 'General',
    appLink: ''
  },
  android: {
    priority: 'high'
  },
  apns: {
    headers: {
      ['apns-priority']: '10'
    },
    payload: {
      aps: {
        alert: {
          title: '',
          body: ''
        },
        badge: 1
      }
    }
  }
};

export interface Notification extends DocumentFormatting {
  createdAt?: Fields.timestamp;
  fromId: Fields.documentId;
  isRead?: boolean;
  isPressed?: boolean;
  message: Message;
  pressedAt?: Fields.timestamp;
  readAt?: Fields.timestamp;
  receivingUserId: Fields.documentId;
  updatedAt?: Fields.timestamp;
}

export const notificationDefault: Notification = {
  createdAt: null,
  fromId: '',
  isRead: false,
  isPressed: false,
  message: messageDefault,
  pressedAt: null,
  readAt: null,
  receivingUserId: '',
  updatedAt: null
};

// adds/{userId}_{postId}
// dones/{userId}_{postId}
// likes/{userId}_{postId}
export interface PostAction extends DocumentFormatting {
  active: Fields.active;
  createdAt?: Fields.timestamp;
  postId: Fields.documentId;
  updatedAt: Fields.timestamp;
  userId: Fields.documentId;
}

export const postActionDefault: PostAction = {
  active: false,
  createdAt: '',
  postId: '',
  updatedAt: '',
  userId: ''
};

export const postActionExample: PostAction = {
  active: false,
  createdAt: '2019-03-20T03:24:33.268Z',
  postId: '6mN6SsgdI84JpCimZovI',
  updatedAt: '2019-03-20T03:24:33.268Z',
  userId: 'KhTuhl0T7WRx9dRspOanzvU4SHG3'
};

// shares/{userId}_{postId}
export interface ShareAction extends PostAction, DocumentFormatting {
  payload: Fields.payload;
  url: Fields.url;
  mentions?: Fields.documentIds;
  comment?: Fields.comment;
}

export const shareActionExample: ShareAction = {
  active: false,
  comment: 'This post is cool',
  createdAt: '2019-03-20T03:24:33.268Z',
  mentions: ['KhTuhl0T7WRx9dRspOanzvU4SHG3', 'KhTuhl0T7WRx9dRspOanzvU4SHG3'],
  payload:
    'A Dark Consensus About Screens and Kids Begins to Emerge in Silicon Valley https://nyti.ms/2JkjOdJ',
  postId: '6mN6SsgdI84JpCimZovI',
  updatedAt: '2019-03-20T03:24:33.268Z',
  userId: 'KhTuhl0T7WRx9dRspOanzvU4SHG3',
  url: 'https://google.com'
};

// friendships/{initiatingUserId}_{receivingUserId}
export interface Friendship extends DocumentFormatting {
  createdAt: Fields.timestamp;
  initiatingUserId: Fields.documentId;
  receivingUserId: Fields.documentId;
  status: Fields.status;
  updatedAt: Fields.timestamp;
  userIds: Fields.documentIds;
}

export const friendshipDefault: Friendship = {
  createdAt: '',
  initiatingUserId: '',
  receivingUserId: '',
  status: '',
  updatedAt: '',
  userIds: []
};

// posts/{postId}
export interface Post extends DocumentFormatting {
  addsCount?: Fields.count;
  createdAt: Fields.timestamp;
  description: Fields.description;
  donesCount?: Fields.count;
  image?: Fields.uri;
  likesCount?: Fields.count;
  medium?: Fields.medium;
  publisher?: {
    logo?: Fields.uri;
    name?: Fields.name;
  };
  sharesCount?: Fields.count;
  title: Fields.title;
  updatedAt: Fields.timestamp;
  url: Fields.url;
}

export const postDefault: Post = {
  addsCount: 0,
  createdAt: '',
  description: '',
  donesCount: 0,
  image: '',
  likesCount: 0,
  medium: '',
  publisher: {
    logo: '',
    name: ''
  },
  sharesCount: 0,
  title: '',
  updatedAt: '',
  url: ''
};

// users/{userId}
export interface UserAtom extends DocumentFormatting {
  addsCount?: Fields.count;
  donesCount?: Fields.count;
  firstName: Fields.name;
  friendsCount?: Fields.count;
  lastName: Fields.name;
  likesCount?: Fields.count;
  profilePhoto: Fields.uri;
  sharesCount?: Fields.count;
}

export const userAtomDefault: UserAtom = {
  addsCount: 0,
  donesCount: 0,
  firstName: '',
  friendsCount: 0,
  lastName: '',
  likesCount: 0,
  profilePhoto: '',
  sharesCount: 0
};

export interface User extends UserAtom, DocumentFormatting {
  createdAt: Fields.timestamp;
  email: Fields.email;
  pushToken?: Fields.pushToken;
  updatedAt: Fields.timestamp;
}

export const userDefault: User = {
  ...userAtomDefault,
  createdAt: '',
  email: '',
  pushToken: '',
  updatedAt: ''
};

// users_posts/{userId}_{postId}
export interface UsersPosts extends Post, DocumentFormatting {
  adds?: Fields.documentIds;
  addsActive?: Fields.active;
  dones?: Fields.documentIds;
  donesActive?: Fields.active;
  likes?: Fields.documentIds;
  likesActive?: Fields.active;
  postId: Fields.documentId;
  shares?: Fields.documentIds;
  sharesActive?: Fields.active;
  userId: Fields.documentId;
}

export const usersPostsDefault: UsersPosts = {
  adds: [],
  dones: [],
  likes: [],
  ...postDefault,
  postId: '',
  shares: [],
  userId: ''
};
