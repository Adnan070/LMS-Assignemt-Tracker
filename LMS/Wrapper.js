/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {useState, useEffect} from 'react';

import {View, ActivityIndicator} from 'react-native';

import {
  NavigationContainer,
  DefaultTheme as NavigationDefaultTheme,
  DarkTheme as NavigationDarkTheme,
} from '@react-navigation/native';

import {createDrawerNavigator} from '@react-navigation/drawer';

import {
  Provider as PaperProvider,
  DefaultTheme as PaperDefaultTheme,
  DarkTheme as PaperDarkTheme,
} from 'react-native-paper';

/**
 * Bind Redux with App Component
 */

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import DrawerContent from './app/screens/DrawerContent';

import RootStackScreen from './app/screens/RootStack';

/**
 * All Screens
 */

import {RootHomeStack} from './app/screens';

const Drawer = createDrawerNavigator();

/**
 * App Component
 */

const CustomDefaultTheme = {
  ...NavigationDefaultTheme,
  ...PaperDefaultTheme,
  colors: {
    ...NavigationDefaultTheme.colors,
    ...PaperDefaultTheme.colors,
    background: '#ffffff',
    text: '#333333',
  },
};

const CustomDarkTheme = {
  ...NavigationDarkTheme,
  ...PaperDarkTheme,
  colors: {
    ...NavigationDarkTheme.colors,
    ...PaperDarkTheme.colors,
    background: '#333333',
    text: '#ffffff',
  },
};

const Wrapper = (props) => {
  const [isDarkTheme, setTheme] = useState(false);
  const [auth, setAuth] = useState(false);
  const [loading, setLoading] = useState(false);

  const theme = isDarkTheme ? CustomDarkTheme : CustomDefaultTheme;

  useEffect(() => {
    if (props.authenticated) {
      setAuth(true);
    }
    if (!props.authenticated) {
      setAuth(false);
    }
    if (props.loading) {
      setLoading(true);
    }
    if (!props.loading) {
      setLoading(false);
    }
    if (props.isDarkTheme !== isDarkTheme) {
      setTheme(props.isDarkTheme);
    }
  }, [props]);

  if (loading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <PaperProvider theme={theme}>
      <NavigationContainer theme={theme}>
        {props.authenticated ? (
          <Drawer.Navigator
            initialRouteName="Home"
            drawerContent={(props) => <DrawerContent {...props} />}>
            <Drawer.Screen
              name="Home"
              component={RootHomeStack}
              initialParams={{theme}}
            />
          </Drawer.Navigator>
        ) : (
          <RootStackScreen />
        )}
      </NavigationContainer>
    </PaperProvider>
  );
};

/**
 *
 * @param {Global State} state
 * bind state to the component props
 */
const mapStateToProps = (state) => {
  const {user, UI} = state;
  return {
    authenticated: user.authenticated,
    loading: user.loading,
    isDarkTheme: UI.isDarkTheme,
  };
};
/**
 *
 * Param {Redux Actions} dispatch
 * bind actions to the component props
 */
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Wrapper);
