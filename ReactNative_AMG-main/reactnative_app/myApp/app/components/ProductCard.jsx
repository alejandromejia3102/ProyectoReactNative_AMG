import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const ProductCard = ({item}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity 
    onPress={() =>{
      navigation.navigate("PRODUCT_DETAILS", {item})
    }}
    style={styles.container}>
      <Image source={{ uri: item.imagen }} style={styles.img}/>
      
        <Text style={styles.name}>{item.nombre}</Text>
        <Text style={styles.name}>$ {item.precio}</Text>
    </TouchableOpacity>
  )
}

export default ProductCard

const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
        alignItems: 'center',
        flexDirection: 'column',
        margin: 10,
        width: "45%"
      },
      img: {
        width: '100%',
        height: 150, 
        marginBottom: 5, 
      },
      info: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%"
      },
      name:{
        fontSize: 15,
        color: "white",
        fontFamily: "Jost_400Regular"
      },
})