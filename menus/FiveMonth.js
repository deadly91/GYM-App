import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const FiveMonth = () => {
  const navigation = useNavigation();

  const handleReturn = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>5 Month Nutrition Menu</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.text}>Coming soon...</Text>
      </View>

      <TouchableOpacity onPress={handleReturn}>
        <View style={styles.btn}>
          <Text style={styles.btnText}>GO BACK</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
    justifyContent: "space-between",
  },
  titleContainer: {
    alignItems: "center",
    marginTop: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
  },
  content: {
    alignItems: "center",
    marginBottom: 20,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  btn: {
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

export default FiveMonth;
