import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { doc, getDoc } from 'firebase/firestore'; // Import Firestore functions
import getCurrentUserId from './getCurrentUserId'; // Import getCurrentUserId function
import { db } from './config'; // Import the db variable

const MyProfileScreen = () => {
  const navigation = useNavigation();
  const [weight, setWeight] = useState(null);
  const [height, setHeight] = useState(null);
  const [bmi, setBMI] = useState(null);

  // Function to fetch profile data from Firestore
  const fetchProfileData = async () => {
    try {
      const userId = getCurrentUserId(); // Get the current user's ID
      const userRef = doc(db, 'users', userId);
      const docSnap = await getDoc(userRef);

      if (docSnap.exists()) {
        const userData = docSnap.data();
        setWeight(userData.weight);
        setHeight(userData.height);
        setBMI(userData.bmi);
      } else {
        console.log('No profile data found for the current user.');
      }
    } catch (error) {
      console.error('Error fetching profile data from Firestore:', error);
    }
  };

  useEffect(() => {
    // Fetch profile data when the component mounts
    fetchProfileData();
  }, []); // Empty dependency array ensures the effect runs only once after the initial render

  const handleEditProfile = () => {
    navigation.navigate('EditProfile', {
      onProfileEdit: (newWeight, newHeight) => {
        const newBMI = (newWeight / (newHeight ** 2)).toFixed(2);
        setWeight(newWeight);
        setHeight(newHeight);
        setBMI(newBMI);
        // Save updated profile data to Firestore
        saveProfileDataToFirestore(newWeight, newHeight, newBMI);
      },
    });
  };

  const handleInputProfile = () => {
    navigation.navigate('InputProfile', {
      onProfileInput: (inputWeight, inputHeight) => {
        const bmi = (inputWeight / (inputHeight ** 2)).toFixed(2);
        setWeight(inputWeight);
        setHeight(inputHeight);
        setBMI(bmi);
        // Save profile data to Firestore
        saveProfileDataToFirestore(inputWeight, inputHeight, bmi);
      },
    });
  };

  const handleReturn = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>My Profile</Text>
        {weight !== null && height !== null && bmi !== null ? (
          <View style={styles.profileInfoContainer}>
            <Text>Weight: {weight} kg</Text>
            <Text>Height: {height} cm</Text>
            <Text>BMI: {bmi}</Text>
            <Button title="Edit Profile" onPress={handleEditProfile} color="#3498db" />
          </View>
        ) : (
          <View style={styles.inputProfileContainer}>
            <Text>No profile information found. Input your data:</Text>
            <Button title="Input Profile" onPress={handleInputProfile} color="#3498db" />
          </View>
        )}
      </View>
      <View style={styles.footer}>
        <TouchableOpacity onPress={handleReturn}>
          <View style={styles.btn}>
            <Text style={styles.btnText}>GO BACK</Text>
          </View>
        </TouchableOpacity>
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
    justifyContent: 'flex-start',
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
  footer: {
    justifyContent: 'flex-end',
    marginBottom: 16,
    marginHorizontal: 16,
  },
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    backgroundColor: '#007aff',
    borderColor: '#007aff',
  },
  btnText: {
    fontSize: 18,
    lineHeight: 26,
    fontWeight: '600',
    color: '#fff',
  },
});

export default MyProfileScreen;