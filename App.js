/*
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
*/
import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';

//  Screens
import GameListScreen from './app/components/Games/GameListScreen';
import GameBriefScreen from './app/components/Games/GameBriefScreen';
import QuizScreen from './app/components/Quizzes/QuizScreen';
import GameResultsScreen from './app/components/Games/GameResultsScreen';


const App = StackNavigator(
  {
    GameListScreen: { screen: GameListScreen },
    GameBriefScreen: { screen: GameBriefScreen },
    QuizScreen: { screen: QuizScreen },
    GameResultsScreen: { screen: GameResultsScreen },
  },
  {
    initialRouteName: 'GameListScreen',
  }
);

export default App;
