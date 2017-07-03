import React from 'react'
import { StyleSheet, Text, View, Image, StatusBar } from 'react-native'

import LoginForm from './LoginForm'

export default class LoginPage extends React.Component {
  render() {
    return (
      <Image style={styles.logincontainer} source={require('../images/gymfloor.jpg')}>
        <StatusBar hidden={true} />
        <View style={styles.logocontainer}>
          <Image style={styles.logo}source={require('../images/gcslogo.png')}/>
        </View>
        <LoginForm />
      </Image>
    )
  }
}

const styles = StyleSheet.create({
  logincontainer: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
    width: null,
    padding: 20
  },
  logocontainer: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 30,
    height: 150,
  },
  logo: {
    width: 140,
    height: 140
  }
})
