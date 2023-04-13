import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import RTNCenteredText from 'rtn-centered-text/js/RTNCenteredTextNativeComponent';

function App(): JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Trying Fabric Component</Text>

      <RTNCenteredText
        text="Hello World!"
        style={{width: '100%', height: 30}}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  text: {
    fontSize: 25,
    textAlign: 'center',
    marginTop: 10,
    color: '#FFF',
  },
});

export default App;
