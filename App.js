/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  TouchableOpacity,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import CountDown from 'react-native-countdown-component';


export default class App extends Component {
//const App: () => React$Node = () => {

  constructor(props) {
    super(props);
    this.state = {count : 0, date:''}
  }

  onPress = () => {
    this.setState({
      count: this.state.count+1
    })
  }

  componentDidMount() {
    var that = this;
    var date = new Date().getDate(); //Current Date
    var month = new Date().getMonth() + 1; //Current Month
    var year = new Date().getFullYear(); //Current Year
    var hours = new Date().getHours(); //Current Hours
    var min = new Date().getMinutes(); //Current Minutes
    var sec = new Date().getSeconds(); //Current Seconds
    that.setState({
      //Setting the value of the date time
      date:
        date + '/' + month + '/' + year + ' ' + hours + ':' + min + ':' + sec,
    });
  }

  render() {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.wrapper}>
        <View style={styles.headView}>
          <Text style={{fontSize:20, color: 'red'}}>{this.state.date}</Text>
          <Text style={styles.headText}>집에 가기 까지</Text>
        </View>
        <View style={styles.countView}>
          <CountDown
            style={styles.countdown}
            until={1000}
            onFinish={() => alert('야호~ 집에가자!!')}
            onPress={() => alert('집에 가고 싶지..? \n다 알아.. 근데 이거 버튼 아니야...')}
            digitStyle={{backgroundColor:'rgba(0, 0, 0, 0.5)'}}
            digitTxtStyle={{color: '#fff'}}
            timeToShow={['H', 'M', 'S']}
            timeLabels={{m: null, s: null}}
            //timeLabels={{h:'시간', m:'분', s:'초'}}
            separatorStyle={{color:'#fff'}}
            showSeparator
            size={35}
          />
        </View>
        <View style={styles.buttonView}>
          <TouchableOpacity style={styles.homebtn} onPress={this.onPress}>
            <Text style={styles.homebtntxt}>집에가구싶당</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.clickedView}>
          <Text>Cilcked : { this.state.count !== 0 ? this.state.count: 0} </Text>
        </View>
      </SafeAreaView>
    </>
  );
  };
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#dea'
  },
  headView: {
    marginTop: 50,
    backgroundColor: '#bae',
    justifyContent: "center",
    alignItems: 'center',
  },
  headText: {
    justifyContent: "center",
    color:'#fff',
    fontSize: 30
  },
  countView:{
    marginTop:50,
  },
  countdown: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonView: {
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  homebtn: {
    backgroundColor: 'blue',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:10,
    width:200
  },
  homebtntxt: {
    color:'#fff',
    fontSize: 20,
  },
  clickedView: {
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
