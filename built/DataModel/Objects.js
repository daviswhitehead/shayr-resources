"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userDefault = {
    createdAt: null,
    email: '',
    facebookProfilePhoto: '',
    firstName: '',
    lastName: '',
    pushToken: '',
    updatedAt: null
};
exports.actionDefault = {
    active: false,
    createdAt: null,
    postId: '',
    updatedAt: null,
    userId: ''
};
exports.friendshipDefault = {
    createdAt: null,
    initiatingUserId: '',
    receivingUserId: '',
    status: '',
    updatedAt: null,
    userIds: []
};
exports.postDefault = {
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
exports.usersPostsDefault = Object.assign({ adds: [], dones: [], likes: [] }, exports.postDefault, { postId: '', shares: [], userId: '' });
