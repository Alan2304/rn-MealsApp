import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';
import { Platform } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import Colors from '../constants/Colors'

import CategoriesScreen from '../screens/CategoriesScreen/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen/MealDetailScreen';
import FavoritesScreen from '../screens/FavoritesScreen/FavoritesScreen';


const MealsNavigator = createStackNavigator({
    Categories: {
        screen:CategoriesScreen,
        navigationOptions: {
            
        }
    },
    CategoryMeals: {
        screen: CategoryMealsScreen,
        navigationOptions: {
            
        }
    },
    MealDetail: MealDetailScreen
}, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : 'white',
        },
        headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor
    }
});

const tabScreenConfig = {
    Meals: {
        screen: MealsNavigator,
        navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return <Ionicons name='ios-restaurant' size={25} color={tabInfo.tintColor} />
            },
            tabBarColor: Colors.primaryColor
        }
    },
    Favorites: {
        screen: FavoritesScreen,
        navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return <Ionicons name='ios-star' size={25} color={tabInfo.tintColor} />
            },
            tabBarColor: Colors.accentColor
        }
    }
};


const MealsFavTabNavigator = Platform.OS === 'android'  
    ? createMaterialBottomTabNavigator(tabScreenConfig, {
        activeColor: 'white',
        shifting: true,
        barStyle: {
            backgroundColor: Colors.primaryColor
        }
    })
     
    : createBottomTabNavigator(tabScreenConfig, {
        tabBarOptions: {
            activeTintColor: Colors.accentColor
        }
    });

export default createAppContainer(MealsFavTabNavigator);