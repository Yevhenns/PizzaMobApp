import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TopNavigation from './TopNavigation';
import Toast from 'react-native-toast-message';
import {CartScreen} from '../../screens/CartScreen';
import {FavoriteScreen} from '../../screens/FavoriteScreen';
import {UnderDevelopmentScreen} from '../../screens/UnderDevelopmentScreen';
import {NewsScreen} from '../../screens/NewsScreen';
import {Home} from '../icons/Home';
import {Basket} from '../icons/Basket';
import {Heart} from '../icons/Heart';
import {Menu} from '../icons/Menu';

const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
  return (
    <>
      <Tab.Navigator

        screenOptions={{
          tabBarShowLabel: false,
          tabBarStyle: {backgroundColor: '#de612b'},
          activeTintColor: 'tomato',
          tabBarActiveTintColor: '#de612b',
          tabBarInactiveTintColor: '#de612b',
          color: 'red'
        }}>
        <Tab.Screen
          options={{
            tabBarIcon: ({color, size}) => (
              <Home name="news" size={size} color={color} />
            ),
          }}
          name="Новинки"
          component={NewsScreen}
        />

        <Tab.Screen
          options={{
            tabBarIcon: ({color, size}) => (
              <Menu name="pizza-outline" size={size} color={color} />
            ),
          }}
          name="Категорії"
          component={TopNavigation}
        />

        <Tab.Screen
          options={{
            tabBarIcon: ({color}) => (
              <Heart name="heart" size={32} color={color} />
            ),
          }}
          name="Улюблене"
          component={FavoriteScreen}
        />

        <Tab.Screen
          options={{
            tabBarIcon: ({color}) => (
              <Basket name="basket-outline" size={32} color={color} />
            ),
          }}
          name="Кошик"
          component={CartScreen}
        />
      </Tab.Navigator>
      <Toast />
    </>
  );
};

export default BottomNavigation;
