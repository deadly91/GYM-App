import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const Registration = () => {
  const navigation = useNavigation();

  // Dummy data for classes
  const [classes, setClasses] = useState([
    {
      id: 1,
      name: "Gym Workout",
      description: "Strength training and cardio exercises",
      time: "07:00-23:00",
      day: "Everyday",
    },
    {
      id: 2,
      name: "Pilates",
      description: "Low-impact exercises to improve flexibility and strength",
      time: "08:00-10:00",
      day: "Everyday",
    },
    {
      id: 3,
      name: "Crossfit",
      description:
        "CrossFit is a strength and conditioning workout that is made up of functional movement performed at a high intensity level.",
      time: "18:00-20:00",
      day: "Mon",
    },
    {
      id: 4,
      name: "HIIT",
      description:
        "High-intensity interval training, better known as HIIT, consists of short bursts of intense work that typically last between 15 seconds to 4 minutes.",
      time: "17:00-19:00",
      day: "Tue",
    },
    {
      id: 5,
      name: "Yoga",
      description:
        "Yoga is a holistic practice that combines physical postures, breathing techniques, and meditation to promote relaxation, flexibility, and overall well-being.",
      time: "10:00-12:00",
      day: "Sun",
    },
    {
      id: 6,
      name: "Zumba",
      description:
        "Zumba is an interval workout. The classes move between high- and low-intensity dance moves designed to get your heart rate up and boost cardio endurance.",
      time: "14:00-16:00",
      day: "Fri",
    },
    {
      id: 7,
      name: "Spinning",
      description:
        "Spinning is a high-intensity indoor cycling workout that typically involves riding a stationary bike to music, led by an instructor.",
      time: "18:00-20:00",
      day: "Everyday",
    },
  ]);

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleClassSelection(item)}>
      <View style={styles.itemContainer}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemDescription}>{item.description}</Text>
      </View>
    </TouchableOpacity>
  );

  const handleClassSelection = (selectedClass) => {
    navigation.navigate("ClassDetails", { selectedClass });
  };

  const handleGoBack = () => {
    if (navigation.canGoBack()) {
      navigation.goBack();
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Available Classes</Text>
      <FlatList
        data={classes}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.listContainer}
      />
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
    backgroundColor: "#355C7D",
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "center",
    color: "#FFFFFF",
  },
  listContainer: {
    flexGrow: 1,
  },
  itemContainer: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
  },
  itemName: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  itemDescription: {
    fontSize: 16,
  },
  btn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#C06C84",
    marginTop: 16,
  },
  btnText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#fff",
  },
});

export default Registration;
