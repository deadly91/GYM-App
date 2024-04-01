import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { doc, getDoc, setDoc } from "firebase/firestore"; // Import Firestore functions
import getCurrentUserId from "./getCurrentUserId"; // Import getCurrentUserId function
import { db } from "./config"; // Import the db variable

const ClassDetails = ({ route }) => {
  const navigation = useNavigation();
  const { selectedClass } = route.params;

  const saveClassDataToFirestore = async () => {
    try {
      const userId = getCurrentUserId(); // Get the current user's ID
      const userRef = doc(db, "users", userId);

      // Save profile data to Firestore
      await setDoc(
        userRef,
        {
          name: selectedClass.name,
          time: selectedClass.time,
          day: selectedClass.day,
        },
        { merge: true }
      ); // Use merge option to merge new data with existing document

      console.log("Class data saved to Firestore successfully.");
      navigation.goBack();
    } catch (error) {
      console.error("Error saving class data to Firestore:", error);
    }
  };

  const handleApply = () => {
    saveClassDataToFirestore();
    navigation.goBack();
  };

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#355C7D' }}>
    <SafeAreaView style={styles.container}>
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{selectedClass.name}</Text>
        <Text style={styles.time}>{selectedClass.day}</Text>
        <Text style={styles.day}>{selectedClass.time}</Text>
        <Text style={styles.description}>{selectedClass.description}</Text>
        <TouchableOpacity onPress={handleApply}>
          <View style={styles.applyBtn}>
            <Text style={styles.applyBtnText}>Apply</Text>
          </View>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={handleGoBack}>
        <View style={styles.btn}>
          <Text style={styles.btnText}>GO BACK</Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
    padding: 16,
  },
  detailsContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  time: {
    fontSize: 20,
    marginBottom: 16,
  },
  description: {
    fontSize: 18,
    marginBottom: 16,
    textAlign: "center",
  },
  applyBtn: {
    backgroundColor: "#007aff",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  applyBtnText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
  btn: {
    backgroundColor: "#C06C84",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginTop: 16,
    alignItems: "center",
  },
  btnText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
});

export default ClassDetails;
