import React, { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import OneSignal from 'react-native-onesignal'; // Import package from node modules

export default function App() {

// =============================================

  useEffect(() => {
    OneSignal.init("",
      {
        kOSSettingsKeyAutoPrompt: false,
        kOSSettingsKeyInAppLaunchURL: false,
        kOSSettingsKeyInFocusDisplayOption: 2
      });

    OneSignal.addEventListener('received', onReceived);
    OneSignal.addEventListener('opened', onOpened);
    OneSignal.addEventListener('ids', onIds);

    return () => {
      OneSignal.removeEventListener('received', onReceived);
      OneSignal.removeEventListener('opened', onOpened);
      OneSignal.removeEventListener('ids', onIds);
    }

  }, [])

  const onReceived = notification => {
    console.log("Notification received: ", notification);
  }

  const onOpened = openResult => {
    console.log('Message: ', openResult.notification.payload.body);
    console.log('Data: ', openResult.notification.payload.additionalData);
    console.log('isActive: ', openResult.notification.isAppInFocus);
    console.log('openResult: ', openResult);
  }

  const onIds = device => {
    console.log('Device info: ', device);
  }

// ================================================

  return (
    <View style={styles.view}>
      <Text> Hi </Text>
    </View>
  )
}


const styles = StyleSheet.create({
  view: {
    backgroundColor: '#ffff',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

});


