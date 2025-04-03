import React from "react";
import { TextInput, StyleSheet, TextInputProps } from "react-native";

export const FormInput = (props: TextInputProps) => {
  return <TextInput style={[styles.input, props.style]} {...props} />;
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
  },
});
