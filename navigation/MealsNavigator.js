import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import { Text, Platform } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import Colors from '../constants/Colors'

import CategoriesScreen from '../screens/CategoriesScreen/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen/MealDetailScreen';
import FavoritesScreen from '../screens/FavoritesScreen/FavoritesScreen';
import FiltersScreen from '../screens/FiltersScreen/FiltersScreen';

const defaultStackNavOptions = {
    headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : 'white',
    },
    headerTitlestyle: {
        fontFamily: 'open-sans-bold'
    },
    headerBackTitleStyle: {
        fontFamily: 'open-sans'
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor
}

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
    defaultNavigationOptions: defaultStackNavOptions
});

const FavNavigator = createStackNavigator({
    Favorites: FavoritesScreen,
    MealDetail: MealDetailScreen
}, {
    defaultNavigationOptions: defaultStackNavOptions
})

const FiltersNavigator = createStackNavigator({
    Filters: FiltersScreen
}, {
    // navigationOptions: {
    //     drawerLabel: 'Filters'
    // },
    defaultNavigationOptions: defaultStackNavOptions
});

const tabScreenConfig = {
    Meals: {
        screen: MealsNavigator,
        navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return <Ionicons name='ios-restaurant' size={25} color={tabInfo.tintColor} />
            },
            tabBarColor: Colors.primaryColor,
            tabBarLabel: Platform.OS === 'android' ? <Text style={{fontFamily: 'open-sans'}}>Meals</Text> : 'Meals'
        }
    },
    Favorites: {
        screen: FavNavigator,
        navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return <Ionicons name='ios-star' size={25} color={tabInfo.tintColor} />
            },
            tabBarColor: Colors.accentColor,
            tabBarLabel: Platform.OS === 'android' ? <Text style={{fontFamily: 'open-sans'}}>Favorites</Text> : 'Favorites'
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
            labelStyle: {
                fontFamily: 'open-sans-bold'
            },
            activeTintColor: Colors.accentColor
        }
    });

    const MainNavigator = createDrawerNavigator({
        MealsFav: {
            screen: MealsFavTabNavigator,
            navigationOptions: {
                drawerLabel: 'Meals'
            }
        },
        Filters: FiltersNavigator
    }, {
        contentOptions: {
            activeTintColor: Colors.accentColor,
            labelStyle: {
                fontFamily: 'open-sans-bold'
            }
        }
    });

export default createAppContainer(MainNavigator);