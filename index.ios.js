/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createLogger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './src/sagas';
import reducer from './src/reducers';

// import App from './components/App';
import App from './src/components/App';

const initialState = {
    thread: {
        id: 1,
        title: 'これはThreadのタイトル1です',
        body: 'これはThreadの本文1です',
        isEdit: false,
        titleLength: 17,
        bodyLength: 15
    },
    comments: [
        {
            id: 1,
            title: 'これはCommentのタイトル1です',
            body: 'これはCommentの本文1です',
            isEdit: false,
        },
        {
            id: 2,
            title: 'これはCommentのタイトル2です',
            body: 'これはCommentの本文2です',
            isEdit: false,
        }
    ],
    likes: [
        {
            id: 1,
            user_name: '太郎',
        },
        {
            id: 2,
            user_name: '花子',
        }
    ],
    loading: {
        isActive: false
    }
};

const sagaMiddleware = createSagaMiddleware();
const logger = createLogger();
const store = createStore(
    reducer,
    initialState,
    applyMiddleware(
        sagaMiddleware,
        logger
    )
);
sagaMiddleware.run(rootSaga);

// let store = createStore(reducers)
let ThreadReactNative = React.createClass({
  render: function() {
    return(
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
});

AppRegistry.registerComponent('ThreadReactNative', () => ThreadReactNative);
