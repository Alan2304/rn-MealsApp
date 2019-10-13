import React from 'react';
import { View, Text } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import styles from './styles';

import HeaderButton from '../../components/HeaderButton/HeaderButton';

const FiltersScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>The Filters Screen</Text>
        </View>
    )
}

FiltersScreen.navigationOptions = (navData) => {
    return {
        headerTitle: 'Filter Meals',
        headerLeft: (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item 
                    title='Menu'
                    iconName='ios-menu' 
                    onPress={() => {
                        navData.navigation.toggleDrawer();
                    }} />
            </HeaderButtons>
        )
    }
}

export default FiltersScreen;