export declare type channelId = 'General';
export declare type priority = 'high' | 'normal';
export declare const composeNotification: (token: string, copy: any, appLink: any, channelId?: "General", priority?: priority, badge?: number) => {
    token: string;
    notification: any;
    data: any;
    android: {
        priority: string;
    };
    apns: {
        headers: {
            ['apns-priority']: number;
        };
        payload: {
            aps: {
                alert: any;
                badge: number;
            };
        };
    };
};
