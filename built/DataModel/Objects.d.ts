import * as Fields from './Fields';
export interface UserType {
    createdAt: Fields.createdAt;
    email: Fields.email;
    facebookProfilePhoto: Fields.facebookProfilePhoto;
    firstName: Fields.firstName;
    lastName: Fields.lastName;
    pushToken?: Fields.pushToken;
    updatedAt: Fields.updatedAt;
}
export declare const userDefault: UserType;
export interface ActionType {
    active: Fields.active;
    createdAt: Fields.createdAt;
    postId: Fields.postId;
    updatedAt: Fields.updatedAt;
    userId: Fields.userId;
}
export declare const actionDefault: ActionType;
export interface FriendshipType {
    createdAt: Fields.createdAt;
    initiatingUserId: Fields.initiatingUserId;
    receivingUserId: Fields.receivingUserId;
    status: Fields.status;
    updatedAt: Fields.updatedAt;
    userIds: Fields.userIds;
}
export declare const friendshipDefault: FriendshipType;
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
export declare const postDefault: PostType;
export interface UsersPostsType extends PostType {
    adds?: Fields.adds;
    dones?: Fields.dones;
    likes?: Fields.likes;
    postId: Fields.postId;
    shares?: Fields.shares;
    userId: Fields.userId;
}
export declare const usersPostsDefault: UsersPostsType;
