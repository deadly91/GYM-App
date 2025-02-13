import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const Nutritionmenus = () => {
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleMenuSelection = (menu) => {
    switch (menu) {
      case "1 month menu":
        navigation.navigate("OneMonth");
        break;
      case "3 month menu":
        navigation.navigate("ThreeMonth");
        break;
      case "5 month menu":
        navigation.navigate("FiveMonth");
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    // Any initialization or side effect code can go here
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Nutrition Menus</Text>
        <Text style={styles.kosherText}>All the menus are kosher friendly</Text>
      </View>
      <View style={styles.content}>
        <TouchableOpacity onPress={() => handleMenuSelection("1 month menu")}>
          <View style={styles.menuButton}>
            <Text style={styles.menuButtonText}>1 Month Menu</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleMenuSelection("3 month menu")}>
          <View style={styles.menuButton}>
            <Text style={styles.menuButtonText}>3 Month Menu</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleMenuSelection("5 month menu")}>
          <View style={styles.menuButton}>
            <Text style={styles.menuButtonText}>5 Month Menu</Text>
          </View>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={handleGoBack}>
        <View style={styles.btn}>
          <Text style={styles.goBackButtonText}>GO BACK</Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#355C7D",
    padding: 16,
    justifyContent: "space-between",
  },
  header: {
    alignItems: "center", // Center text horizontally
    marginBottom: 16,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "center",
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  kosherText: {
    fontSize: 20,
    color: "#777",
    fontStyle: "italic",
    marginBottom: 8,
    color: "#FFFFFF",
  },
  content: {
    alignItems: "center", // Center buttons horizontally
  },
  menuButton: {
    width: 350, // Adjust the width as needed
    paddingVertical: 12,
    paddingHorizontal: 20, // Reduced padding
    marginBottom: 20,
    backgroundColor: '#F8B195', // A vibrant blue color
    borderRadius: 25,
    alignItems: 'center',
    marginVertical: 10,
  },
  menuButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
  btn: {
    backgroundColor: '#C06C84',
    borderRadius: 8,
    paddingVertical: 12, // Adjust padding here
    paddingHorizontal: 145, // Adjust padding here
    marginBottom: 20,
  },
  goBackButtonText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#fff",
  },
});

export default Nutritionmenus;
