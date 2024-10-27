// Dashboard.js
import React from 'react';
import { View, Text } from 'react-native';
import { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import Header from '../components/header/Header';
import DashboardContent from '../components/dashboard/DashboardContent';
import DashboardWave from '../components/DashboardWave';

const Dashboard = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  return (
    <View>
      <Header />
      <DashboardWave />
      <DashboardContent />
    </View>
  );
};

export default Dashboard;
