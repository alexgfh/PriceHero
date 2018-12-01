import React from 'react';
import { StyleSheet, Platform, Image, Text, View, ScrollView } from 'react-native';
import { withNavigation } from 'react-navigation';
import { Card, ListItem, Button, Icon } from 'react-native-elements';
import firebase from 'react-native-firebase';
const database = firebase.database();


let data = {};

class SaleInfo extends React.Component {
	constructor(props) {
		super(props);
		this.state = {data: {}};
		
	}

	componentDidMount() {
		const EAN = '745129168636';
		const TAN = '55342343';
		this.setState({data: {'e':'r'}});
		this.setState(function(previousState){
				let new_state = previousState;
				new_state.data[EAN]='heyo';
				return new_state;
				
			});
		let self = this;
		database.ref('products/'+EAN).once('value')
		.then(function(snapshot) {
			let receipt = snapshot.val();
			
			console.warn('databased');
			self.setState(function(previousState){
				let new_state = previousState;
				new_state.data['q'] = receipt;
				return new_state;
				
			});
		});
	}

	render() {
		let params = this.props.navigation.state.params;
		return (
		<View>
		  <Text>
			{this.state.data['q'].name}
		  </Text>      
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
