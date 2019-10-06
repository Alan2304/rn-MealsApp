import React from 'react';
import { View, Text, FlatList, Button, TouchableOpacity } from 'react-native';
import {CATEGORIES} from '../../data/dummy-data';
import styles from './styles';

import CategoryGridTile from '../../components/CategoryGridItem/CategoryGridTile';

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

CategoriesScreen.navigationOptions = {
    headerTitle: 'Meal Categories',
    
}

export default CategoriesScreen;