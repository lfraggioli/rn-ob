import React, { useEffect } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { step2Schema, Step2Data } from "../schemas/step-2-schema";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { OnboardingStackParamList } from "../../../navigation/onboarding-navigator";
import { useFormContext } from "../context/form-context";
import { FormInput } from "../../../components/input";

type Props = NativeStackScreenProps<OnboardingStackParamList, "Paso2">;

const Paso2Screen = ({ navigation }: Props) => {
  const { formData, updateFormData } = useFormContext();

  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<Step2Data>({
    resolver: zodResolver(step2Schema),
    defaultValues: {
      email: formData.email || "",
    },
  });

  useEffect(() => {
    register("email");
  }, [register]);

  const onSubmit = (data: Step2Data) => {
    updateFormData(data);

    console.log("Datos recolectados:", {
      ...formData,
      ...data,
    });
    navigation.navigate("Paso3");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Email</Text>
      <FormInput
        style={styles.input}
        placeholder="email@ejemplo.com"
        defaultValue={formData.email}
        keyboardType="email-address"
        onChangeText={(text) => setValue("email", text)}
      />
      {errors.email && <Text style={styles.error}>{errors.email.message}</Text>}

      <View style={styles.buttonGroup}>
        <Button title="Atrás" onPress={() => navigation.goBack()} />
        <Button title="Finalizar" onPress={handleSubmit(onSubmit)} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    justifyContent: "center",
  },
  label: {
    marginBottom: 8,
    fontWeight: "bold",
    fontSize: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
  },
  error: {
    color: "red",
    marginBottom: 10,
  },
  buttonGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
  },
});

export default Paso2Screen;
