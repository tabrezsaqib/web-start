/**
 * To find your Firebase config object:
 * 
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */
const config = {
  apiKey: "AIzaSyCBG31MzcJ-uaIGOk3l3fv8IgTFwZHUpjQ",
  authDomain: "friendlychat-e665c.firebaseapp.com",
  projectId: "friendlychat-e665c",
  storageBucket: "friendlychat-e665c.appspot.com",
  messagingSenderId: "743922356964",
  appId: "1:743922356964:web:834aaef37d5542b1ccd2f1"
};

export const firebaseConfig = {
  apiKey: "AIzaSyCBG31MzcJ-uaIGOk3l3fv8IgTFwZHUpjQ",
  authDomain: "friendlychat-e665c.firebaseapp.com",
  projectId: "friendlychat-e665c",
  storageBucket: "friendlychat-e665c.appspot.com",
  messagingSenderId: "743922356964",
  appId: "1:743922356964:web:834aaef37d5542b1ccd2f1"
};


export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
    'Add your web app\'s configuration object to firebase-config.js');
  } else {
    return config;
  }
}