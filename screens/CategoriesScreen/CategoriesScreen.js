import React from 'react';
import { View, Text, FlatList, Button, TouchableOpacity, Platform } from 'react-native';
import {CATEGORIES} from '../../data/dummy-data';
import styles from './styles';
import Colors from '../../constants/Colors';

const CategoriesScreen = props => {
    
    const renderGridItem = (itemData) => {
        return (
            <TouchableOpacity style={styles.gridItem} onPress={() => {
                 props.navigation.navigate({
                    routeName: 'CategoryMeals', 
                    params: {
                        categoryId: itemData.item.id
                    } 
                })
            }}>
                <View>
                    <Text>{itemData.item.title}</Text>
                </View>
            </TouchableOpacity>
        )
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
    headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : 'white',
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor
}

export default CategoriesScreen;