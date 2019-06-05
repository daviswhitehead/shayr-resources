import _ from 'lodash';
export declare const protocols: string[];
export declare const objectToURLQuery: (params: any) => string;
export declare const parseAppLink: (url: string) => {
    url: string;
    protocol: any;
    hostname: any;
    screen: any;
    params: _.Dictionary<string>;
};
export declare const buildAppLink: (protocol: any, hostname: string, screen: string, params: string) => string;
