import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OnboardingNavigator from "./onboarding-navigator";
// import LoginScreen from '../features/auth/screens/login-screen'; // más adelante

const Stack = createNativeStackNavigator();

const PublicNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Onboarding" component={OnboardingNavigator} />
      {/* <Stack.Screen name="Login" component={LoginScreen} /> */}
    </Stack.Navigator>
  );
};

export default PublicNavigator;
