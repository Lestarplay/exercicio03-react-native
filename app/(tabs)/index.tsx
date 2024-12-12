import React from 'react';
import { View, Text, Image, StyleSheet, Button } from 'react-native';

export default function ProductCard() {
  return (
    <View style={styles.card}>
      <Image 
        source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbvdMHze0ohMtIXNBv4h6-se6QoP0MMtkiig&s' }} 
        style={styles.productImage} 
      />
      <Text style={styles.productName}>Biscoito Amanteigado Sabor Leite com Gotas Chocolate Bauducco - 335g</Text>
      <Text style={styles.productPrice}><b>R$ 8,00</b></Text>
      <Button title="Comprar" onPress={() => alert('Produto adicionado ao carrinho')} />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    margin: 20,
  },
  productImage: {
    width: 150,
    height: 150,
    borderRadius: 10,
    marginBottom: 15,
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'center',
  },
  productPrice: {
    fontSize: 16,
    color: '#FF0000',
    marginBottom: 10,
    textAlign: 'center',
  },
});
