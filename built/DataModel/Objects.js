"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postActionDefault = {
    active: false,
    createdAt: '',
    postId: '',
    updatedAt: '',
    userId: ''
};
exports.postActionExample = {
    active: false,
    createdAt: '2019-03-20T03:24:33.268Z',
    postId: '6mN6SsgdI84JpCimZovI',
    updatedAt: '2019-03-20T03:24:33.268Z',
    userId: 'KhTuhl0T7WRx9dRspOanzvU4SHG3'
};
exports.shareActionExample = {
    active: false,
    createdAt: '2019-03-20T03:24:33.268Z',
    postId: '6mN6SsgdI84JpCimZovI',
    updatedAt: '2019-03-20T03:24:33.268Z',
    userId: 'KhTuhl0T7WRx9dRspOanzvU4SHG3',
    url: 'https://google.com',
    mentions: ['KhTuhl0T7WRx9dRspOanzvU4SHG3', 'KhTuhl0T7WRx9dRspOanzvU4SHG3'],
    comment: 'This post is cool'
};
exports.friendshipDefault = {
    createdAt: '',
    initiatingUserId: '',
    receivingUserId: '',
    status: '',
    updatedAt: '',
    userIds: []
};
exports.postDefault = {
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
exports.userAtomDefault = {
    addsCount: 0,
    donesCount: 0,
    firstName: '',
    friendsCount: 0,
    lastName: '',
    likesCount: 0,
    profilePhoto: '',
    sharesCount: 0
};
exports.userDefault = Object.assign({}, exports.userAtomDefault, { createdAt: '', email: '', pushToken: '', updatedAt: '' });
exports.usersPostsDefault = Object.assign({ adds: [], dones: [], likes: [] }, exports.postDefault, { postId: '', shares: [], userId: '' });
