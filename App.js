import React, { useEffect, useState, useLayoutEffect } from 'react';
import nodejs from 'nodejs-mobile-react-native';
import io from 'socket.io-client';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  Alert,
  TextInput,
} from 'react-native';
const App = () => {
  const [nodeStart, setNodeStart] = useState(false);
  useEffect(() => {

    nodejs.start('main.js');
    nodejs.channel.addListener('message', (msg) => {
      Alert.alert(msg);
      console.log(msg);
    });
  });
  if (nodeStart) {
    nodejs.channel.addListener("message", (msg) => {
      console.log("message :::" + msg)
    })
    setNodeStart(false)
  }
  const handlePress = () => {
    setNodeStart(true);
  };
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View>
          <Button title="Server" onPress={handlePress} />
        </View>
        <View>
          <Button title="Client" />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
  },
});

export default App;
