// COLLECTIONS
export type collection =
  | 'adds'
  | 'comments'
  | 'dones'
  | 'friendships'
  | 'likes'
  | 'mentions'
  | 'notifications'
  | 'posts'
  | 'shares'
  | 'users'
  | 'users_posts';

// TIMESTAMPS
export type timestamp = any;

// IDS
export type documentId = string;

// STRINGS
export type payload = string;
export type comment = string;
export type description = string;
export type email = string;
export type medium = 'text' | 'audio' | 'video';
export type name = string;
export type pushToken = string;
export type status =
  | 'pending'
  | 'accepted'
  | 'rejected'
  | 'deleted'
  | 'removed';
export type title = string;
export type uri = string;
export type url = string;

// BOOLEANS
export type active = boolean;

// NUMBERS
export type count = number;

// ARRAYS
export type documentIds = Array<documentId>;
