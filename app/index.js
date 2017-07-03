import React from 'react'
import { StyleSheet, Text, View, Image, StatusBar } from 'react-native'

import LoginPage from './components/LoginPage'
import TeamOverview from './components/TeamOverview/TeamOverview'
import GameCards from './components/TeamOverview/GameCards'

export default class Main extends React.Component {
  render() {
    return (
      <View style={styles.appcontainer}>
        <TeamOverview />
      </View>
      
    )
  }
}

const styles = StyleSheet.create({
  appcontainer: {
    flex: 1,
    alignItems: 'stretch',
    width: null,
  },
})
