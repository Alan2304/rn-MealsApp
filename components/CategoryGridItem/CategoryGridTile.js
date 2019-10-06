import React from 'react';
import { TouchableOpacity, View, Text, TouchableNativeFeedback, Platform } from 'react-native';
import styles from './styles';


const CategoryGridTile = props => {
    
    let TouchableCmp = TouchableOpacity;
    if (Platform.OS === 'android' && Platform.Version >= 21) {
        TouchableCmp = TouchableNativeFeedback;
    }
    
    return (
        <View style={styles.gridItem}>
        <TouchableCmp style={{flex: 1}} onPress={props.onSelect}>
           <View style={{...styles.container, ...{backgroundColor: props.color}}}>
               <Text style={styles.title} numberOfLines={2}>{props.title}</Text>
           </View>
       </TouchableCmp>
       </View>
    )
}

export default CategoryGridTile;