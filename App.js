import React, {useEffect} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import OneSignal from 'react-native-onesignal'; // Import package from node modules

export default function App() {

  // const onesignal = () => {

  useEffect(() => {
    OneSignal.init("",
    {
      kOSSettingsKeyAutoPrompt: false,
      kOSSettingsKeyInAppLaunchURL: false,
      kOSSettingsKeyInFocusDisplayOption: 2
    });
   
  }, [])
   

  // }

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


