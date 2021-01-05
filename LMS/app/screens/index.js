import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

/**
 * All Auth Screens
 */

import HomeScreen from './Home';

/**
 * All Screen Stacks
 */

const HomeStack = createStackNavigator();

/**
 * Custom Stack
 */

const CustomStack = ({
  Stack,
  component,
  screenOptions,
  title,
  name,
  theme,
  navigation,
}) => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen
        name={name}
        component={component}
        options={{
          title,
        }}
        initialParams={{theme}}
      />
    </Stack.Navigator>
  );
};

export const RootHomeStack = ({navigation, route}) => {
  const {theme} = route.params;
  return (
    <CustomStack
      Stack={HomeStack}
      component={HomeScreen}
      title="Home Screen"
      name="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#009387',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
          textAlign: 'center',
        },
      }}
      navigation={navigation}
      theme={theme}
    />
  );
};
