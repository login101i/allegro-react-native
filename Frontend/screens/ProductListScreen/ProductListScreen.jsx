import React, { useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { ProductForm } from "./ProductForm";
import { ProductRow } from "./ProductRow";
import api from "./api";

export default function ProductListScreen({
  // products,
  loading,
  loadError,
  reloadProducts
}) {
  // const [name, setName] = useState("");
  // const [updateErrorMessage, setUpdateErrorMessage] = useState(null);
  // const [adding, setAdding] = useState(false);
  // const [deleting, setDeleting] = useState(false);

  // if (loading) {
  //   return <Text style={styles.message}>Loading…</Text>;
  // }
  // if (loadError) {
  //   return (
  //     <Text style={[styles.message, styles.error]}>
  //       An error occurred while loading the restaurants{" "}
  //     </Text>
  //   );
  // }
  // return (
  //   <>
  //     <View style={styles.container}>
  //       <View style={styles.addRow}>
  //         <TextInput
  //           placeholder="New restaurant name"
  //           onChangeText={setName}
  //           style={styles.newRestaurantNameField}
  //         />
  //         <Pressable
  //           testID="add-button"
  //           style={[styles.button, styles.addButton]}
  //           disabled={adding}
  //           onPress={() => {
  //             setAdding(true);

  //             api
  //               .post("/restaurants", { name })
  //               .then(() => reloadProducts())
  //               .then(() => setName(""));
  //             setAdding(false);
  //             setName("").catch(() => {
  //               setUpdateErrorMessage("An error occurred adding the product");
  //             });
  //           }}
  //         >
  //           <Text style={adding && styles.buttonTextDisabled}>
  //             {adding ? "Adding…" : "Add"}
  //           </Text>
  //         </Pressable>
  //         {updateErrorMessage && (
  //           <Text style={[styles.message, styles.error]}>
  //             {updateErrorMessage}
  //           </Text>
  //         )}
  //       </View>
  //       <FlatList
  //         data={products}
  //         keyExtractor={(product) => product.id}
  //         renderItem={({ item: restaurant }) => (
  //           <View style={styles.restaurantRow}>
  //             <Text style={styles.restaurantName}>{product.name}</Text>
  //             <Pressable
  //               style={styles.button}
  //               testID="delete-button"
  //               disabled={deleting}
  //               onPress={() => {
  //                 setDeleting(true);
  //                 api
  //                   .delete(`/restaurants/${products.id}`)
  //                   .then(() => reloadProducts());
  //                 setDeleting(false).catch(() =>
  //                   setUpdateErrorMessage(
  //                     "An error occurred deleting the product"
  //                   )
  //                 );
  //               }}
  //             >
  //               <Text>{deleting ? "Deleting" : "Delete"}</Text>
  //             </Pressable>
  //           </View>
  //         )}
  //       />
  //     </View>
  //   </>
  // );
  const [updateErrorMessage, setUpdateErrorMessage] = useState(null);

  const products = [
    { id: 1, name: "Snickers" },
    { id: 2, name: "Milky Way" }
  ];
  async function handleAdd(name) {
    try {
      await api.post("/products", { name });
      await reloadProducts();
    } catch {
      setUpdateErrorMessage("An error occurred adding the restaurant");
    }
  }

  async function handleDelete(product) {
    try {
      await api.delete(`/restaurants/${product.id}`);
      await reloadProducts();
    } catch (e) {
      setUpdateErrorMessage("An error occurred deleting the restaurant");
      throw e;
    }
  }

  if (loading) {
    return <Text style={styles.message}>Loading…</Text>;
  }

  if (loadError) {
    return (
      <Text style={[styles.message, styles.error]}>
        An error occurred while loading the restaurants
      </Text>
    );
  }

  return (
    <>
      <View style={styles.container}>
        <ProductForm
          onAdd={handleAdd}
          updateErrorMessage={updateErrorMessage}
        />
        <FlatList
          data={products}
          keyExtractor={(product) => product.id}
          renderItem={({ item: product }) => (
            <ProductRow
              product={product}
              onDelete={() => handleDelete(product)}
            />
          )}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  message: {
    fontSize: 18,
    padding: 8
  }
});
