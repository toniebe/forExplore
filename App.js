import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Button, TextInput} from 'react-native-klikcair-component';
import iconCamer from './camera.png';

export default function App() {
  return (
    <View>
      <Text>For Example Project</Text>
      <Button
        type="primary"
        title="A"
        textColor="white"
        category="standard"
        size="long"
      />
      <TextInput
        icon={iconCamer}
        type="title"
        title="Hello World"
        focusColor="pink"
        blurColor="grey"
      />
    </View>
  );
}

const styles = StyleSheet.create({});
