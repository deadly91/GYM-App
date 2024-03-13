import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, SafeAreaView } from 'react-native';


const EditProfile = ({ route, navigation }) => {
  const { onProfileEdit } = route.params;
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [error, setError] = useState('');

  const handleSaveProfile = () => {
    // Validate weight and height inputs
    if (weight === '' || height === '') {
      setError('Weight and height cannot be empty.');
      return;
    }

    // Convert height to float before passing it back
    const floatHeight = parseFloat(height);

    // Check if the height input is a valid number and not an integer
    if (!isNaN(floatHeight) && floatHeight % 1 !== 0) {
      // You can save the profile information to your backend or local storage
      // For simplicity, let's just log the information
      console.log('Weight:', weight, 'Height:', floatHeight);

      // Pass the edited profile information back to MyProfileScreen
      onProfileEdit(weight, floatHeight);

      // Navigate back to MyProfileScreen
      navigation.goBack();
    } else {
      setError('Invalid height input. Please enter a non-integer numeric value.');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Edit Profile</Text>
        {error ? <Text style={styles.error}>{error}</Text> : null}
        <View style={styles.inputContainer}>
          <Text>Weight (kg):</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            value={weight}
            onChangeText={(text) => setWeight(text)}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text>Height (cm):</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            value={height}
            onChangeText={(text) => setHeight(text)}
          />
        </View>
        <Button title="Save Profile" onPress={handleSaveProfile} color="#3498db" />
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
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginLeft: 8,
    paddingHorizontal: 8,
  },
  error: {
    color: 'red',
    marginBottom: 10,
  },
});

export default EditProfile;