import React, {Component} from 'react';
import {Platform, StyleSheet, View, Button,TouchableOpacity,Text} from 'react-native'; 
import { Timer } from 'react-native-stopwatch-timer';
export default class App extends Component {
	static navigationOptions = {
    header: null,
  };
 constructor (properties) {
    super(properties) 
  this.state={
	bc1:'green',
	bc2:'yellow',
	bc3:'violet',
	bc4:'blue',
	bc5:'black',
	bc6:'red',
	bc7:'orange',
	bc8:'indigo',
    textColor:'blue',
	textValue:'green',
	score:0,
	isTimerStart: true,
	timerDuration: 180000,
      resetTimer: false,
	  mode:this.props.navigation.state.params.mode
  }
  }

componentDidMount(){
	this.shuffle();
	this.interval2 =setInterval(() => {this.shuffle();},this.state.mode);
  };
  componentWillUnmount() {
  clearInterval(this.interval1);
}
shuffle(){
    let arr=['green', 'yellow', 'violet','blue','indigo','red','orange','black'],i,j,temp;	
    for (i = arr.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
this.setState({bc1:arr[0],bc2:arr[1],bc3:arr[2],bc4:arr[3],bc5:arr[4],bc6:arr[5],bc7:arr[6],bc8:arr[7],textColor:arr[Math.floor(Math.random() * arr.length)],textValue:arr[Math.floor(Math.random() * arr.length)]});
};
 onSelect = data => {
    this.setState(data);
  };
  changeColor(currentcolor){
    let arr=['green', 'yellow', 'violet','blue','indigo','red','orange','black'],i,j,temp;
	if(this.state.textColor===currentcolor)
	{	
    for (i = arr.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
this.setState({bc1:arr[0],bc2:arr[1],bc3:arr[2],bc4:arr[3],bc5:arr[4],bc6:arr[5],bc7:arr[6],bc8:arr[7],textColor:arr[Math.floor(Math.random() * arr.length)],textValue:arr[Math.floor(Math.random() * arr.length)],score:this.state.score+1});
 }
 else{
	  this.props.navigation.navigate('Result',{score:this.state.score,onSelect:this.onSelect}); 
  }
  };
  render() {
    return (
      <View style={styles.container}>
	  <View style={styles.header}>
	  <Timer 
            totalDuration={this.state.timerDuration} msecs 
            //Time Duration
            start={this.state.isTimerStart}
            //To start
            reset={this.state.resetTimer}
            //To reset
            options={options}
            //options for the styling
            handleFinish={()=>{this.props.navigation.navigate('Result',{score:this.state.score,onSelect:this.onSelect});}}
            //can call a function On finish of the time 
            getTime={this.getFormattedTime} />
	  </View>
	  <View style={styles.body}>
  <Text style={{fontStyle:'italic',fontWeight:'bold',color:this.state.textColor,fontSize:60}}>{this.state.textValue}</Text>
	  </View>
	  <View style={styles.footer}>
	  <View style={styles.Align}>
          <TouchableOpacity style={[{backgroundColor:this.state.bc1},styles.button]}onPress={()=>this.changeColor(this.state.bc1)}>
		  </TouchableOpacity>
          <TouchableOpacity style={[{backgroundColor:this.state.bc2},styles.button]}onPress={()=>this.changeColor(this.state.bc2)}>   		  
          </TouchableOpacity>
      </View>
	  <View style={styles.Align}>
          <TouchableOpacity style={[{backgroundColor:this.state.bc3},styles.button]}onPress={()=>this.changeColor(this.state.bc3)}>
		  </TouchableOpacity>
          <TouchableOpacity style={[{backgroundColor:this.state.bc4},styles.button]}onPress={()=>this.changeColor(this.state.bc4)}>   		  
          </TouchableOpacity>
      </View>
	  <View style={styles.Align}>
          <TouchableOpacity style={[{backgroundColor:this.state.bc5},styles.button]}onPress={()=>this.changeColor(this.state.bc5)}>
		  </TouchableOpacity>
          <TouchableOpacity style={[{backgroundColor:this.state.bc6},styles.button]}onPress={()=>this.changeColor(this.state.bc6)}>   		  
          </TouchableOpacity>
      </View>
	  <View style={styles.Align}>
          <TouchableOpacity style={[{backgroundColor:this.state.bc7},styles.button]}onPress={()=>this.changeColor(this.state.bc7)}>
		  </TouchableOpacity>
          <TouchableOpacity style={[{backgroundColor:this.state.bc8},styles.button]}onPress={()=>this.changeColor(this.state.bc8)}>   		  
          </TouchableOpacity>
      </View>
	  </View>
	  </View>
    );
  }
}

const options = {
    header1: {
    backgroundColor: '#f5f5f5',
    padding: 5,
    borderRadius: 5,
    width: 200,
    alignItems:'center',
  },
  text: {
    fontSize: 25,
    color: '#000000',
    marginLeft: 7,
  }
  };
const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
	justifyContent:'space-between'
  }, 
  header:{
	  height:80,
	  alignItems:'center',
	  justifyContent:'center',
  },
  body:
  {
  alignItems:'center',
  justifyContent:'center',
  },
  button:
  {
	  width:180,
	  height:50,
	  padding: 10,
	  borderRadius:10,
	  elevation:2,
	  margin:5
	  
  },
  footer:
  {  
	  alignItems:'center',
	  justifyContent:'center',
	  marginBottom:10,
  },
  Align:{
	  flexDirection:'row',
	  alignItems:'center',
	  justifyContent:'space-evenly',
  }
});