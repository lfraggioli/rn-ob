import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Paso1Screen from "../features/onboarding/screens/step-1-screen";
import Paso2Screen from "../features/onboarding/screens/step-2-screen";
import { FormProvider } from "../features/onboarding/context/form-context";
import Paso3Screen from "../features/onboarding/screens/step-3-screen";
import Paso4Screen from "../features/onboarding/screens/step-4-screen";

export type OnboardingStackParamList = {
  // Define the parameter list for the onboarding stack navigator
  // Each screen can have its own parameters
  // For example, if Paso1Screen and Paso2Screen don't take any parameters, you can define them as undefined
  Paso1: undefined;
  Paso2: undefined;
  Paso3: undefined;
  Paso4: undefined;
  // Else, it could be something like:
  // Paso1: { sessionId: string };
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
        <Stack.Screen name="Paso3" component={Paso3Screen} />
        <Stack.Screen name="Paso4" component={Paso4Screen} />
      </Stack.Navigator>
    </FormProvider>
  );
};

export default OnboardingNavigator;
