import React from 'react';
import { View, Text, Button } from 'react-native';
import styles from './styles';

import { CATEGORIES } from '../../data/dummy-data';

const CategoryMealsScreen = props => {
    const catId = props.navigation.getParam('categoryId');
    const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);
    return (
        <View style={styles.screen}>
            <Text>The Category Meals Screen</Text>
            <Text>{selectedCategory.title}</Text>
            <Button title="Go to Meal Detail" onPress={() => {
                props.navigation.navigate('MealDetail')
            }} />
        </View>
    )
}

export default CategoryMealsScreen;