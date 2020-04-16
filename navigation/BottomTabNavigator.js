import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import Profile from '../screens/Profile';
import TutorList from '../screens/TutorList';
import PublicProfile from '../screens/PublicProfile';
import Filters from '../screens/Filters';
import SignUp from '../screens/SignUp';
import Login from '../screens/Login';
import EditProfile from '../screens/EditProfile';
import StartScreen from '../screens/StartScreen';

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'StartScreen';

export default function BottomTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  navigation.setOptions({ headerTitle: getHeaderTitle(route) });

  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Home',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-code-working" />,
        }}
      />
       <BottomTab.Screen
        name="Tutors"
        component={TutorList}
        options={{
          title: 'Tutors',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-code-working" />,
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={Profile}
        options={{
          title: 'Profile',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-book" />,
        }}
      />
      <BottomTab.Screen
        name="Public Profile"
        component={PublicProfile}
        options={{
          title: 'PublicProfile',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-book" />,
        }}
      />
      <BottomTab.Screen
        name="Filters"
        component={Filters}
        options={{
          title: 'Filters',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-book" />,
        }}
      />
      <BottomTab.Screen
        name="SignUp"
        component={SignUp}
        options={{
          title: 'SignUp',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-book" />,
        }}
      />
      <BottomTab.Screen
        name="Login"
        component={Login}
        options={{
          title: 'Login',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-book" />,
        }}
      />
      <BottomTab.Screen
        name="EditProfile"
        component={EditProfile}
        options={{
          title: 'EditProfile',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-book" />,
        }}
      />
      <BottomTab.Screen
        name="StartScreen"
        component={StartScreen}
        options={{
          title: 'StartScreen',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-book" />,
        }}
      />
    </BottomTab.Navigator>
  );
}

function getHeaderTitle(route) {
  const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case 'Home':
      return 'Header to be added';
    case 'Profile':
      return 'Header to be added';
    case 'Tutors':
      return 'Header to be added';
    case 'Public Profile':
      return 'Header to be added';
    case 'Filters':
      return 'Save filters';
    case 'EditProfile':
      return 'Save';
  }
}
