/* eslint-disable react/no-unstable-nested-components */
import {Platform} from 'react-native';
import React, {Component} from 'react';
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import {UserIcon as UserIconOutlined} from 'react-native-heroicons/outline';
import {UserIcon as UserIconSolid} from 'react-native-heroicons/solid';
import {HomeIcon as HomeIconOutlined} from 'react-native-heroicons/outline';
import {HomeIcon as HomeIconSolid} from 'react-native-heroicons/solid';
import {ChartBarIcon as ChartBarIconOutlined} from 'react-native-heroicons/outline';
import {ChartBarIcon as ChartBarIconSolid} from 'react-native-heroicons/solid';
import Crypto from '../screens/Crypto';
const Tab = createBottomTabNavigator();
export default class BottomNavigation extends Component {
  size = 30;
  screenOptions: BottomTabNavigationOptions = {
    tabBarShowLabel: false,
    tabBarHideOnKeyboard: true,
    headerShown: false,
    tabBarStyle: {
      elevation: 0,
      height: Platform.OS === 'ios' ? 80 : 60,
      position: 'absolute',
      bottom: 0,
    },
  };
  render(): React.ReactNode {
    return (
      <Tab.Navigator screenOptions={this.screenOptions}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({focused}) =>
              focused ? (
                <HomeIconSolid color={'black'} size={this.size} />
              ) : (
                <HomeIconOutlined color={'grey'} size={this.size} />
              ),
          }}
        />
        <Tab.Screen
          name="Crypto"
          component={Crypto}
          options={{
            tabBarIcon: ({focused}) =>
              focused ? (
                <ChartBarIconSolid color={'black'} size={this.size} />
              ) : (
                <ChartBarIconOutlined color={'grey'} size={this.size} />
              ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarIcon: ({focused}) =>
              focused ? (
                <UserIconSolid color={'black'} size={this.size} />
              ) : (
                <UserIconOutlined color={'grey'} size={this.size} />
              ),
          }}
        />
      </Tab.Navigator>
    );
  }
}
