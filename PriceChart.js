import React from 'react';
import { StyleSheet, Platform, Image, Text, View, ScrollView } from 'react-native';
import { withNavigation } from 'react-navigation';
import { Card, ListItem, Button, Icon } from 'react-native-elements';
import firebase from 'react-native-firebase';
const database = firebase.database();

import { YAxis, LineChart, Grid } from 'react-native-svg-charts';

class PriceChart extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {chart_data: [], counter: 0, cheapest_index: -1, cheapest_value: Infinity, merchant: {}};
	}

	componentDidMount() {
		const EAN = '300450288080';//this.props.EAN;
		const productsRef = database.ref('products/');
		let self = this;
		const receiptsRef = productsRef.child(EAN+'/receipts/')
		receiptsRef.orderByChild('receiptTimeStamp').on('child_added', function(snapshot) {
			
			let receipt = snapshot.toJSON();
			self.setState(function(previousState) {
				let data_point = {
					y: receipt.unitPriceIncVAT,
					x: Date.parse(receipt.receiptTimeStamp)
				};
				
				let new_state = previousState;
				if (data_point.y < previousState.cheapest_value) {
					new_state.cheapest_index = previousState.counter;
					new_state.cheapest_value = data_point.y;
					new_state.merchant.name = receipt?.merchant?.branch?.name;
					new_state.merchant.city = receipt?.merchant?.branch?.address?.city;
					new_state.merchant.streetAddress = receipt?.merchant?.branch?.address?.streetAddress;
					new_state.timestamp = receipt.receiptTimeStamp;
				}
				
				new_state.chart_data.push(data_point);
				new_state.counter++;
				return new_state;
				
			});
		});

	}
	
	componentWillUnmount() {
		const EAN = '300450288080';//this.props.EAN;
		const productsRef = database.ref('products/');
		productsRef.child(EAN+'/receipts/').off();
	}

    render() {
		let params = this.props.navigation.state.params;
        return (
        <View>
        <View style={{ height: 200, flexDirection: 'row' }}>
			<YAxis
              contentInset={{ top: 20, bottom: 20 }}
              data={ this.state.chart_data }
              svg={{
                  fill: 'grey',
                  fontSize: 10,
              }}
              numberOfTicks={ 10 }
              yAccessor={({item,index})=>item.y}
              xAccessor={({item,index})=>item.x}
              formatLabel={ value => `${value/100}` }
            />
            <LineChart
              style={{ flex: 1, marginLeft: 16 }}
              data={ this.state.chart_data }
              svg={{ stroke: 'rgb(134, 65, 244)' }}
              contentInset={{ top: 20, bottom: 20 }}
              yAccessor={({item,index})=>item.y}
              xAccessor={({item,index})=>item.x}
              animate
            >
             <Grid/>
            </LineChart>
            
		</View>
		<ListItem
        leftAvatar={{ source: { uri: params.avatar }, size:'large' }}
        title={params.name}
        subtitle={'BEST DEAL: '+ this.state.merchant.name}
        onPress={()=>this.props.navigation.navigate('SaleInfo', {listParams: params, merchant: this.state.merchant, timestamp: this.state.timestamp})}
      />
        </View>
        )
    }

}

export default withNavigation(PriceChart);
