// Navigation.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import Dashboard from '../pages/Dashboard'; // Import the Dashboard component
import InsideBball from '../components/basketball/InsideBball';
import InsideVball from '../components/volleyball/InsideVball';
import InsideBilliard from '../components/billiard/InsideBilliard';
import InsideExercise from '../components/exercise/InsideExercise';
import InsideBadminton from '../components/badminton/InsideBadminton';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="Register" component={RegisterPage} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="InsideBball" component={InsideBball} />
        <Stack.Screen name="InsideVball" component={InsideVball} />
        <Stack.Screen name="InsideBilliard" component={InsideBilliard} />
        <Stack.Screen name="InsideExercise" component={InsideExercise} />
        <Stack.Screen name="InsideBadminton" component={InsideBadminton} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
