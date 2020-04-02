import React, {Component} from 'react';
import {Platform, StyleSheet, View, Button,TouchableOpacity,Text,PermissionsAndroid,} from 'react-native';
import RNFS from 'react-native-fs'; 
export default class App extends Component {
	static navigationOptions = {
    header: null,
  };
 constructor (properties) {
    super(properties) 
 this.state={
	yscore:this.props.navigation.state.params.score,
	congrat:'',
 }
  }

componentDidMount(){
  };
  render() {
    return (
      <View style={{flex: 1,backgroundColor: '#f5f5f5'}}>
	  <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
	  <Text style={{fontWeight:'bold',color:'#000000',fontSize:40}}> Congratulations </Text>
	  <View style={{flexDirection:'row'}}>
	  <Text style={{fontWeight:'bold',color:'#000000',fontSize:40}}> Your Score is </Text>
	  <Text style={{fontWeight:'bold',color:'#000000',fontSize:40}}>{this.state.yscore}</Text>
	  </View>
	  </View>
	  <View style={{alignItems:'stretch',justifyContent:'center',marginBottom:8}}>
	  <Button
	  onPress = {()=>{
	  this.props.navigation.goBack();this.props.navigation.state.params.onSelect({score:0});}}
   	  title ='Play Again'
	  color ='#4169e1'
	  />
	  </View>
	  </View>
    );
  }
}