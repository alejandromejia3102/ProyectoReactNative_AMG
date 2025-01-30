import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import React, { useContext } from 'react';
import { Header } from '../components/Header';
import CartProduct from '../components/CartProduct';
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const { carts } = useContext(CartContext);

  const totalPrice = carts.reduce((total, item) => total + item.precio * item.cantidad, 0);

  return (
    <View style={{ backgroundColor: 'black', flex: 1 }}>
      <Header />
      <Text style={styles.cartTitle}>YOUR CART</Text>
      <FlatList
        data={carts}
        keyExtractor={(item, index) => item.id.toString()}
        renderItem={({ item }) => <CartProduct item={item} />}
      />
      <TouchableOpacity style={styles.totalContainer}>
        <Text style={styles.totalText}>BUY NOW: ${totalPrice}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  cartTitle: {
    fontSize: 30,
    color: 'white',
    textAlign: 'center',
    marginVertical: 20,
    fontFamily: "Jost_400Regular"
  },
  totalContainer: {
    marginTop: 20,
    padding: 20,
    backgroundColor: '#E60026',
    alignItems: 'center',
    margin: 50
  },
  totalText: {
    fontSize: 20,
    fontFamily: "Jost_400Regular",
    color: 'white',
  },
});
