import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import Register from './Pages/Register';
import RegisterRent from './Pages/RegisterRent';
import RegisterCosts from './Pages/RegisterCosts';
import RegisterGoals from './Pages/RegisterGoals';
import Login from './Pages/Login';
import Home from './Pages/Home';
import Profile from './Pages/Profile';
import Goal from './Pages/Goal';
import Sector from './Pages/Sector';


const AppStack = createStackNavigator();

export default function Routes() {
     return(
          <NavigationContainer>
               <AppStack.Navigator initialRouteName="RegisterCosts" defaultNavigationOptions={{gesturesEnabled: false}} screenOptions={{
                    headerStyle: {
                         elevation: 0,
                         backgroundColor: 'transparent'
                    },
                    headerTransparent: {
                         position: 'absolute',
                    },
                    title: '',
               }} >
                    <AppStack.Screen name="Register" component={Register} />
                    <AppStack.Screen name="RegisterRent" component={RegisterRent} />
                    <AppStack.Screen name="RegisterCosts" component={RegisterCosts} />
                    <AppStack.Screen name="RegisterGoals" component={RegisterGoals} />
                    <AppStack.Screen name="Login" component={Login} options={{ headerShown: false }} />
                    <AppStack.Screen name="Home" component={Home} options={{ headerShown: false }} />
                    <AppStack.Screen name="Profile" component={Profile} />
                    <AppStack.Screen name="Goal" component={Goal} />
                    <AppStack.Screen name="Sector" component={Sector} />
               </AppStack.Navigator>
          </NavigationContainer>
     )
}