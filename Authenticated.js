import {
  View,
  Text,
  Button,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
import { doc, getDoc } from "firebase/firestore"; // Import Firestore functions
import { db } from "./config"; // Import the db variable


const Authenticated = ({ user, handleAuthentication }) => {
  const navigation = useNavigation();
  const gloves = require("./Pictures/gloves.jpg");
  const [productData, setProductData] = useState();
  
  const fetchProducts = async () => {
    try {
        const ref1 = doc(db, "products", 'EOkvHRSMexKtmgz8A1so');
        const doc1 = await getDoc(ref1);
        if (doc1.exists()) {
            const userData1 = doc1.data();
            const ref2 = doc(db, "products", 'kLGDAFpBZVeAkSC4YqBW');
            const doc2 = await getDoc(ref2);
            if (doc2.exists()) {
                const userData2 = doc2.data();
                setProductData([userData1, userData2]); // Set product data array
            } else {
                console.log("No product data found for the second document.");
            }
        } else {
            console.log("No product data found for the first document.");
        }
    } catch (error) {
        console.error("Error fetching profile data from Firestore:", error);
    }
}

useEffect(() => {
    fetchProducts();
}, []); 
  
  
  
  const navigateToProfile = () => {
    navigation.navigate("MyProfile");
  };

  const navigateToSchedule = () => {
    navigation.navigate("Schedule");
  };

  const navigateToWorkout = () => {
    navigation.navigate("Workout");
  };

  const navigateToRegistration = () => {
    navigation.navigate("Registration");
  };

  const navigateToNutritionmenus = () => {
    navigation.navigate("Nutritionmenus");
  };

  const navigateToAppShop = () => {
    navigation.navigate('AppShop', { data: productData });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.headerContent}>
          <Text style={styles.emailText}>{user.email}</Text>
          <View style={styles.profileButtonContainer}>
            <Button
              title="My Profile"
              onPress={navigateToProfile}
              color="#3498db"
            />
          </View>
        </View>
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={navigateToSchedule}
            style={[styles.button, { backgroundColor: "#9b59b6" }]}
          >
            <Text style={styles.buttonText}>Calendar</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={navigateToWorkout}
            style={[styles.button, { backgroundColor: "#9b59b6" }]}
          >
            <Text style={styles.buttonText}>Workout Examples</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={navigateToRegistration}
            style={[styles.button, { backgroundColor: "#9b59b6" }]}
          >
            <Text style={styles.buttonText}>Register for class</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={navigateToNutritionmenus}
            style={[styles.button, { backgroundColor: "#9b59b6" }]}
          >
            <Text style={styles.buttonText}>Nutrition menus</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={navigateToAppShop}
            style={[styles.button, { backgroundColor: "#9b59b6" }]}
          >
            <Text style={styles.buttonText}>App Shop</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <Button
          title="Log Off"
          onPress={handleAuthentication}
          color="#e74c3c"
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
  },
  headerContainer: {
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  headerContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  emailText: {
    fontSize: 18,
    textAlign: "left",
  },
  profileButtonContainer: {
    marginLeft: 8,
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    marginBottom: 16,
  },
  button: {
    flex: 1,
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginHorizontal: 5,
  },
  buttonText: {
    fontSize: 16,
    color: "#fff",
    textAlign: "center",
  },
  bottomContainer: {
    justifyContent: "flex-end",
    marginBottom: 16,
    marginHorizontal: 16,
  },
});

export default Authenticated;
