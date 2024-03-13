import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const MyProfileScreen = () => {
  const navigation = useNavigation();
  const [weight, setWeight] = useState(null);
  const [height, setHeight] = useState(null);
  const [bmi, setBMI] = useState(null);

  const handleEditProfile = () => {
    navigation.navigate('EditProfile', {
      onProfileEdit: (newWeight, newHeight) => {
        // Calculate BMI
        const newBMI = (newWeight / (newHeight ** 2)).toFixed(2);

        // Update state with edited profile information
        setWeight(newWeight);
        setHeight(newHeight);
        setBMI(newBMI);
      },
    });
  };

  const handleInputProfile = () => {
    navigation.navigate('InputProfile', {
      onProfileInput: (inputWeight, inputHeight) => {
        // Calculate BMI
        const bmi = (inputWeight / (inputHeight ** 2)).toFixed(2);

        // Update state with weight, height, and BMI
        setWeight(inputWeight);
        setHeight(inputHeight);
        setBMI(bmi);
      },
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>My Profile</Text>
        {weight !== null && height !== null && bmi !== null ? (
          // Display existing profile information
          <View style={styles.profileInfoContainer}>
            <Text>Weight: {weight} kg</Text>
            <Text>Height: {height} cm</Text>
            <Text>BMI: {bmi}</Text>
            <Button title="Edit Profile" onPress={handleEditProfile} color="#3498db" />
          </View>
        ) : (
          // Display option to input profile information
          <View style={styles.inputProfileContainer}>
            <Text>No profile information found. Input your data:</Text>
            <Button title="Input Profile" onPress={handleInputProfile} color="#3498db" />
          </View>
        )}
      </View>
      <View style={styles.bottomContainer}>
        <Button title="Go Back" onPress={() => navigation.goBack()} color="#3498db" />
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
    justifyContent: 'flex-start', // Align content at the top
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  profileInfoContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  inputProfileContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  bottomContainer: {
    justifyContent: 'flex-end',
    marginBottom: 16,
    marginHorizontal: 16,
  },
});

export default MyProfileScreen;