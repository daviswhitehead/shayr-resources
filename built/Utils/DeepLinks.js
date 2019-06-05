"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// https://github.com/medialize/URI.js
const urijs_1 = __importDefault(require("urijs"));
const lodash_1 = __importDefault(require("lodash"));
// run the below to test deeplinking
// // iOS: xcrun simctl openurl booted shayr://com.daviswhitehead.shayr.ios.dev/Feed?param=meow
// // Android: adb shell am start -W -a android.intent.action.VIEW -d "shayr://shayr/HelloWorld?param=meow" com.daviswhitehead.shayr.android.dev
// online resources
// // https://medium.com/react-native-training/deep-linking-your-react-native-app-d87c39a1ad5e
// // https://reactnavigation.org/docs/en/deep-linking.html#set-up-with-react-native-init-projects
// // https://facebook.github.io/react-native/docs/linking
// valid deeplink protocols
exports.protocols = ['shayr', 'https'];
// takes an object and turns it into a URL query
exports.objectToURLQuery = (params) => Object.keys(params)
    .map(key => `${key}=${encodeURIComponent(params[key])}`)
    .join('&');
// takes an app link URL and parses into protocol, hostname, screen, params
exports.parseAppLink = (url) => {
    // expects to find urls in the following format [protocol][hostname][path][query]
    // format should map to [protocol][bundle_id][screen][screen params]
    // // e.g. shayr://com.daviswhitehead.shayr.ios.dev/Feed?param=meow
    // // protocol: shayr, hostname: com.daviswhitehead.shayr.ios.dev,
    // // path: /Feed, query: param=meow
    const uri = new urijs_1.default(url);
    const params = uri._parts.query
        ? lodash_1.default.fromPairs(Array.from(new URLSearchParams(uri._parts.query).entries()))
        : {};
    return {
        url,
        protocol: uri._parts.protocol,
        hostname: uri._parts.hostname,
        screen: uri._parts.path.replace('/', ''),
        params
    };
};
// takes a desired screen and its paramaters and builds a link the app can handle
exports.buildAppLink = (protocol, hostname, screen, params) => `${protocol}://${hostname}/${screen}?${exports.objectToURLQuery(params)}`;
