import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AboutUsScreen from '../screens/AboutUsScreen';
import ProfileScreen from '../screens/ProfileScreen';
import NewsScreen from '../screens/NewsScreen';
import { Text } from 'react-native';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,

        tabBarActiveTintColor: '#2196F3',

        tabBarIcon: ({ color, size }) => {
          let icon;

          if (route.name === 'AboutUsTab') icon = '🎓';
          else if (route.name === 'ProfileTab') icon = '👤';
          else if (route.name === 'NewsTab') icon = '📰';

          return <Text style={{ fontSize: size, color }}>{icon}</Text>;
        },
      })}
    >
      <Tab.Screen
        name="AboutUsTab"
        component={AboutUsScreen}
        options={{ title: 'Про кафедру' }}
      />

      <Tab.Screen
        name="NewsTab"
        component={NewsScreen}
        options={{ title: 'Новини' }}
      />

      <Tab.Screen
        name="ProfileTab"
        component={ProfileScreen}
        options={{ title: 'Мій профіль' }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
