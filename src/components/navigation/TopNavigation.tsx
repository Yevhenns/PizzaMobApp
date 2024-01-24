import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {PizzasScreen} from '../../screens/PizzasScreen';
import {AppetizersScreen} from '../../screens/AppetizersScreen';
import {DrinksScreen} from '../../screens/DrinksScreen';

const TopTab = createMaterialTopTabNavigator();

const TopNavigation = () => {
  return (
    <TopTab.Navigator>
      <TopTab.Screen name="Піца" component={PizzasScreen} />
      <TopTab.Screen name="Напої" component={DrinksScreen} />
      <TopTab.Screen name="Закуски" component={AppetizersScreen} />
    </TopTab.Navigator>
  );
};
export default TopNavigation;
