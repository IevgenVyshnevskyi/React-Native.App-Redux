import React from 'react';
import { Text, TouchableOpacity, Linking } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import TabNavigator from './TabNavigator';
import AboutUsScreen from '../screens/AboutUsScreen';
import ProfileScreen from '../screens/ProfileScreen';
import { styles } from '../theme/styles';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => (
   <Drawer.Navigator 
    screenOptions={({ navigation }) => ({ 
        drawerActiveTintColor: '#2196F3',
        headerLeft: () => (
        <TouchableOpacity 
            onPress={() => navigation.toggleDrawer()} 
            style={styles.burgerButton}
        >
            <Text style={styles.burgerIcon}>☰</Text>
        </TouchableOpacity>
        ),
    })}
    >
    <Drawer.Screen
        name="Home"
        component={TabNavigator}
        options={{ 
        title: 'Головна',
        drawerIcon: ({ color }) => <Text style={{color}}>🏠</Text> 
        }}
    />

    <Drawer.Screen
        name="AboutUs"
        component={AboutUsScreen}
        options={{ 
        title: 'Детально про кафедру',
        drawerIcon: ({ color }) => <Text style={{color}}>ℹ️</Text>
        }}
    />

    <Drawer.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ 
        title: 'Про автора',
        drawerIcon: ({ color }) => <Text style={{color}}>👤</Text>
        }}
    />

    <Drawer.Screen
        name="WebSite"
        component={AboutUsScreen}
        options={{ 
        title: 'Сайт кафедри (Web)',
        drawerIcon: ({ color }) => <Text style={{color}}>🌐</Text>
        }}
        listeners={({ navigation }) => ({
        drawerItemPress: e => {
            e.preventDefault();
            Linking.openURL('https://pzas.chdtu.edu.ua/');
        },
        })}
    />
    </Drawer.Navigator>
);

export default DrawerNavigator;