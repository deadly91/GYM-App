import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Registration = () => {
  const navigation = useNavigation();

  // Dummy data for classes
  const [classes, setClasses] = useState([
    { id: 1, name: 'Gym Workout', description: 'Strength training and cardio exercises' },
    { id: 2, name: 'Pilates', description: 'Low-impact exercises to improve flexibility and strength' },
    // Add more classes as needed
  ]);

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleClassSelection(item)}>
      <View style={styles.itemContainer}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemDescription}>{item.description}</Text>
      </View>
    </TouchableOpacity>
  );

  const handleClassSelection = (selectedClass) => {
    // Navigate to the class details screen
    // You can pass the selected class as a parameter if needed
    navigation.navigate('ClassDetails', { class: selectedClass });
  };

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Available Classes</Text>
      <FlatList
        data={classes}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.listContainer}
      />
      <TouchableOpacity onPress={handleGoBack}>
        <View style={styles.btn}>
          <Text style={styles.btnText}>GO BACK</Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  listContainer: {
    flexGrow: 1,
  },
  itemContainer: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  itemDescription: {
    fontSize: 16,
  },
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#007aff',
    marginTop: 16,
  },
  btnText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#fff',
  },
});

export default Registration;