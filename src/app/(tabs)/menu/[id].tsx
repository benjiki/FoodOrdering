import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Stack, useLocalSearchParams } from "expo-router";
import Colors from "../../../constants/Colors";

export default function ProductDetailScreen() {
  const { id } = useLocalSearchParams();
  return (
    <View>
      <Stack.Screen options={{ title: "Details" }} />
      <Text style={styles.text}>ProductDetailScreen for id:{id}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    color: Colors.light.tint,
  },
});
