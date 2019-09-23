import React from 'react';
import { View, Text, Button } from 'react-native';
import styles from './styles';

const CategoryMealsScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>The Category Meals Screen</Text>
            <Button title="Go to Meal Detail" onPress={() => {
                props.navigation.navigate('MealDetail')
            }} />
        </View>
    )
}

export default CategoryMealsScreen;