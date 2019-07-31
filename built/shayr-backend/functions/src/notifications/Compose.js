"use strict";
// https://firebase.google.com/docs/cloud-messaging/concept-options#receiving-messages-from-multiple-senders
Object.defineProperty(exports, "__esModule", { value: true });
const priorityMap = {
    android: {
        high: 'high',
        normal: 'normal'
    },
    ios: {
        high: 10,
        normal: 5
    }
};
exports.composeNotification = (token, copy, appLink, channelId = 'General', priority = 'high', badge = 1) => {
    const message = {
        token,
        notification: Object.assign({}, copy),
        data: Object.assign({}, copy, { channelId,
            appLink }),
        android: {
            priority: priorityMap.android[priority]
        },
        apns: {
            headers: {
                ['apns-priority']: priorityMap.ios[priority]
            },
            payload: {
                aps: {
                    alert: Object.assign({}, copy),
                    badge
                }
            }
        }
    };
    return message;
};
