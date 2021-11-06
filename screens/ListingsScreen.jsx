import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";

import AppButton from "../components/AppButton";
import Card from "../components/Card";
import Screen from "../screens/Screen";
import SimpleText from "../components/SimpleText";
import ActivityIndicator from "../components/ActivityIndicator";

export default function ListingScreen({ navigation }) {
  const [loading, setLoading] = useState(true);

  const loadList = () => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  };

  useEffect(() => {
    loadList();
  }, []);

  const listings=[
      {
          id:1,
          title:"Kurtka skórzana",
          price:"199",
          image:require('../assets/images/ethereum.png')
      },
       {
          id:2,
          title:"Kurtka z lisa",
          price:"1199",
          image:require('../assets/images/ethereum.png')
      }
  ]

  return (
    <>
      <ActivityIndicator visible={loading} />
      <Screen style={styles.screen}>
        <FlatList data={listings} keyExtractor={(item) => item.id.toString()} renderItem={({ item }) =>
         <Card 
         title={item.title} 
         subTitle={item.price + " zł"} 
         image={item.image} 
         />} />
         
      </Screen>
    </>
  );
}

const styles = StyleSheet.create({
    screen:{
        padding:20,
    }
});

// props thumbnail =item.images[0].thumbnailUrl
// props imageUri =item.images[0].uri

// import { Image } from 'react-expo-image-case'

// <Image
// uri={imageUri}
// preview={{uri:thumbnailUrl}}
// style={styles.image}
// tint="light"
// />
