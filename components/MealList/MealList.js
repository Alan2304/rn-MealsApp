import React from 'react';
import { View, FlatList } from 'react-native';
import { useSelector } from 'react-redux';

import styles from './styles'
import MealItem from '../MealItem/MealItem';
import { State } from 'react-native-gesture-handler';

const MealList = props => {
    const favoriteMeals  = useSelector(state => state.meals.favoriteMeals)

    const renderMealItem = (itemData) => {
        const isFavorite = favoriteMeals.some(meal => meal.id === itemData.item.id);
        return (
            <MealItem 
                title={itemData.item.title}
                image={itemData.item.imageUrl}
                duration={itemData.item.duration}
                complexity={itemData.item.complexity}
                affordability={itemData.item.affordability}
                onSelectMeal={() => {
                    props.navigation.navigate({routeName: 'MealDetail', params: {
                        mealId: itemData.item.id,
                        mealTitle: itemData.item.title,
                        isFav: isFavorite
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