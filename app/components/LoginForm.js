import React from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'

export default class LoginForm extends React.Component {
	render(){
		return(
			<View style={styles.loginformcontainer}>
				<TextInput 	
						underlineColorAndroid='transparent' 
					   	style={styles.textinput} 
					   	placeholder="Email" />
				<TextInput 	
						underlineColorAndroid='transparent' 
						style={styles.textinput} 
						placeholder="Password" />
				<TouchableOpacity 
					style={styles.formbuttons}>
					<Text 
						style={styles.loginbtn}>Login</Text>
				</TouchableOpacity>
				<TouchableOpacity 
					activeopacity={1}
					style={styles.formbuttons}>
					<Text 
						style={styles.loginbtn}>Register</Text>
				</TouchableOpacity>
				<TouchableOpacity 
					style={styles.formbuttons}>
					<Text 
						style={styles.loginbtn}>Forgot Password</Text>
				</TouchableOpacity>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	loginformcontainer: {
		alignItems: 'center',
	},
	textinput: {
		alignSelf: 'stretch',
		justifyContent: 'center',
		backgroundColor: '#fff',
		marginBottom: 20,
		width: null,
		padding: 5,
		opacity: 0.4,
		borderColor: '#FF8B03',
		borderWidth: 0.6
	},
	formbuttons: {
		alignSelf: 'stretch',
		justifyContent: 'center',
		alignItems: 'center',
		marginBottom: 10,
		padding: 5
	},
	loginbtn: {
		color: '#4EC6E6',
		textDecorationLine: 'underline',
		padding: 10,
		fontWeight: 'bold',
		fontSize: 20,
		lineHeight: 20,
	}
})