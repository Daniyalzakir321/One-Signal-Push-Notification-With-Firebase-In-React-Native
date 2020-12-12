# _OnePush Notification With Firebase In React Native._

## *How To Use It.*

npm install --save react-native-onesignal

----------------------------------------

//Add This Code At Top Of The: app/build.gradle

buildscript {
    repositories {
        maven { url 'https://plugins.gradle.org/m2/' } // Gradle Plugin Portal 
    }
    dependencies {
        classpath 'gradle.plugin.com.onesignal:onesignal-gradle-plugin:[0.12.9, 0.99.99]'
    }
}

apply plugin: 'com.onesignal.androidsdk.onesignal-gradle-plugin'

-------------------------------------------
//Add This Code In App.js 

import OneSignal from 'react-native-onesignal'; // Import package from node modules

useEffect(() => {
 OneSignal.init("YOUR TOKEN GIVE BY ONEPUSH",
  {
      kOSSettingsKeyAutoPrompt: false,
      kOSSettingsKeyInAppLaunchURL: false,
      kOSSettingsKeyInFocusDisplayOption: 2
 	});
   
}, [])

More: https://documentation.onesignal.com/docs/react-native-sdk-setup


