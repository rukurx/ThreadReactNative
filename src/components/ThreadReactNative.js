import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default class ThreadReactNative extends Component {
  render() {
    return (
      <View style={{flex: 1, flexDirection: 'column', justifyContent: 'space-between'}}>
        <View style={{width: 400, height: 250, backgroundColor: 'powderblue'}}>
          <View style={{padding: 10}}>
            <TextInput
              style={{height: 40}}
              placeholder="Type here to translate!"
            />
            <Text style={{padding: 10, fontSize: 42}}>
            awaawaawa
            </Text>
          </View>
        </View>
        <View style={{width: 400, height: 250, backgroundColor: 'skyblue'}} />
        <View style={{width: 400, height: 250, backgroundColor: 'steelblue'}} />
      </View>
    );
  }
}
/*
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
*/
