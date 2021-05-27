import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import Spacer from './Spacer';

const NavLink = ({ navigation, text, routeName }) => {
    return (
        <View>
            <TouchableOpacity onPress={() => navigation.navigate({routeName})}>
                <Spacer>
                    <Text style={styles.link}>{text}</Text>
                </Spacer>
            </TouchableOpacity>
        </View>
    );
};

export default withNavigation(NavLink);

const styles = StyleSheet.create({
    link: {
        color: 'blue',
      },
});
