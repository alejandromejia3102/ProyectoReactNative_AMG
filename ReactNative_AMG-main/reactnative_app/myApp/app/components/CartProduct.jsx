import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { AntDesign, Foundation } from '@expo/vector-icons';
import { CartContext } from "../context/CartContext";
import React, { useContext } from 'react';

const CartProduct = ({ item }) => {
  const { addToCart } = useContext(CartContext);
  const { removeFromCart } = useContext(CartContext);
  const { removeProduct } = useContext(CartContext);

  return (
    <View style={styles.prodContainer}>
      <Image source={{ uri: item.imagen }} style={styles.img} />
      <View style={styles.infoContainer}>
        <View style={styles.infoHeader}>
          <Text style={styles.productName}>{item.nombre}</Text>
          <TouchableOpacity onPress={() => removeFromCart(item.id)}>
            <Foundation name="trash" size={25} color="white" />
          </TouchableOpacity>
        </View>
        <View style={styles.detailsContainer}>
          <View style={styles.cantidad}>
          <TouchableOpacity
              onPress={() => item.cantidad > 1 ? removeProduct(item.id) : null}
            >
              <AntDesign name="minussquare" size={25} color="gray" />
            </TouchableOpacity>
            <Text style={styles.textoCantidad}>{item.cantidad}</Text>
            <TouchableOpacity onPress={() => addToCart(item)}>
              <AntDesign name="plussquare" size={25} color="gray" />
            </TouchableOpacity>
          </View>
          <Text style={styles.price}>${item.precio}</Text>
        </View>
      </View>
    </View>
  );
};

export default CartProduct;

const styles = StyleSheet.create({
  prodContainer: {
    backgroundColor: "black",
    flexDirection: "row",
    padding: 10,
    marginVertical: 10,
    alignItems: "center",
    borderBottomWidth: 2,
    borderBottomColor: "white"
  },
  img: {
    width: 100,
    height: 100,
    marginRight: 10,
  },
  infoContainer: {
    flex: 1,
    justifyContent: "space-between",
  },
  infoHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  productName: {
    fontSize: 18,
    fontFamily: "Jost_400Regular",
    color: "white",
  },
  detailsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cantidad: {
    flexDirection: "row",
    alignItems: "center",
  },
  textoCantidad: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
    marginHorizontal: 10,
  },
  price: {
    fontSize: 18,
    fontFamily: "Jost_400Regular",
    color: "white",
  },
});
