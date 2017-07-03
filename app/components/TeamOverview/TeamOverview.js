import React from 'react'
import { StyleSheet, Text, View, Image, StatusBar, ListView } from 'react-native'

import GameCards from './GameCards'
import Standings from './Standings'


export default class TeamOverview extends React.Component {
  render() {
    return (
      <View style={styles.teamContainer}>
      <StatusBar 
        hidden={true} 
        backgroundColor="#FF8B03"
       />
      <View style={styles.header}>
        <Text style={styles.title}>Follow Through</Text>
      </View>
      <GameCards />
    </View>
    )
  }
}

const styles = StyleSheet.create({
  teamContainer: {
    flex: 1,
    alignItems: 'center'
  },
  header: {
    height: 70,
    width: 370,
    alignItems: 'center',
    backgroundColor: '#FF8B03',
    justifyContent: 'flex-end',
  },
  title: {
    marginBottom: 20,
    color: '#fff',
    fontWeight: 'bold'
  }
})
