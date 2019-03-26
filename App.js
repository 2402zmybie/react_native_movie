

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image} from 'react-native';

import TabNavigator from 'react-native-tab-navigator';

import Home from './tab/home/Home'
import Movie from './tab/movie/Movie'
import ShopCart from './tab/shopcart/ShopCart'
import Mine from './tab/mine/Mine'


export default class App extends Component<Props> {

  constructor(props) {
    super(props);
    this.state = {
      selectedTab:'home'
    }
  }

  render() {
    return (
        <View style={styles.container}>
          <TabNavigator tabBarStyle={{height:60}}>
            <TabNavigator.Item
                selected={this.state.selectedTab === 'home'}
                title="首页"
                renderIcon={() => <Image style={{height:33}} source={require('./assets/ic_message1.png')}/>}
                renderSelectedIcon={() => <Image style={{height:33}} source={require('./assets/ic_message2.png')} />}
                onPress={() => this.setState({ selectedTab: 'home' })}>
              <Home/>
            </TabNavigator.Item>
            <TabNavigator.Item
                selected={this.state.selectedTab === 'movie'}
                title="电影"
                renderIcon={() => <Image style={{height:33}} source={require('./assets/ic_work1.png')} />}
                renderSelectedIcon={() => <Image style={{height:33}} source={require('./assets/ic_work2.png')} />}
                onPress={() => this.setState({ selectedTab: 'movie' })}>
              <Movie/>
            </TabNavigator.Item>
            <TabNavigator.Item
                selected={this.state.selectedTab === 'shopcart'}
                title="购物车"
                renderIcon={() => <Image source={require('./assets/ic_message1.png')} />}
                renderSelectedIcon={() => <Image source={require('./assets/ic_message2.png')} />}
                onPress={() => this.setState({ selectedTab: 'shopcart' })}>
              <ShopCart/>
            </TabNavigator.Item>
            <TabNavigator.Item
                selected={this.state.selectedTab === 'mine'}
                title="我的"
                renderIcon={() => <Image source={require('./assets/ic_mine1.png')} />}
                renderSelectedIcon={() => <Image source={require('./assets/ic_mine2.png')} />}
                onPress={() => this.setState({ selectedTab: 'mine' })}>
              <Mine/>
            </TabNavigator.Item>
          </TabNavigator>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
