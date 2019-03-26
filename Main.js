import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import {Router, Stack,Scene} from "react-native-router-flux";
//导入首页
import App from './App'
//导入电影列表页
import MovieList from './component/movie/MovieList'
//导入电影详情页
import MovieDetail from './component/movie/MoiveDetail'



//在Main中实现路由的跳转
export default class Main extends Component<Props> {
    render() {
        return (
            <Router>
                <Stack key="root">
                    {/*排列第一的就是首页的位置*/}
                    <Scene key="app" component={App} title="app页面" hideNavBar={true}/>

                    <Scene key="movielist" component={MovieList} title={"电影列表"} />

                    <Scene key={"movieDetail"} component={MovieDetail} title={"电影详情"}/>
                </Stack>
            </Router>
        )
    }
}
