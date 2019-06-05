import * as Fields from './Fields';

// USER
export interface UserType {
  createdAt: Fields.createdAt;
  email: Fields.email;
  facebookProfilePhoto: Fields.facebookProfilePhoto;
  firstName: Fields.firstName;
  lastName: Fields.lastName;
  pushToken?: Fields.pushToken;
  updatedAt: Fields.updatedAt;
}

export const userDefault: UserType = {
  createdAt: null,
  email: '',
  facebookProfilePhoto: '',
  firstName: '',
  lastName: '',
  pushToken: '',
  updatedAt: null
};

// ACTION
export interface ActionType {
  active: Fields.active;
  createdAt: Fields.createdAt;
  postId: Fields.postId;
  updatedAt: Fields.updatedAt;
  userId: Fields.userId;
}

export const actionDefault: ActionType = {
  active: false,
  createdAt: null,
  postId: '',
  updatedAt: null,
  userId: ''
};

// FRIENDSHIP
export interface FriendshipType {
  createdAt: Fields.createdAt;
  initiatingUserId: Fields.initiatingUserId;
  receivingUserId: Fields.receivingUserId;
  status: Fields.status;
  updatedAt: Fields.updatedAt;
  userIds: Fields.userIds;
}

export const friendshipDefault: FriendshipType = {
  createdAt: null,
  initiatingUserId: '',
  receivingUserId: '',
  status: '',
  updatedAt: null,
  userIds: []
};

// POST
export interface PostType {
  addCount?: Fields.addCount;
  createdAt: Fields.createdAt;
  description: Fields.description;
  doneCount?: Fields.doneCount;
  image?: Fields.image;
  likeCount?: Fields.likeCount;
  medium?: Fields.medium;
  publisher?: {
    logo?: Fields.publisherLogo;
    name?: Fields.publisherName;
  };
  shareCount?: Fields.shareCount;
  title: Fields.title;
  updatedAt: Fields.updatedAt;
  url: Fields.url;
}

export const postDefault: PostType = {
  addCount: 0,
  createdAt: null,
  description: '',
  doneCount: 0,
  image: '',
  likeCount: 0,
  medium: '',
  publisher: {
    logo: '',
    name: ''
  },
  shareCount: 0,
  title: '',
  updatedAt: null,
  url: ''
};

// USERS_POSTS
export interface UsersPostsType extends PostType {
  adds?: Fields.adds;
  dones?: Fields.dones;
  likes?: Fields.likes;
  postId: Fields.postId;
  shares?: Fields.shares;
  userId: Fields.userId;
}

export const usersPostsDefault: UsersPostsType = {
  adds: [],
  dones: [],
  likes: [],
  postId: '',
  ...postDefault,
  shares: [],
  userId: ''
};
