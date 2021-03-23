import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  StatusBar,
  TouchableOpacity,
  AccessibilityInfo,
} from 'react-native';

const App = () => {
  const initialText = 'initial text';
  const [btnText, setBtnText] = useState(initialText);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <TouchableOpacity
          accessibilityLiveRegion="none"
          onPress={() => {
            if (btnText === initialText) {
              setBtnText('Other text');
            } else {
              setBtnText(initialText);
            }
            AccessibilityInfo.announceForAccessibility('Button pressed');
          }}>
          <Text>{btnText}</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </>
  );
};

export default App;
