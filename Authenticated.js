<<<<<<< HEAD
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

=======
import {View,Text,Button,StyleSheet,TouchableOpacity,ImageBackground,ScrollView} from "react-native";
import { useNavigation } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
import { doc, getDoc } from "firebase/firestore"; 
import { db } from "./config"; 

const motivationalQuotes = [
  "Believe you can and you're halfway there.",
  "It does not matter how slowly you go as long as you do not stop.",
  "We may encounter many defeats but we must not be defeated.",
  "Don't wish for it. Work for it.",
  "The only person you are destined to become is the person you decide to be.",
  "Once you learn to quit, it becomes a habit."
  ];
>>>>>>> 83776171a896a52ce1c55ac6fb8d3369f261fa46

const Authenticated = ({ user, handleAuthentication }) => {
  const navigation = useNavigation();
  const [productData, setProductData] = useState();
<<<<<<< HEAD
  
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
=======

  const [motivationalSentence, setMotivationalSentence] = useState("");
>>>>>>> 83776171a896a52ce1c55ac6fb8d3369f261fa46

  useEffect(() => {
    fetchProducts();
    setMotivationalSentence(motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)]);
  }, []);
  
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
                setProductData([userData1, userData2]); 
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

<<<<<<< HEAD
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
=======
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
  <View style={styles.container}>
    <ScrollView style={{ flex: 1}}>
        <ImageBackground source={require('./assets/StartPageTop.png')} style={styles.backgroundImageUser} resizeMode="cover">
          <Text style={styles.TextWelcome}>Welcome To GeniusGym!</Text>
          <View style={styles.containerTop}>
            <Text style={styles.emailText}>{user.email}</Text>
            <View style={styles.profileButtonContainer}>
              <Button
                title="My Profile"
                onPress={navigateToProfile}
                color="#FF847C" />
            </View>
>>>>>>> 83776171a896a52ce1c55ac6fb8d3369f261fa46
          </View>
        </ImageBackground>

        <View style={styles.containerWorkout}>
        <TouchableOpacity onPress={navigateToWorkout} style={[styles.button]} >
              <Text style={styles.buttonText}>Workout Examples</Text>
            </TouchableOpacity>
            </View>  

        <View style={styles.containerMenu}>
            <TouchableOpacity onPress={navigateToNutritionmenus} style={[styles.button]} >
              <Text style={styles.buttonText}>Nutrition menus</Text>
            </TouchableOpacity>
        </View>

        <View style={styles.containerRegistration}>
          <TouchableOpacity onPress={navigateToRegistration} style={[styles.button]} >
            <Text style={styles.buttonText}>Register for class</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.containerCalendar}>
          <TouchableOpacity onPress={navigateToSchedule} style={[styles.button]} >
            <Text style={styles.buttonText}>Calendar</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.containerShop}>
            <TouchableOpacity onPress={navigateToAppShop} style={[styles.button]} >
              <Text style={styles.buttonText}>App Shop</Text>
            </TouchableOpacity>
        </View>

        <View style={styles.containerShop}>
            <TouchableOpacity onPress={handleAuthentication} style={[styles.bottomContainer]} >
              <Text style={styles.buttonText}>Log Off</Text>
            </TouchableOpacity>
        </View>
      </ScrollView>
  </View>
)};

const styles = StyleSheet.create({
  container: {
    width: 900, // Adjust the width for both white boxes (Sign in & Sign up)
    height: 900,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#355C7D',
  },

  backgroundImageUser: {
    width: 500,
    height: 250, // Adjust this value as needed
    justifyContent: 'flex-end',
  },
  containerTop: {
    alignItems: 'center',
    paddingBottom: 50, // Reduced padding to move content up
  },
  TextWelcome: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
    marginTop: 10, // Add margin to the bottom
  },
  emailText: {
    fontSize: 25,
    color: '#FFFFFF',
    marginBottom: 5, // Add margin to the bottom
  },
  profileButtonContainer: {
    width: '80%', // Set width for the button container
    alignSelf: 'center', // Center the button container
  },
  Text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginVertical: 10,
  },
  // Style for buttons
  button: {
    width: 350, // Adjust the width as needed
    paddingVertical: 12,
    paddingHorizontal: 20, // Reduced padding
    marginBottom: 20,
    backgroundColor: '#F8B195', // A vibrant blue color
    borderRadius: 25,
    alignItems: 'center',
    marginVertical: 10,
  },
  // Style for text inside buttons
  buttonText: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
  },
    // Container style for the Workout section
    containerWorkout: {
      alignItems: 'center',
      justifyContent: 'center',
    },
  // Container style for the menu section
  containerMenu: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  // Container style for the registration section
  containerRegistration: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  // Container style for the calendar section
  containerCalendar: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  // Container style for the shop section
  containerShop: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomContainer: {
    width: 350, // Adjust the width as needed
    paddingVertical: 12,
    paddingHorizontal: 20, // Reduced padding
    marginBottom: 20,
    backgroundColor: '#C06C84', // A vibrant blue color
    borderRadius: 25,
    alignItems: 'center',
    marginVertical: 10,
  },
});


export default Authenticated;