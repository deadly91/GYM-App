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
import DetailModal from "./DetailModal";

const AppShop = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { data } = route.params;
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleReturn = () => {
    navigation.goBack();
  };

  const handleSearch = (text) => {
    setSearchQuery(text);
  };

  const handleItemPress = (item) => {
    setSelectedItem(item);
    setIsModalVisible(true);
  };

  const handleModalClose = () => {
    setIsModalVisible(false);
  };

  const handlePurchase = () => {
    console.log("Item purchased:", selectedItem);
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
        {data.map((item) => {
          if (
            searchQuery === "" ||
            item.name.toLowerCase().includes(searchQuery.toLowerCase())
          ) {
            return (
              <TouchableOpacity
                key={item.id}
                style={styles.item}
                onPress={() => handleItemPress(item)}
              >
                <Text style={styles.itemText}>{item.name}</Text>
              </TouchableOpacity>
            );
          } else {
            return null;
          }
        })}
      </ScrollView>

      <DetailModal
        isVisible={isModalVisible}
        onClose={handleModalClose}
        item={selectedItem}
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
    width: "100%",
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