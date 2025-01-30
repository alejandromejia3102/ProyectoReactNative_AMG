import { StyleSheet, Text, View, TextInput, FlatList, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import { FIRESTORE } from '../../FirebaseConfig';
import { collection, getDocs } from 'firebase/firestore';
import ProductCard from '../components/ProductCard';
import { Header } from '../components/Header';
import { Feather } from '@expo/vector-icons';

const Products = () => {
  const [data, setData] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  async function loadData() {
    try {
      const productsCollection = collection(FIRESTORE, 'Inventario');
      const productsSnapshot = await getDocs(productsCollection);
      const products = productsSnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
      setData(products);
      setFilteredData(products);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    loadData();
  }, []);

  const handleSearch = () => {
    const filtered = data.filter((item) => 
      item.nombre.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredData(filtered);
  };

  return (
    <View style={{ backgroundColor: "black", height: "100%" }}>
      <Header />
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Search"
          style={styles.textInput}
          placeholderTextColor="white"
          value={searchText}
          onChangeText={setSearchText}
        />
        <TouchableOpacity onPress={handleSearch}>
          <Feather name="search" size={20} color="white" style={styles.searchIcon} />
        </TouchableOpacity>
      </View>
      <FlatList
        data={filteredData}
        renderItem={({ item }) => <ProductCard item={item} />}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
        numColumns={2}
      />
    </View>
  );
};

export default Products;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'black',
    paddingHorizontal: 15,
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: "white",
    marginBottom: 20
  },
  textInput: {
    flex: 1,
    color: "white",
    fontSize: 17,
    fontFamily: "Jost_400Regular"
  },
});
