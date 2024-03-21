import React, { useState, useEffect } from "react";
import { View, StyleSheet, Alert } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AuthForm from "./AuthForm";
import Authenticated from "./Authenticated";
import MyProfile from "./MyProfile";
import InputProfile from "./InputProfile";
import EditProfile from "./EditProfile";
import Schedule from "./Schedule";
import Workout from "./Workout";
import Registration from "./Registration";
import ClassDetails from "./ClassDetails";
import Nutritionmenus from "./Nutritionmenus";
import OneMonth from "./menus/OneMonth";
import ThreeMonth from "./menus/ThreeMonth";
import FiveMonth from "./menus/FiveMonth";
import AppShop from "./AppShop";
import firebaseConfig from "./config";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "@firebase/auth";

const Stack = createStackNavigator();

const App = () => {
  const [productData, setProductData] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);
  const [isLogin, setIsLogin] = useState(true);

  const auth = getAuth(firebaseConfig);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, [auth]);

  const handleAuthentication = async () => {
    try {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        Alert.alert(
          "Error",
          "Invalid Email format. Please enter a valid email address."
        );
        return;
      }

      if (user) {
        console.log("User logged out successfully!");
        await signOut(auth);
      } else {
        if (isLogin) {
          await signInWithEmailAndPassword(auth, email, password);
          console.log("User signed in successfully!");
        } else {
          await createUserWithEmailAndPassword(auth, email, password);
          console.log("User created successfully!");
        }
      }
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        //database
        Alert.alert(
          "Error",
          "Email is already in use. Please use a different email."
        );
      } else if (error.code === "auth/invalid-credential") {
        //database error
        Alert.alert("Error", "Invalid credential.");
      } else if (error.code === "auth/weak-password") {
        //database error
        Alert.alert("Error", "Password should be at least 6 characters.");
      } else {
        Alert.alert("Error", "Authentication error. Please try again.");
      }
    }
  };

  return (


    
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Auth">
          {(props) => (
            <View style={styles.container}>
              {user ? (
                <Authenticated
                  user={user}
                  handleAuthentication={handleAuthentication}
                />
              ) : (
                <AuthForm
                  email={email}
                  setEmail={setEmail}
                  password={password}
                  setPassword={setPassword}
                  isLogin={isLogin}
                  setIsLogin={setIsLogin}
                  handleAuthentication={handleAuthentication}
                />
              )}
            </View>
          )}
        </Stack.Screen>
        <Stack.Screen name="MyProfile" component={MyProfile} />
        <Stack.Screen name="InputProfile" component={InputProfile} />
        <Stack.Screen name="EditProfile" component={EditProfile} />
        <Stack.Screen name="Schedule" component={Schedule} />
        <Stack.Screen name="Workout" component={Workout} />
        <Stack.Screen name="Registration" component={Registration} />
        <Stack.Screen name="ClassDetails" component={ClassDetails} />
        <Stack.Screen name="Nutritionmenus" component={Nutritionmenus} />
        <Stack.Screen name="OneMonth" component={OneMonth} />
        <Stack.Screen name="ThreeMonth" component={ThreeMonth} />
        <Stack.Screen name="FiveMonth" component={FiveMonth} />
        <Stack.Screen name="AppShop" component={AppShop} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#f0f0f0",
  },
});

export default App;
