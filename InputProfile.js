import React, { useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet, SafeAreaView } from 'react-native';

const InputProfile = ({ route, navigation }) => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');

  const handleSave = () => {
    // Validate input (you may add more robust validation as needed)
    if (weight && height) {
      // Call the onProfileInput function passed from MyProfileScreen
      route.params.onProfileInput(parseFloat(weight), parseFloat(height));

      // Navigate back to MyProfileScreen
      navigation.goBack();
    } else {
      // Handle validation error (e.g., show an alert)
      alert('Please enter valid weight and height.');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Input Profile</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter weight (kg)"
          keyboardType="numeric"
          value={weight}
          onChangeText={(text) => setWeight(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter height (cm)"
          keyboardType="numeric"
          value={height}
          onChangeText={(text) => setHeight(text)}
        />
        <Button title="Save" onPress={handleSave} color="#3498db" />
      </View>
      <View style={styles.bottomContainer}>
        <Button title="Cancel" onPress={() => navigation.goBack()} color="#e74c3c" />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  input: {
    height: 40,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingLeft: 8,
  },
});

export default InputProfile;