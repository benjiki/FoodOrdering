import { StyleSheet, Image, FlatList } from "react-native";

import EditScreenInfo from "@/src/components/EditScreenInfo";
import { Text, View } from "@/src/components/Themed";
import products from "@/assets/data/products";
import Colors from "@/src/constants/Colors";
import ProductListItem from "@/src/components/ProductListItem";
const product = products[0];

export default function TabOneScreen() {
  return (
    <View>
      {/* {products.map((product, index) => (
        <ProductListItem key={index} product={product} />
      ))} */}
      <FlatList
        data={products}
        renderItem={({ item }) => <ProductListItem product={item} />}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        contentContainerStyle={{ gap: 10, padding: 10 }}
        columnWrapperStyle={{ gap: 10 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
