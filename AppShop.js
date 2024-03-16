import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import DetailModal from "./DetailModal"; // Import your DetailModal component

const AppShop = () => {
  const route = useRoute();
  const { data } = route.params;
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedItem, setSelectedItem] = useState(null); // State to hold the selected item
  const [isModalVisible, setIsModalVisible] = useState(false); // State to manage modal visibility

  const handleReturn = () => {
    navigation.goBack();
  };

  const handleSearch = (text) => {
    setSearchQuery(text);
  };

  const handleItemPress = (item) => {
    setSelectedItem(item); // Set the selected item when an item is pressed
    setIsModalVisible(true); // Show the modal
  };

  const handleModalClose = () => {
    setIsModalVisible(false); // Hide the modal
  };

  const handlePurchase = () => {
    // Logic to handle item purchase
    // This function can be implemented based on your requirements
    // For example, you can make an API call to process the purchase
    console.log("Item purchased:", selectedItem);
    // Close the modal after purchase
    setIsModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>App Shop</Text>
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.input}
            placeholder="Search..."
            onChangeText={handleSearch}
            value={searchQuery}
          />
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        {/* Dynamically render data based on search query */}
        {data.map((item) => {
          // Check if item matches search query
          if (
            searchQuery === "" ||
            item.name.toLowerCase().includes(searchQuery.toLowerCase())
          ) {
            return (
              <TouchableOpacity
                key={item.id}
                style={styles.item}
                onPress={() => handleItemPress(item)} // Pass the item to handleItemPress function
              >
                <Text style={styles.itemText}>{item.name}</Text>
              </TouchableOpacity>
            );
          } else {
            return null; // If item does not match search query, don't render it
          }
        })}
      </ScrollView>

      {/* Render the DetailModal component */}
      <DetailModal
        isVisible={isModalVisible}
        onClose={handleModalClose}
        item={selectedItem} // Pass the selected item to the DetailModal component
        onPurchase={handlePurchase}
      />
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
  searchContainer: {
    marginTop: 10,
    width: "100%", // Make the search bar take up the full width
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    fontSize: 18,
  },
  content: {
    flexGrow: 1,
    alignItems: "center",
    paddingBottom: 20,
  },
  item: {
    width: "90%",
    padding: 10,
    marginVertical: 8,
    backgroundColor: "#f0f0f0",
    borderRadius: 8,
  },
  itemText: {
    fontSize: 16,
  },
  btn: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#007aff",
    marginBottom: 20,
  },
  btnText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#fff",
  },
});

export default AppShop;
