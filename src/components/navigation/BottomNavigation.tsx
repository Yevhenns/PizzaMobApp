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

const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
  return (
    <>
      <Tab.Navigator
        screenOptions={{
          tabBarShowLabel: false,
          tabBarStyle: {backgroundColor: '#de612b'},
          tabBarActiveTintColor: 'white',
          tabBarInactiveTintColor: 'black',
        }}>
        <Tab.Screen
          options={{
            tabBarIcon: ({color}) => (
              <Home name="news" size={32} color={color} />
            ),
          }}
          name="Новинки"
          component={NewsScreen}
        />

        <Tab.Screen
          options={{
            tabBarIcon: ({color}) => (
              <Heart name="user-o" size={32} color={color} />
            ),
          }}
          name="Увійти"
          component={UnderDevelopmentScreen}
        />

        <Tab.Screen
          options={{
            tabBarIcon: ({color}) => (
              <Heart name="pizza-outline" size={32} color={color} />
            ),
          }}
          name="Категорії"
          component={TopNavigation}
        />

        <Tab.Screen
          options={{
            tabBarIcon: ({color}) => (
              <Heart name="hearto" size={32} color={color} />
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
