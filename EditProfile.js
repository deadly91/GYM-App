import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  SafeAreaView,
} from "react-native";

const EditProfile = ({ route, navigation }) => {
  const { onProfileEdit } = route.params;
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState("");

  const handleSaveProfile = () => {
    // Validate weight, height, and age inputs
    if (weight === "" || height === "" || age === "") {
      setError("Weight, height, and age cannot be empty.");
      return;
    }

    // Convert height and age to float before passing them back
    const floatHeight = parseFloat(height);
    const intAge = parseInt(age);

    // Check if the height input is a valid number and not an integer
    if (!isNaN(floatHeight) && !isNaN(intAge)) {
      // You can save the profile information to your backend or local storage
      // For simplicity, let's just log the information
      console.log("Weight:", weight, "Height:", floatHeight, "Age:", intAge);

      // Pass the edited profile information back to MyProfileScreen
      onProfileEdit(weight, floatHeight, intAge);

      // Navigate back to MyProfileScreen
      navigation.goBack();
    } else {
      setError(
        "Invalid height or age input. Please enter valid numeric values."
      );
    }
  };

  const handleCancel = () => {
    // Navigate back to MyProfileScreen without saving changes
    navigation.goBack();
    
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Edit Profile</Text>
        {error ? <Text style={styles.error}>{error}</Text> : null}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Weight (kg):</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            value={weight}
            onChangeText={(text) => setWeight(text)}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Height (m):</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            value={height}
            onChangeText={(text) => setHeight(text)}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Age:</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            value={age}
            onChangeText={(text) => setAge(text)}
          />
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <Button
            title="Save Profile"
            onPress={handleSaveProfile}
            color="#3498db"
          />
        </View>
        <View style={styles.button}>
          <Button title="Cancel" onPress={handleCancel} color="#e74c3c" />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#355C7D",
    justifyContent: "center",
    alignItems: "center",
  },
  contentContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    color: "#FFFFFF",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 8,
    color: "#FFFFFF",
  },
  label: {
    minWidth: 100,
    marginRight: 10,
    color: "#FFFFFF",
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    paddingHorizontal: 8,
    backgroundColor: "#FFFFFF",
    color: "#000000",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
    paddingHorizontal: 16,
    marginTop: 16,
    color: "#FFFFFF",
  },
  button: {
    width: "48%",
  },
  error: {
    color: "red",
    marginBottom: 10,
  },
});

export default EditProfile;