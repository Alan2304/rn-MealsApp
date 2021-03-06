import React from 'react';
import { View, Text } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useSelector } from 'react-redux';
import styles from './styles';

import MealList from '../../components/MealList/MealList';
import HeaderButton from '../../components/HeaderButton/HeaderButton';
import DefaultText from '../../components/DefaultText/DefaultText';

const FavoritesScreen = props => {
    
    const favMeals = useSelector(state => state.meals.favoriteMeals);

    if (favMeals.length === 0 || !favMeals) {
        return (
            <View style={styles.content}>
                <DefaultText>No favorite meals found. Start adding some!</DefaultText>
            </View>
        )
    }
 
    return (
    <MealList listData={favMeals} navigation={props.navigation} />
 );
}

FavoritesScreen.navigationOptions = (navData) => {
    return {
        headerTitle: 'Your Favorites',
        headerLeft: (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item 
                    title='Menu'
                    iconName='ios-menu' 
                    onPress={() => {
                        navData.navigation.toggleDrawer();
                    }} />
            </HeaderButtons>
        )
    }
}

export default FavoritesScreen;