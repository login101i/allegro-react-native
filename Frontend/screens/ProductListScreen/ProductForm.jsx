import React, { useState } from "react";
import { Text, View, TextInput, StyleSheet, Pressable } from "react-native";
import { sharedStyles } from "./sharedStyles";

export function ProductForm({ onAdd, updateErrorMessage }) {
  const [name, setName] = useState("");
  const [adding, setAdding] = useState(false);

  async function handleAdd() {
    setAdding(true);
    await onAdd(name);
    setName("");
    setAdding(false);
  }

  return (
    <>
      <View style={styles.addRow}>
        <TextInput
          placeholder="New restaurant name"
          value={name}
          onChangeText={setName}
          style={styles.newProductNameField}
        />
        <Pressable
          testID="add-button"
          disabled={adding}
          style={[sharedStyles.button, styles.addButton]}
          onPress={handleAdd}
        >
          <Text style={adding && sharedStyles.buttonTextDisabled}>
            {adding ? "Adding…" : "Add"}
          </Text>
        </Pressable>
      </View>
      {updateErrorMessage && (
        <Text style={[styles.message, styles.error]}>{updateErrorMessage}</Text>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  addRow: {
    flexDirection: "row",
    padding: 8
  },
  newProductNameField: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 4
  },
  addButton: {
    marginLeft: 8
  }
});
