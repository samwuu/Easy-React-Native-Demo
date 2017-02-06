/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import{ AppRegistry, ScrollView, Image, Text, View } from 'react-native'


//Greeting组件
class Greeting extends Component {
    render() {

        return (
            <Text>Hello {this.props.name}!</Text>
        );
    }
}

class LotsOfGreetings extends Component {
    render() {
        let pic = {
            uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
        };
        return (
            <View style={{alignItems: 'center'}}>
                <Greeting name='Rexxar' />
                <Greeting name='Jaina' />
                <Greeting name='Valeera' />
                <Image source={pic} style={{width: 300, height: 200}} />
            </View>
        );
    }
}



class Blink extends Component {

    constructor(props) {
        super(props);
        this.state = { showText: true};

        //()=>{}匿名执行函数
        // 每1000毫秒对showText状态做一次取反操作

        // setInterval(()=>{ this.setState({showText: !this.state.showText})},1000);
    }

    render() {
        let displayContent = this.state.showText ? this.props.text : " ";
        return (
            <Text style = {{fontSize: 40 ,textAlign: 'center'}} >{displayContent}</Text>
        );
    }
}
class AlignItemsBasics extends Component {
    render() {
        return (
            // 尝试把`alignItems`改为`flex-start`看看
            // 尝试把`justifyContent`改为`flex-end`看看
            // 尝试把`flexDirection`改为`row`看看
            <View style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'space-between',
                alignItems: 'center',
            }}>
                <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
                <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
                <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}}/>
                <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}}/>
                <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}}/>
                <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}}/>
                <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}}/>
                <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}}/>

            </View>
        );
    }
};
class IScrolledDownAndWhatHappenedNextShockedMe extends Component {
    render() {
        return(
            <ScrollView>
                <Text style={{fontSize:96}}>Scroll me plz</Text>

                <Text style={{fontSize:96}}>Framework around?</Text>
                <Image source={require('./img/favicon.png')} />
                <Image source={require('./img/favicon.png')} />
                <Image source={require('./img/favicon.png')} />
                <Image source={require('./img/favicon.png')} />
                <Image source={require('./img/favicon.png')} />
                <Text style={{fontSize:80}}>React Native</Text>
            </ScrollView>
        );
    }
}


export default class AwesomeProject extends Component {
  render() {


    return (
        //默认是:column、row是元素横排

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 40,
    textAlign: 'center',
    margin: 10,
    color: "#262626",
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

// AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
AppRegistry.registerComponent(
    'IScrolledDownAndWhatHappenedNextShockedMe',
    () => IScrolledDownAndWhatHappenedNextShockedMe);