import React from 'react';
import { View } from 'react-native';
import { useSelector } from 'react-redux';

import styles from './styles';

import { CATEGORIES } from '../../data/dummy-data';

import MealList from '../../components/MealList/MealList';
import DefaultText from '../../components/DefaultText/DefaultText';

const CategoryMealsScreen = props => {
    const catId = props.navigation.getParam('categoryId');
    // const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);

    const availableMeals = useSelector((state) => state.meals.filteredMeals);

    const displayedMeals =  availableMeals.filter(
        meal => meal.categoryIds.indexOf(catId) >= 0
    );

    if (displayedMeals.length === 0) {
        return (
            <View style={styles.content}>
                <DefaultText>No Meals Found, maybe check your filters?</DefaultText>
            </View>
        )
    }

    return (
        <MealList listData={displayedMeals} navigation={props.navigation} />
    )
}

CategoryMealsScreen.navigationOptions = (navigationData) => {
    const catId = navigationData.navigation.getParam('categoryId');
    const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);

    return {
        headerTitle: selectedCategory.title,
    };
}

export default CategoryMealsScreen;