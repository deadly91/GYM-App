import React, { useState, useEffect } from "react";
import { View, Text, Button, StyleSheet, SafeAreaView, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { doc, getDoc, setDoc } from "firebase/firestore";
import getCurrentUserId from "./getCurrentUserId";
import { db } from "./config";

const MyProfile = () => {
  const navigation = useNavigation();
  const [weight, setWeight] = useState(null);
  const [height, setHeight] = useState(null);
  const [bmi, setBMI] = useState(null);
  const [bmiStatus, setbmiStatus] = useState(null);
  const [age, setAge] = useState(null);

  const fetchProfileData = async () => {
    try {
      const userId = getCurrentUserId();
      const userRef = doc(db, "users", userId);
      const docSnap = await getDoc(userRef);
      if (docSnap.exists()) {
        const userData = docSnap.data();
        setWeight(userData.weight);
        setHeight(userData.height);
        setBMI(userData.bmi);
        setbmiStatus(calculateBMIStatus(userData.bmi));
        setAge(userData.age);
      } else {
        console.log("No profile data found for the current user.");
      }
    } catch (error) {
      console.error("Error fetching profile data from Firestore:", error);
    }
  };

  useEffect(() => {
    fetchProfileData();
  }, []);

  const saveProfileDataToFirestore = async (newWeight, newHeight, newAge) => {
    try {
      const userId = getCurrentUserId();
      const userRef = doc(db, "users", userId);
      const newBMI = newWeight / (newHeight * newHeight);
      const newBMIStatus = calculateBMIStatus(newBMI);
      await setDoc(userRef, {
        weight: newWeight,
        height: newHeight,
        age: newAge,
        bmi: newBMI,
        bmiStatus: newBMIStatus
      }, { merge: true });
      // Update local state with new profile data
      setWeight(newWeight);
      setHeight(newHeight);
      setAge(newAge);
      setBMI(newBMI);
      setbmiStatus(newBMIStatus);
      console.log("Profile data saved to Firestore successfully.");
    } catch (error) {
      console.error("Error saving profile data to Firestore:", error);
    }
  };

  const calculateBMIStatus = (bmi) => {
    if (bmi < 18.5) {
      return "Underweight";
    } else if (bmi >= 18.5 && bmi < 25) {
      return "Normal weight";
    } else if (bmi >= 25 && bmi < 30) {
      return "Overweight";
    } else {
      return "Obese";
    }
  };

  const handleEditProfile = () => {
    navigation.navigate("EditProfile", {
      onProfileEdit: saveProfileDataToFirestore
    });
  };

  const handleReturn = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>My Profile</Text>
        {weight !== null && height !== null && bmi !== null && age !== null ? (
          <View style={styles.profileInfoContainer}>
            <Text style={styles.infoText}>Weight: {weight} kg</Text>
            <Text style={styles.infoText}>Height: {height} cm</Text>
            <Text style={styles.infoText}>Age: {age}</Text>
            <Text style={styles.infoText}>BMI: {bmi}</Text>
            <Text style={styles.infoText}>BMI Status: {bmiStatus}</Text>
            <Button
              title="Edit Profile"
              onPress={handleEditProfile}
              color="#007aff"
            />
          </View>
        ) : (
          <View style={styles.inputProfileContainer}>
            <Text style={styles.infoText}>
              No profile information found. Input your data:
            </Text>
            <Button
              title="Input Profile"
              onPress={() => navigation.navigate("InputProfile", {
                onProfileInput: saveProfileDataToFirestore
              })}
              color="#007aff"
            />
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
    backgroundColor: "#f0f0f0",
  },
  contentContainer: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  profileInfoContainer: {
    alignItems: "center",
    marginTop: 20,
  },
  inputProfileContainer: {
    alignItems: "center",
    marginTop: 20,
  },
  infoText: {
    fontSize: 18,
    marginBottom: 10,
  },
  footer: {
    justifyContent: "flex-end",
    marginBottom: 16,
    marginHorizontal: 16,
  },
  btn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#007aff",
  },
  btnText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#fff",
  },
});

export default MyProfile;