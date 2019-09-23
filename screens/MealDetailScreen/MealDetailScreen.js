import React from 'react';
import { View, Text, Button } from 'react-native';
import styles from './styles';

const MealDetailScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>The Categories Screen</Text>
            <Button title="Go Back to Categories" onPress={() => {
                props.navigation.popToTop();
            }} />
        </View>
    )
}

export default MealDetailScreen;