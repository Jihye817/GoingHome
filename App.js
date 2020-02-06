/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
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

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.wrapper}>
        <View style={styles.headView}>
          <Text style={styles.headText}>집에 가기 까지</Text>
        </View>
        <View style={styles.countView}>
          <CountDown
            style={styles.countdown}
            until={10}
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
          <TouchableOpacity style={styles.homebtn} /*onPress={() => alert('나도~')}*/>
            <Text style={styles.homebtntxt}>집에가구싶당</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.clickedView}>
          <Text>Cilcked : </Text>
        </View>
      </SafeAreaView>
    </>
  );
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

export default App;
