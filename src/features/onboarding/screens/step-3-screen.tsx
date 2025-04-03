import React, { useEffect } from "react";
import { View, Button, StyleSheet, Text } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { step3Schema, Step3Data } from "../schemas/step-3-schema";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { OnboardingStackParamList } from "../../../navigation/onboarding-navigator";
import { useFormContext } from "../context/form-context";
import { Select } from "../../../components/select";

type Props = NativeStackScreenProps<OnboardingStackParamList, "Paso3">;

const opcionesGenero = [
  { label: "Seleccionar género...", value: "" },
  { label: "Masculino", value: "masculino" },
  { label: "Femenino", value: "femenino" },
  { label: "Otro", value: "otro" },
];

const Paso3Screen = ({ navigation }: Props) => {
  const { formData, updateFormData } = useFormContext();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<Step3Data>({
    resolver: zodResolver(step3Schema),
    defaultValues: {
      genero: formData.genero || undefined,
    },
  });

  const onSubmit = (data: Step3Data) => {
    updateFormData(data);
    console.log("🎉 Paso 3 completado:", { ...formData, ...data });
    // Aquí podrías navegar a Paso4, o mostrar pantalla de confirmación
    navigation.navigate("Paso4");
  };

  return (
    <View style={styles.container}>
      <Controller
        control={control}
        name="genero"
        render={({ field }) => (
          <Select
            label="Género"
            selectedValue={field.value}
            onValueChange={field.onChange}
            options={opcionesGenero}
          />
        )}
      />
      {errors.genero && (
        <Text style={styles.error}>{errors.genero.message}</Text>
      )}

      <View style={styles.buttonGroup}>
        <Button title="Atrás" onPress={() => navigation.goBack()} />
        <Button title="Continuar" onPress={handleSubmit(onSubmit)} />
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

export default Paso3Screen;
