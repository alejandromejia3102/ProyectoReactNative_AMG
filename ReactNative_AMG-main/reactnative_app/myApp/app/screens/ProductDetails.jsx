import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React, { useContext, useState } from 'react';
import { Header } from '../components/Header';
import { useNavigation, useRoute } from '@react-navigation/native';
import { CartContext } from '../context/CartContext';

const sizes = ["S", "M", "L", "XL"];

const ProductDetails = () => {
  const navigation = useNavigation();
  const { addToCart } = useContext(CartContext);
  const route = useRoute();
  const { item } = route.params;

  const [selected, setSelected] = useState(null);

  const handleAddToCart = (item) => {
    addToCart(item);
    navigation.navigate("CART");
  };

  return (
    <View>
      <Header />
      <View style={styles.container}>
        <Image style={styles.img} source={{ uri: item.imagen }} />
      <Text style={styles.info}>{item.nombre}</Text>
      <Text style={styles.info}>${item.precio}</Text>
      <Text style={styles.info}>SIZE:</Text>
      <View style={styles.sizeContainer}>
        {sizes.map((size, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.sizeValueContainer,
              selected === size && styles.selectedSize,
            ]}
            onPress={() => setSelected(size)}
          >
            <Text style={styles.sizeValue}>{size}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <TouchableOpacity style={styles.Button} onPress={() => handleAddToCart(item)}>
        <Text style={styles.ButtonText}>ADD TO CART</Text>
      </TouchableOpacity>
      </View>
      
    </View>
  );
};

export default ProductDetails;

const styles = StyleSheet.create({
  img: {
    width: '100%',
    height: 300,
  },
  container: {
    backgroundColor: "black",
    height: "100%",
    padding: 15
  },
  sizeContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    marginBottom: 20,
  },
  sizeValueContainer: {
    margin: 5,
    backgroundColor: 'gray',
    paddingVertical: 7,
    paddingHorizontal: 12,
  },
  sizeValue: {
    fontSize: 18,
    color: 'white',
  },
  Button: {
    backgroundColor: 'red',
    paddingVertical: 10,
    paddingHorizontal: 30,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#ff5c5c',
  },
  ButtonText: {
    color: 'white',
    fontSize: 18,
  },
  selectedSize: {
    backgroundColor: 'red',
  },
  info:{
    color: "white",
    marginVertical: 10,
    fontSize: 17,
    fontFamily: "Jost_400Regular"
  }
});
