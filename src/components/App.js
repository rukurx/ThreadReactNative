import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

import ThreadHandler from '../containers/ThreadHandler';
// import CommentsHandler from '../containers/CommentsHandler';
// import AddCommentHandler from '../containers/AddCommentHandler';
// import LikesHandler from '../containers/LikesHandler';
// import GetMoreLikesBtnHandler from '../containers/GetMoreLikesBtnHandler';
// import LoadingHandler from '../containers/LoadingHandler';
// import '../index.css';

// const App = () => (
//     <div className="app">
//
//         {/* 基になる投稿 */}
//         <ThreadHandler />
//
//         {/* コメント一覧 */}
//         <CommentsHandler />
//
//         {/* コメント追加 */}
//         <AddCommentHandler />
//
//         {/* いいね！一覧 */}
//         <LikesHandler />
//         <LoadingHandler />
//         <GetMoreLikesBtnHandler />
//
//     </div>
// );

// export default App;

export default class App extends Component {
  render() {
    return (
      <View style={{width: 400, height: 800, backgroundColor: 'powderblue'}}>
        <ThreadHandler />
      </View>
    );
  }
}
