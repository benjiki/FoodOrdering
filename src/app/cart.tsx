import { View, Text, FlatList } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { Platform, StyleSheet } from "react-native";
import { useCart } from "@/src/providers/CartProvider";
import CartListItem from "@/src/components/CartListItem";

const CartScreen = () => {
  const { items } = useCart();
  return (
    <View>
      <Text style={{ color: "white" }}>Cart Items Length:{items.length}</Text>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <CartListItem cartItem={item} />}
        contentContainerStyle={{ padding: 10, gap: 10 }}
      />
      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </View>
  );
};

export default CartScreen;
