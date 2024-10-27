// components/dashboard/DashboardContent.js
import React, { useRef } from 'react';
import { View, StyleSheet, Animated } from 'react-native';
import BballLayout from '../basketball/BballLayout'; // Ensure this path is correct
import VballLayout from '../volleyball/VballLayout'; // Ensure this path is correct
import BadmintonLayout from '../badminton/BadmintonLayout'; // Ensure this path is correct
import BilliardLayout from '../billiard/BilliardLayout'; // Ensure this path is correct
import ExerciseLayout from '../exercise/ExerciseLayout'; // Ensure this path is correct
import AboutUs from '../AboutUs.js'; // Import the AboutUs component

// Layouts array
const layouts = [
  { id: 'Bball', component: <BballLayout /> },
  { id: 'Vball', component: <VballLayout /> },
  { id: 'Badminton', component: <BadmintonLayout /> },
  { id: 'Billiard', component: <BilliardLayout /> },
  { id: 'Exercise', component: <ExerciseLayout /> },
  { id: 'AboutUs', component: <AboutUs /> }, // Include About Us component
];

const DashboardContent = () => {
  const scrollX = useRef(new Animated.Value(0)).current;

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      {item.component}
    </View>
  );

  return (
    <View style={styles.container}>
      <Animated.FlatList
        data={layouts}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: true }
        )}
        scrollEventThrottle={16}
      />
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f5f5f5',
  },
  itemContainer: {
    width: 360,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default DashboardContent;
