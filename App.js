/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import moment from 'moment';
import AsyncStorage from '@react-native-community/async-storage';
import TextTicker from 'react-native-text-ticker';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  TouchableOpacity,
  ImageBackground,
  Easing
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
    this.state = {
      count : 0,
      kd: '',
      date:'',
      currentDate: new Date(),
      goingtime : 0,
      hour: 0,
      min: 0,
      sec: 0
    }
  }

  saveCountFunction = () => {
    if(this.state.count) {
      AsyncStorage.setItem(this.state.kd, this.state.count);
    }
  }

  getCountFunction = () => {
    AsyncStorage.getItem(this.state.kd).then(value => this.setState({count: Number(value)}));
  }

  onPress = () => {
    this.setState({
      count: this.state.count+1
    })
    if(this.state.count) {
      AsyncStorage.setItem(this.state.kd, String(this.state.count));
    }
  }

  componentDidMount() {
    
    AsyncStorage.getItem(moment(todays).format('YYYY/MM/DD')).then(value => this.setState({count: Number(value)}));
    var that = this;
    var todays = this.state.currentDate;
    var keydate = moment(todays).format('YYYY/MM/DD');
    var now = moment(todays).format('YYYY / MM / DD');
    var hours = moment(todays).hour();
    var mins = moment(todays).minute();
    var secs = moment(todays).second();
    that.setState({
      kd: keydate,
      date: now,
      hour: hours,
      min: mins,
      sec: secs,
      goingtime: 18*60*60-(hours*60*60 + mins*60 + secs),
    });
  }

  render() {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.wrapper}>
        <View style={styles.topView}>
          <Text style={styles.toptxt}>집에언제가냐</Text>
        </View>
        <View style={styles.headView}>
          <Text style={{fontSize:18, marginBottom:5, color:'#0f4c81'}}>Today is</Text>
          <Text style={{fontSize:24, color: '#FF9701'}}>{this.state.date}</Text>
        </View>
        <View style={styles.countView}>
          
          <Text style={styles.headText}>집에 가기 까지</Text>
          <CountDown
            style={styles.countdown}
            until={this.state.goingtime}
            onFinish={() => alert('야호~ 집에가자!!')}
            onPress={() => alert('집에 가고 싶지..? \n다 알아.. 근데 이거 버튼 아니야...')}
            digitStyle={{backgroundColor:'rgba(0, 0, 0, 0.5)'}}
            digitTxtStyle={{color: '#fff'}}
            timeToShow={['H', 'M', 'S']}
            timeLabels={{m: null, s: null}}
            //timeLabels={{h:'시간', m:'분', s:'초'}}
            separatorStyle={{color:'#FF9701'}}
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
          <Text style={styles.clickedtxt}>Cilcked : { this.state.count !== 0 ? this.state.count: 0} </Text>
        </View>
        <View style={styles.bottomView}>
          <TextTicker
            style={{fontSize: 22, color: '#fff', padding:2}}
            duration={100000}
            scroll={false}
            loop
            bounceSpeed={0}
            easing={Easing.linear}
          >
            아니 이것은~ 바로바로~~ 집에가고싶어 버튼 어플이잖아~?!!~!~~?!?!! 집에 가기 까지 남은 시간을 보여주는 정말 쓸모있지만 그것 빼고는 아무짝에도 쓸모가 없는 어플~
            와 정.말.재.밌.다. 집에가고싶어~ 집에보내줘~ home~ house~ want to go home~
            빠르게 만들어버리느라 하루밖에 못 재고 다음날이 되면 전날 기록도 못 보지만 그래도 오늘 얼마나 눌렀는지는 알수있어! 와! 증말 데단헤!
            그리고 나는 집에 가고 싶다 집에 언제 가냐ㅠㅠㅠ 어플제작 소소한 tmi 어플 테마색상 올해의 컬러 클래식 블루야 내가 제일 좋아하는 2020 올해의 컬러~ 클래식블루 너무너무 예쁜것이다 #0f4c81 이라구~
            빨리 집에 가서 사퍼도하고 파판도하고 싶다 하지만 금요일이 아니면 불가능한것이다... 어쨌든 결론은 집에 가고 싶다는 것이다ㅠ 기-승-전-집에가기
            이거 지금 졸린데다가 의식의 흐름으로 아무말이나 다 쓰느라 엄청 긴데 설마 다 읽고 있는거 아니지? 그리고 이거 무한반복이야~ :D
            이 어플을 나의 귀엽꼬 깜찎한 칭구칭구 예지니에게 바칩니당 Made by. B
          </TextTicker>
        </View>
      </SafeAreaView>
    </>
  );
  };
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#0f4c81'
  },
  topView:{
    height: 54,
    justifyContent: "center",
    alignItems: 'center',
  },
  toptxt:{
    color: '#fff',
    fontSize: 18
  },
  headView: {
    backgroundColor: '#fff',
    justifyContent: "center",
    alignItems: 'center',
    padding:20
  },
  headText: {
    justifyContent: "center",
    color:'#fff',
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 30
  },
  countView:{
    marginTop: 40,
    justifyContent: "center",
    alignItems: 'center',
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
    backgroundColor: '#fff',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:10,
    width:200
  },
  homebtntxt: {
    color:'#0f4c81',
    fontSize: 24,
    fontWeight: "bold"
  },
  clickedView: {
    marginTop: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  clickedtxt: {
    fontSize: 20,
    color: '#fff'
  },
  bottomView: {
    backgroundColor: '#88A4C0',
    marginTop: 45,
    padding: 10
  }
});
