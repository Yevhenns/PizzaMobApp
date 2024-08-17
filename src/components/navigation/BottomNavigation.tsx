import Toast from 'react-native-toast-message';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { CartScreen } from '../../screens/CartScreen';
import { FavoriteScreen } from '../../screens/FavoriteScreen';
import { NewsScreen } from '../../screens/NewsScreen';
import { Basket } from '../icons/Basket';
import { Heart } from '../icons/Heart';
import { Home } from '../icons/Home';
import { Menu } from '../icons/Menu';
import TopNavigation from './TopNavigation';

const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
  return (
    <>
      <Tab.Navigator
        screenOptions={{
          tabBarShowLabel: false,
          tabBarStyle: { backgroundColor: '#de612b' },
          tabBarActiveTintColor: 'white',
          tabBarInactiveTintColor: 'black',
        }}>
        <Tab.Screen
          options={{
            tabBarIcon: ({ color }) => <Home color={color} />,
          }}
          name="Новинки"
          component={NewsScreen}
        />

        <Tab.Screen
          options={{
            tabBarIcon: ({ color }) => <Menu color={color} />,
          }}
          name="Категорії"
          component={TopNavigation}
        />

        <Tab.Screen
          options={{
            tabBarIcon: ({ color }) => <Heart color={color} />,
          }}
          name="Улюблене"
          component={FavoriteScreen}
        />

        <Tab.Screen
          options={{
            tabBarIcon: ({ color }) => <Basket color={color} />,
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
