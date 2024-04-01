import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  TextInput,
  StyleSheet,
  SafeAreaView,
} from "react-native";

const InputProfile = ({ route, navigation }) => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [age, setAge] = useState("");

  const handleSave = () => {
    // Validate input (you may add more robust validation as needed)
    if (weight && height && age) {
      // Call the onProfileInput function passed from MyProfileScreen
      route.params.onProfileInput(
        parseFloat(weight),
        parseFloat(height),
        parseInt(age)
      );

      // Navigate back to MyProfileScreen
      navigation.goBack();
      //navigation.goBack();
    } else {
      // Handle validation error (e.g., show an alert)
      alert("Please enter valid weight, height, and age.");
    }
  };

  const handleCancel = () => {
    // Navigate back to MyProfileScreen without saving changes
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Input Profile</Text>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Weight (kg):</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter weight (kg)"
            keyboardType="numeric"
            value={weight}
            onChangeText={(text) => setWeight(text)}
          />
        </View>
        <View style={styles.inputContainer}>
<<<<<<< HEAD
          <Text style={styles.label}>Height (cm):</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter height (cm)"
=======
          <Text style={styles.label}>Height (M):</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter height (M)"
>>>>>>> 83776171a896a52ce1c55ac6fb8d3369f261fa46
            keyboardType="numeric"
            value={height}
            onChangeText={(text) => setHeight(text)}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Age:</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter age"
            keyboardType="numeric"
            value={age}
            onChangeText={(text) => setAge(text)}
          />
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <Button title="Save" onPress={handleSave} color="#3498db" />
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
<<<<<<< HEAD
    backgroundColor: "#f0f0f0",
=======
    backgroundColor: "#355C7D",
>>>>>>> 83776171a896a52ce1c55ac6fb8d3369f261fa46
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
  },
  label: {
    minWidth: 100,
    marginRight: 10,
    color: "#FFFFFF"
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 8,
  },
  label: {
    minWidth: 100,
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    paddingHorizontal: 8,
<<<<<<< HEAD
=======
    backgroundColor: "#FFFFFF",
>>>>>>> 83776171a896a52ce1c55ac6fb8d3369f261fa46
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
    paddingHorizontal: 16,
    marginTop: 16,
  },
  button: {
    width: "48%",
  },
});

export default InputProfile;