import { useState, useEffect } from "react";

import { View, Text } from "react-native";
import React from "react";
import { TextInput } from "react-native-paper";
import { AppButton } from "../../components";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";

const CreateProductScreen = () => {
  const [range, setRange] = useState("false");
  const [shipping, setShipping] = useState(false);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(211);
  const [description, setDescription] = useState("random description3");
  const [category, setCategory] = useState("Elektronika");
  const [stock, setStock] = useState(2);
  const [images, setImages] = useState([]);
  const [name, setName] = useState("");
  const [seller, setSeller] = useState("amazon2");

  const navigation = useNavigation();

  const handleSubmit = async () => {
    if (!title) {
      alert("paste title of your product");
      return;
    }

    try {
      const { data } = await axios.post(
        "http://localhost:8000/api/admin/product/new",
        {
          title,
          price,
          description,
          category,
          seller,
          stock
        }
      );
      console.log(data);


      setTimeout(() => {
        alert("product posted");
        navigation.navigate("Start");
      }, 500);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <View>
      <Text>CreateProductScreen</Text>
      <TextInput
        label="Name"
        value={title}
        onChangeText={(title) => setTitle(title)}
      />

      <AppButton
        title="create product"
        smallLetters="uppercase"
        onPress={handleSubmit}
      />
    </View>
  );
};

export default CreateProductScreen;
