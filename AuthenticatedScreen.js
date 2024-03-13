import React from 'react';
import { View, Text, Button, StyleSheet, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const AuthenticatedScreen = ({ user, handleAuthentication }) => {
  const navigation = useNavigation();

  const navigateToProfile = () => {
    navigation.navigate('MyProfile');
  };

  const navigateToSchedule = () => {
    navigation.navigate('Schedule');
  };

  const navigateToWorkout = () => {
    // Navigate to Workout screen
    navigation.navigate('Workout');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.headerContent}>
          <Text style={styles.emailText}>{user.email}</Text>
          <View style={styles.profileButtonContainer}>
            <Button title="My Profile" onPress={navigateToProfile} color="#3498db" />
          </View>
        </View>
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.buttonContainer}>
          <Button title="Schedule" onPress={navigateToSchedule} color="#9b59b6" />
          <Button title="Workout Examples" onPress={navigateToWorkout} color="#9b59b6" />
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <Button title="Log Off" onPress={handleAuthentication} color="#e74c3c" />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  headerContainer: {
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  emailText: {
    fontSize: 18,
    textAlign: 'left',
  },
  profileButtonContainer: {
    marginLeft: 8, // Add some spacing between email and button
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  bottomContainer: {
    justifyContent: 'flex-end',
    marginBottom: 16,
    marginHorizontal: 16,
  },
});

export default AuthenticatedScreen;