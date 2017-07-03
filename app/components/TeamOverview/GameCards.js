import React from 'react'
import { View, Image, StyleSheet, Text, List, FlatList, ScrollView, TouchableOpacity } from 'react-native'

const games_first = [
	{	
		id:0, 
		daysleft: 2,
		opponent: 'Shot Callers',
		attending: true,
		time: '7:00',
		date: 'Sept 25, 2017',
		totalplayers: 7,
		rsvp: 6,
	},
	{	
		id:1, 
		daysleft: 9,
		opponent: 'Da Real Mvp',
		attending: false,
		time: '7:00',
		date: 'Oct 1, 2017',	
		totalplayers: 7,
		rsvp: 4,
	},
	{	
	 	id:2, 
		daysleft: 19,
		opponent: 'Kobe Jordans',
		attending: true,
		time: '7:00',
		date: 'Oct 11, 2017',
		totalplayers: 7,
		rsvp: 1,
	},
	{	
	 	id:3, 
		daysleft: 26,
		opponent: 'Lebrono',
		attending: true,
		time: '7:00',
		date: 'Oct 11, 2017',
		totalplayers: 7,
		rsvp: 1,
	},
]

// extracts id from data. We can avoid creating this function by replacing 'id' with 'key'
const extractKey = ({id}) => id

class WhiteText extends React.Component {
  render() {
  	return(
      <Text style={{fontSize: 20, color: 'black'}}>
        {this.props.children}
      </Text>
    )
  }
}


export default class GameCards extends React.Component {
  	_renderItem(games){
  		return(
  			<TouchableOpacity style={{ width: 300, marginLeft: 10, marginTop: 10, height: 200, borderColor: 'transparent' }}>
  				<View style={{ flex: 1, padding: 15, backgroundColor: 'blue', justifyContent: 'center', alignContent: 'center', alignItems: 'center', borderWidth: 0.4, borderTopLeftRadius: 2, borderTopRightRadius: 2, overflow: 'hidden'}}>
		  				<Text style={{color: '#fff'}}>Game in {games.daysleft} days</Text>
						<Text style={{color: '#fff'}}>vs {games.opponent}</Text>
				</View>
				<View style={{flex: 1, justifyContent: 'center', alignItems: 'center', padding: 15, backgroundColor:'#fff', borderColor: '#2f4f4f', borderWidth: 0.4, borderBottomLeftRadius: 2, borderBottomRightRadius: 2, overflow: 'hidden'}}>
	  				<Text style={{color: 'black'}}>{ games.time } on { games.date }</Text>
	  				<Text style={{color: 'black'}}>{ games.rsvp } / { games.totalplayers } are attending</Text>
	  			</View>
  			</TouchableOpacity>
  		)
  	}

  	render(){
  		return(
  			<View style={{flex: 1, backgroundColor: 'lightgrey', overflow: 'hidden'}}>
  				<FlatList 
  					style={{flex: 1, marginLeft: 20}}
  					ItemSeparatorComponent={ () => <View style={{width: 10}}/>}
  					horizontal
  					removeClippedSubviews
  					renderItem={({item}) => this._renderItem(item)}
  					data={games_first}
  					keyExtractor={extractKey}
  				/>
  			</View>
  		)
  	}
  
}

const styles = StyleSheet.create({
	whitefont: {
		color: '#fff'
	},
})
