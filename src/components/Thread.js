import React, { Component } from 'react';
import { TouchableOpacity, StyleSheet, Button, Text, TextInput, View } from 'react-native';
// import React from 'react';
// import '../index.css';

export default class Thread extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let title, body;
    const { thread, actions } = this.props;
    title = thread.title;
    return (
        <View style={{width: 400, height: 200, backgroundColor: 'skyblue'}}>

          <View>
            <Text style={{padding: 20}}>スレッド</Text>
            <View style={{width: 400, height: 60, padding: 0}}>
              <Text style={{padding: 2}}>ユーザ画像</Text>
              <Text style={{padding: 2}}>ユーザ名</Text>
            </View>

            {!thread.isEdit &&
            <View style={{width: 400, height: 60}}>
              <Text>{thread.title}</Text>
              <Text>{thread.body}</Text>
            </View>
            }
          </View>

          <View>
            {thread.isEdit &&
            <View style={{width: 400, height: 180}}>
              <Text style={{padding: 6}}>入力エリア</Text>
              <TextInput style={{height: 40, padding: 2}} defaultValue={thread.title} onChange={(e) => {title = e.nativeEvent.text}} />
              <TextInput style={{height: 40, padding: 12}} defaultValue={thread.body} ref={(ref) => {this.body = ref;}} />
              <Button title="更新" onPress={() => actions.updateThread(title, this.body._lastNativeText)} color="#841584" accessibilityLabel="スレッド更新ボタン" />
            </View>
            }
            <Button title="編集" onPress={() => actions.editThread()} color="#841584" accessibilityLabel="スレッド編集ボタン"/>
          </View>

        </View>
        // <div className="thread">
        //     <div className="user">
        //         <div className="user_image"></div>
        //         <div className="user_name"></div>
        //     </div>
        //
        //     <div className="thread-content" style={{display: thread.isEdit ? 'none' : 'block'}}>
        //         <div className="title">{thread.title}</div>
        //         <div className="body">{thread.body}</div>
        //     </div>
        //
        //     <div className="thread_editArea" style={{display: thread.isEdit ? 'block' : 'none'}}>
        //         <input defaultValue={thread.title} ref={input => {title = input;}} onKeyUp={e => {e.preventDefault();actions.countThreadTitleLength(title.value)}} />
        //         <span>{thread.titleLength}</span>
        //         <input defaultValue={thread.body} ref={input => {body = input;}} onKeyUp={e => {e.preventDefault();actions.countThreadBodyLength(body.value)}}/>
        //         <span>{thread.bodyLength}</span>
        //         <button className="edit_save" onClick={e => {e.preventDefault();actions.updateThread(title.value, body.value)}}>更新</button>
        //     </div>
        //
        //     <button className="edit" onClick={e => {e.preventDefault();actions.editThread()}}>編集</button>
        //     <button className="delete">削除</button>
        // </div>
    );
  }
}
