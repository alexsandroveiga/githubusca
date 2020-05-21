import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Header from '../components/Header';

import Search from '../pages/Search';
import Main from '../pages/Main';
import User from '../pages/User';
import Repository from '../pages/Repository';

const App = createStackNavigator();

const Routes: React.FC = () => {
  return (
    <App.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <App.Screen name="Main" component={Main} />
      <App.Screen name="Search" component={Search} />
      <App.Screen
        name="User"
        component={User}
        options={{
          headerShown: true,
          header: (props) => <Header {...props} />,
        }}
      />
      <App.Screen
        name="Repository"
        component={Repository}
        options={{
          headerShown: true,
          header: (props) => <Header {...props} />,
        }}
      />
    </App.Navigator>
  );
};

export default Routes;
