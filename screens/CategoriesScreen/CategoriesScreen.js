import React from 'react';
import { View, Text, FlatList, Button, TouchableOpacity } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import {CATEGORIES} from '../../data/dummy-data';
import styles from './styles';

import CategoryGridTile from '../../components/CategoryGridItem/CategoryGridTile';
import HeaderButton from '../../components/HeaderButton/HeaderButton';

const CategoriesScreen = props => {
    
    const renderGridItem = (itemData) => {
        return (
            <CategoryGridTile 
                title={itemData.item.title}
                color={itemData.item.color}
                onSelect={() => {
                    props.navigation.navigate({
                        routeName: 'CategoryMeals', 
                        params: {
                            categoryId: itemData.item.id
                        } 
                    })
            }} />
        );
    }
    
    return (
        <FlatList 
            keyExtractor={(item, index) => item.id}
            data={CATEGORIES} 
            renderItem={renderGridItem} 
            numColumns={2} />
    )
}

CategoriesScreen.navigationOptions = (navData) =>  {
    return {
        headerTitle: 'Meal Categories',
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

export default CategoriesScreen;