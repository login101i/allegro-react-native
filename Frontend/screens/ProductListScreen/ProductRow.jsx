import React, { useState } from "react";
import { Text, View, Pressable, StyleSheet } from "react-native";
import { sharedStyles } from "./sharedStyles";


export function ProductRow({ product, onDelete }) {
    const [deleting, setDeleting] = useState(false);

    async function handleDelete() {
      try {
        setDeleting(true);
        await onDelete();
      } catch {
        setDeleting(false);
      }
    }

    return (
      <View style={styles.productRow}>
        <Text style={styles.productName}>{product.name}</Text>
        <Pressable
          style={sharedStyles.button}
          onPress={handleDelete}
          disabled={deleting}
          testId="delete-button"
        >
          <Text style={deleting && sharedStyles.buttonTextDisabled}>
            {deleting ? "Deleting.." : "Delete"}
          </Text>
        </Pressable>
      </View>
    );
  }

  

  
const styles = StyleSheet.create({
 
   
    productRow: {
      borderBottomWidth: 1,
      borderColor: "#ccc",
      padding: 8,
      display:"flex",
      flexDirection: "row",
    },
    productName: {
      fontSize: 18,
      flex:1,
    }
  });
  
