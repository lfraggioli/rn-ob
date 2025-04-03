import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import Animated, {
  useAnimatedStyle,
  withSpring,
  withTiming,
} from "react-native-reanimated";
type CheckBoxFieldProps = {
  label: string;
  value: boolean;
  onChange: (val: boolean) => void;
};

const CheckBoxField = ({ label, value, onChange }: CheckBoxFieldProps) => {
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: withSpring(value ? 1.1 : 1) }],
    backgroundColor: withTiming(value ? "#007AFF" : "#fff"),
    borderColor: withTiming(value ? "#007AFF" : "#333"),
  }));
  const checkStyle = useAnimatedStyle(() => ({
    opacity: withTiming(value ? 1 : 0),
  }));
  return (
    <Pressable onPress={() => onChange(!value)} style={styles.container}>
      <Animated.View style={[styles.checkbox, animatedStyle]}>
        <Animated.View style={checkStyle}>
          <MaterialIcons name="check" size={18} color="#fff" />
        </Animated.View>
      </Animated.View>
      <Text style={styles.label}>{label}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderWidth: 1.5,
    borderColor: "#333",
    borderRadius: 4,
    marginRight: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  checkboxChecked: {
    backgroundColor: "#007AFF",
    borderColor: "#007AFF",
  },
  label: {
    fontSize: 16,
  },
});

export default CheckBoxField;
