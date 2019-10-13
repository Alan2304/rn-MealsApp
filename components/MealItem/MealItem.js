import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground } from 'react-native';
import styles from './style';
import DefaultText from '../DefaultText/DefaultText';

const MealItem = props => {
    return (
        <View style={styles.mealItem}>
            <TouchableOpacity onPress={props.onSelectMeal}>
                <View>
                    <View style={{...styles.mealRow, ...styles.mealHeader}}>
                        <ImageBackground 
                            source={{uri: props.image}} 
                            style={styles.bgImage} >
                            <View style={styles.titleContainer}>
                                <Text style={styles.title} numberOfLines={1}>
                                    {props.title}
                                </Text>
                            </View>
                        </ImageBackground>
                    </View>

                    <View style={{...styles.mealRow, ...styles.mealDetail}}>
                        <DefaultText>{props.duration}m</DefaultText>
                        <DefaultText>{props.complexity.toUpperCase()}</DefaultText>
                        <DefaultText>{props.affordability.toUpperCase()}</DefaultText>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    );
}

export default MealItem;