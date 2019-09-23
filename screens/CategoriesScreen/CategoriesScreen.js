import React from 'react';
import { View, Text, FlatList,Button } from 'react-native';
import {CATEGORIES} from '../../data/dummy-data';
import styles from './styles';

const renderGridItem = (itemData) => {
    return (
        <View style={styles.gridItem}>
            <Text>{itemData.item.title}</Text>
        </View>
    )
}

const CategoriesScreen = props => {
    return (
        <FlatList 
            keyExtractor={(item, index) => item.id}
            data={CATEGORIES} 
            renderItem={renderGridItem} 
            numColumns={2} />
    )
}

export default CategoriesScreen;