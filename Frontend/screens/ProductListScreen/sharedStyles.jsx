import { StyleSheet } from "react-native";

export const sharedStyles = StyleSheet.create({
  button: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 8,
    paddingVertical: 4,
    backgroundColor: "#eee"
  },
  buttonTextDisabled: {
    color: "#999"
  }
});
