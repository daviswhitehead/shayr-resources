"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserShortName = (user) => {
    return `${user.firstName ? user.firstName + ' ' : ''}${user.lastName ? user.lastName.charAt(0) + ' ' : ''}`;
};
exports.getUserFullName = (user) => {
    return `${user.firstName ? user.firstName + ' ' : ''}${user.lastName ? user.lastName + ' ' : ''}`;
};
