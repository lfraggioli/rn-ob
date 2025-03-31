import React, { useEffect } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { step1Schema, Step1Data } from "../schemas/step-1-schema";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { OnboardingStackParamList } from "../../../navigation/onboarding-navigator";
import { useFormContext } from "../context/form-context";

type Props = NativeStackScreenProps<OnboardingStackParamList, "Paso1">;

const Paso1Screen = ({ navigation }: Props) => {
  const { formData, updateFormData } = useFormContext();

  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<Step1Data>({
    resolver: zodResolver(step1Schema),
    defaultValues: {
      nombre: formData.nombre || "",
    },
  });

  // Registrar el input manualmente (requerido en React Native)
  useEffect(() => {
    register("nombre");
  }, [register]);

  const onSubmit = (data: Step1Data) => {
    updateFormData(data); // Guarda en contexto global
    navigation.navigate("Paso2");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Nombre</Text>
      <TextInput
        style={styles.input}
        placeholder="Juan Pérez"
        defaultValue={formData.nombre}
        onChangeText={(text) => setValue("nombre", text)}
      />
      {errors.nombre && (
        <Text style={styles.error}>{errors.nombre.message}</Text>
      )}

      <Button title="Siguiente" onPress={handleSubmit(onSubmit)} />
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
});

export default Paso1Screen;
