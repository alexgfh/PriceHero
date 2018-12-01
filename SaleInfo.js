import React from 'react';
import { Linking, TouchableHighlight, StyleSheet, Platform, Image, Text, View, ScrollView } from 'react-native';
import { withNavigation } from 'react-navigation';
import { Card, ListItem, Button, Icon } from 'react-native-elements';
import moment from 'moment';
import firebase from 'react-native-firebase';
const database = firebase.database();
const url = "https://www.gigantti.fi/product/tv-ja-video/televisiot/32PHT4503/philips-32-hd-ready-led-tv-32pht4503";

let data = {};

class SaleInfo extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		let params = this.props.navigation.state.params;
		return (
		<View style={{
			flex: 1,
			flexDirection: 'column',
			justifyContent: 'center',
			alignItems: 'stretch',
		}}>
			<View style={{flex: 0.5}}>
			  <View style={{flex: 1, flexDirection: 'row', backgroundColor: 'powderblue', alignItems: 'center'}}>
				<Image
				  style={{width: 80, height: 80}}
				  source={{uri: params.listParams.avatar}}
				/>
				<View style={{flex: 1, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start'}}>
				  <Text style={{fontSize: 18, fontWeight: 'bold'}}>
					{params.merchant.name}
				  </Text>
				  <Text style={{fontSize: 18, color: 'dimgray'}}>
					{params.merchant.streetAddress}
				  </Text>
				  <Text style={{fontSize: 14, color: 'dimgray'}}>
					{moment(params.timestamp).format('MMMM Do YYYY, h:mm:ss a')}
				  </Text>
				</View>
			  </View>
			</View>
			<Image
				style={{width:360, height:180}}
				source={require('./Bloco3.jpeg')}
			/>
			<TouchableHighlight onPress={()=>{Linking.openURL(url)}}>
				<Image
					source={require('./Bloco1.jpeg')}
				/> 
			</TouchableHighlight>
		</View>
		)
	  }
}

export default withNavigation(SaleInfo);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  logo: {
    height: 120,
    marginBottom: 16,
    marginTop: 64,
    padding: 10,
    width: 135,
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
  modules: {
    margin: 20,
  },
  modulesHeader: {
    fontSize: 16,
    marginBottom: 8,
  },
  module: {
    fontSize: 14,
    marginTop: 4,
    textAlign: 'center',
  }
});
