import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Paso1Screen from "../features/onboarding/screens/step-1-screen";
import Paso2Screen from "../features/onboarding/screens/step-2-screen";
import { FormProvider } from "../features/onboarding/context/form-context";

export type OnboardingStackParamList = {
  Paso1: undefined;
  Paso2: undefined;
};

const Stack = createNativeStackNavigator<OnboardingStackParamList>();

const OnboardingNavigator = () => {
  return (
    <FormProvider>
      <Stack.Navigator
        initialRouteName="Paso1"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Paso1" component={Paso1Screen} />
        <Stack.Screen name="Paso2" component={Paso2Screen} />
      </Stack.Navigator>
    </FormProvider>
  );
};

export default OnboardingNavigator;
