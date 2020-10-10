
# React Native Firebase Phone Auth

Example for React Native Firebase Phone Auth

Example implemented only for android and didn't setup for iOS

## Setup

# install
yarn

# Configure firebase 
1. Create new project/existing project at https://console.firebase.google.com/
2. Enable Phone Sign-In methods from authentication
3. Add app in Project Settings and select android <br />
  Package name : `com.rnfirebaseauth`
  SHA certificate fingerprints  : `c2:dc:05:5a:45:9f:66:38:7a:1c:0b:a2:95:0b:cc:99:cd:9e:39:86`
4. Download the google-services.json file and place it inside of your project at the following location: `/android/app/google-services.json`

# start app
npm run android
