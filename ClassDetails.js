import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const ClassDetails = ({ route }) => {
  const navigation = useNavigation();
  const { selectedClass } = route.params;

  const handleApply = () => {
    // Add the selected class to the schedule
    // Implement this according to your state management solution
    // For example:
    // dispatch(addToSchedule(selectedClass));
    // or
    // setSchedule([...schedule, selectedClass]);
    // Navigate back to the Registration screen
    navigation.goBack();
  };

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{selectedClass.name}</Text>
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
    backgroundColor: "#007aff",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginTop: 16,
    alignItems: "center", // Align items in the center horizontally
  },
  btnText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
});

export default ClassDetails;
