import * as Fields from './Fields';
import { DocumentFormatting } from '../Firebase/Formatters';
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
            ['apns-priority']: number;
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
export declare const messageDefault: Message;
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
export declare const notificationDefault: Notification;
export interface PostAction extends DocumentFormatting {
    active: Fields.active;
    createdAt?: Fields.timestamp;
    postId: Fields.documentId;
    updatedAt: Fields.timestamp;
    userId: Fields.documentId;
}
export declare const postActionDefault: PostAction;
export declare const postActionExample: PostAction;
export interface ShareAction extends PostAction, DocumentFormatting {
    payload: Fields.payload;
    url: Fields.url;
    mentions?: Fields.documentIds;
    comment?: Fields.comment;
}
export declare const shareActionExample: ShareAction;
export interface Friendship extends DocumentFormatting {
    createdAt: Fields.timestamp;
    initiatingUserId: Fields.documentId;
    receivingUserId: Fields.documentId;
    status: Fields.status;
    updatedAt: Fields.timestamp;
    userIds: Fields.documentIds;
}
export declare const friendshipDefault: Friendship;
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
export declare const postDefault: Post;
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
export declare const userAtomDefault: UserAtom;
export interface User extends UserAtom, DocumentFormatting {
    createdAt: Fields.timestamp;
    email: Fields.email;
    pushToken?: Fields.pushToken;
    updatedAt: Fields.timestamp;
}
export declare const userDefault: User;
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
export declare const usersPostsDefault: UsersPosts;
