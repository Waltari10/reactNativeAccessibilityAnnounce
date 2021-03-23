import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  StatusBar,
  TouchableOpacity,
  AccessibilityInfo,
} from 'react-native';

// Problem

/**
 * on android pressing the button will result in "button pressed" being read out
 * On iOS presing the button results in the new text content of the button being read out, and announceForAccessibility is ignored.

 * Optimally we would like it to read "Button pressed", and then announce new text content of button
 */
const App = () => {
  const initialText = 'initial text';
  const [btnText, setBtnText] = useState(initialText);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <TouchableOpacity
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
