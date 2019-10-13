import React from 'react';
import {  View, FlatList } from 'react-native';

import styles from './styles'
import MealItem from '../MealItem/MealItem';

const MealList = props => {
    
    const renderMealItem = (itemData) => {
        return (
            <MealItem 
                title={itemData.item.title}
                image={itemData.item.imageUrl}
                duration={itemData.item.duration}
                complexity={itemData.item.complexity}
                affordability={itemData.item.affordability}
                onSelectMeal={() => {
                    props.navigation.navigate({routeName: 'MealDetail', params: {
                        mealId: itemData.item.id
                    }})
                }}  />
        )
    }
    
    return (
        <View style={styles.list}>
            <FlatList 
                data={props.listData} 
                keyExtractor={(item, index) => item.id}
                renderItem={renderMealItem}
                style={{width: '100%'}}/>
        </View>
    )
}

export default MealList;