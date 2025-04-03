import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";

type Option = {
  label: string;
  value: string;
};

type SelectProps = {
  label: string;
  selectedValue: string;
  options: Option[];
  onValueChange: (value: string) => void;
};

export const Select = ({
  label,
  selectedValue,
  options,
  onValueChange,
}: SelectProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <Picker
        selectedValue={selectedValue}
        onValueChange={(itemValue) => onValueChange(itemValue)}
        style={styles.picker}
      >
        {options.map((option) => (
          <Picker.Item
            key={option.value}
            label={option.label}
            value={option.value}
          />
        ))}
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  label: {
    marginBottom: 8,
    fontWeight: "bold",
    fontSize: 16,
  },
  picker: {
    backgroundColor: "#f7f7f7",
    borderRadius: 8,
  },
});
