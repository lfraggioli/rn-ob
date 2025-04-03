import React from "react";
import { View, Text, Button, StyleSheet, Switch } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { step4Schema, Step4Data } from "../schemas/step-4-schema";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { OnboardingStackParamList } from "../../../navigation/onboarding-navigator";
import { useFormContext } from "../context/form-context";
import CheckBoxField from "../../../components/checkbox";
type Props = NativeStackScreenProps<OnboardingStackParamList, "Paso4">;

const Paso4Screen = ({ navigation }: Props) => {
  const { formData, updateFormData } = useFormContext();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<Step4Data>({
    resolver: zodResolver(step4Schema),
    defaultValues: {
      aceptaTerminos: formData.aceptaTerminos || false,
    },
  });

  const onSubmit = (data: Step4Data) => {
    updateFormData(data);
    console.log("✔️ Paso 4 completado:", { ...formData, ...data });
    // Aquí podrías continuar o finalizar
  };

  return (
    <View style={styles.container}>
      <Controller
        control={control}
        name="aceptaTerminos"
        render={({ field }) => (
          <CheckBoxField
            label="Acepto los términos y condiciones"
            value={field.value}
            onChange={field.onChange}
          />
        )}
      />
      {errors.aceptaTerminos && (
        <Text style={styles.error}>{errors.aceptaTerminos.message}</Text>
      )}

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
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  checkboxLabel: {
    marginLeft: 10,
    fontSize: 16,
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

export default Paso4Screen;
