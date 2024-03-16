import React from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const Authenticated = ({ user, handleAuthentication }) => {
  const navigation = useNavigation();
  const gloves = require("./Pictures/gloves.jpg");

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
    //navigation.navigate("AppShop");
    navigation.navigate("AppShop", { data: arrayOfItems });
  };

  const arrayOfItems = [
    { id: 1, name: "Item 1", price: 10, stock: 15, picture: gloves },
    { id: 2, name: "Item 2", price: 20, stock: 15, picture: gloves },
    { id: 3, name: "Item 3", price: 30, stock: 100, picture: gloves },
    { id: 4, name: "Item 4", price: 40, stock: 40, picture: gloves },
    { id: 5, name: "Item 5", price: 50, stock: 50, picture: gloves },
    { id: 6, name: "Item 6", price: 10, stock: 15, picture: gloves },
    { id: 7, name: "Item 7", price: 20, stock: 15, picture: gloves },
    { id: 8, name: "Item 8", price: 30, stock: 100, picture: gloves },
    { id: 9, name: "Item 9", price: 40, stock: 40, picture: gloves },
    { id: 10, name: "Item 10", price: 50, stock: 50, picture: gloves },
    { id: 11, name: "Item 11", price: 10, stock: 15, picture: gloves },
    { id: 12, name: "Item 12", price: 20, stock: 15, picture: gloves },
    { id: 13, name: "Item 13", price: 30, stock: 100, picture: gloves },
    { id: 14, name: "Item 14", price: 40, stock: 40, picture: gloves },
    { id: 15, name: "Item 15", price: 50, stock: 50, picture: gloves },
    { id: 16, name: "Item 16", price: 10, stock: 15, picture: gloves },
    { id: 17, name: "Item 17", price: 20, stock: 15, picture: gloves },
    { id: 18, name: "Item 18", price: 30, stock: 100, picture: gloves },
    { id: 19, name: "Item 19", price: 40, stock: 40, picture: gloves },
    { id: 20, name: "Item 20", price: 50, stock: 50, picture: gloves },
  ];
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
