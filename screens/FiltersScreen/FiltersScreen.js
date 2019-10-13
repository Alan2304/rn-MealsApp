import React, {useState} from 'react';
import { View, Text, Switch, Platform } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import styles from './styles';
import Colors from '../../constants/Colors';

import HeaderButton from '../../components/HeaderButton/HeaderButton';

const FilterSwitch = props => {
    return (
        <View style={styles.filterContainer}>
            <Text>{props.label}</Text>
            <Switch 
                value={props.state} 
                trackColor={{true: Colors.primaryColor}}
                thumbColor={ Platform.OS ==='android' ? Colors.primaryColor : ''}
                onValueChange={props.onChange} />
        </View>
    )
}

const FiltersScreen = props => {

    const [isGlutenFree, setIsGlutenFree] = useState(false);
    const [isLactoseFree, setIsLactoseFree] = useState(false);
    const [isVegan, setIsVegan] = useState(false);
    const [isVegetarian, setIsVegetarian] = useState(false);

    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Available Filters / Restrictions</Text>
            <FilterSwitch 
                label='Gluten Free' 
                state={isGlutenFree} 
                onChange={newValue => setIsGlutenFree(newValue)} />
            <FilterSwitch 
                label='Lactose Free' 
                state={isLactoseFree} 
                onChange={newValue => setIsLactoseFree(newValue)} />
            <FilterSwitch 
                label='Vegan' 
                state={isVegan} 
                onChange={newValue => setIsVegan(newValue)} />
            <FilterSwitch 
                label='Vegetarian' 
                state={isVegetarian} 
                onChange={newValue => setIsVegetarian(newValue)} />
            
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