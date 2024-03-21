import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Modal,
} from "react-native";

const DetailModal = ({ isVisible, onClose, item, onPurchase }) => {
  const [showPicture, setShowPicture] = useState(false);

  const togglePicture = () => {
    setShowPicture(!showPicture);
  };

  const handleClose = () => {
    setShowPicture(false); // Close the picture only
  };

  // Check if item is null before accessing its properties
  if (!item) {
    return null;
  }

  return (
    <Modal
      visible={isVisible}
      animationType="slide"
      transparent={true}
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          {showPicture ? (
            <View style={styles.pictureContainer}>
              <Image source={{ uri: item.picture }} style={styles.image} />
              <TouchableOpacity onPress={handleClose}>
                <Text style={styles.closePictureButton}>Close Picture</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text>Price: {item.price}</Text>
              <Text>Stock: {item.stock}</Text>

              <TouchableOpacity
                style={styles.purchaseButton}
                onPress={onPurchase}
              >
                <Text style={styles.buttonText}>Purchase</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.closeButton} onPress={onClose}>
                <Text style={styles.buttonText}>Close</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={togglePicture}>
                <Text style={styles.pictureButton}>Picture</Text>
              </TouchableOpacity>
            </>
          )}
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    width: "80%",
    alignItems: "center",
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 10,
  },
  itemName: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  pictureContainer: {
    alignItems: "center",
  },
  pictureButton: {
    color: "#007aff",
    fontSize: 16,
    textDecorationLine: "underline",
    marginBottom: 10,
  },
  closePictureButton: {
    color: "#007aff",
    fontSize: 16,
    textDecorationLine: "underline",
    marginTop: 10,
  },
  purchaseButton: {
    backgroundColor: "#007aff",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 10,
  },
  closeButton: {
    backgroundColor: "#ccc",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
  },
});

export default DetailModal;