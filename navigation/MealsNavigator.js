import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import CategoriesScreen from '../screens/CategoriesScreen/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen/MealDetailScreen';


const MealsNavigator = createStackNavigator({
    Categories: CategoriesScreen,
    CategoryMeals: {
        screen: CategoryMealsScreen
    },
    MealDetail: MealDetailScreen
});

export default createAppContainer(MealsNavigator);