import React, { useState, useMemo } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import Feather from '@react-native-vector-icons/feather';
import { useCart } from './CartContext';

const CartScreen = ({ navigation }) => {
  // Usa o estado e as funções do contexto global
  const { items, removeItem } = useCart();

  // Calcula o total do carrinho
  const total = useMemo(
    () => items.reduce((sum, item) => sum + item.total, 0),
    [items]
  );

  // Renderiza cada item do carrinho
  const renderCartItem = ({ item }) => (
    <View style={styles.cartItem}>
      <View style={styles.itemHeader}>
        {/* Imagem do produto */}
        <View style={[styles.imageWrapper, { backgroundColor: item.bgColor }]}>
          <Image source={item.image} style={styles.image} />
        </View>

        {/* Informações do produto */}
        <View style={styles.itemInfo}>
          <Text style={styles.category}>{item.category}</Text>
          <View style={styles.priceRow}>
            <Text style={styles.total}>$ {item.total.toFixed(2)}</Text>
            <Text style={styles.count}>{item.items} itens</Text>
          </View>
        </View>

        {/* Botão de edição */}
        <TouchableOpacity
          style={styles.editButton}
          onPress={() => removeItem(item.id)}
        >
          <Feather name="trash-2" size={16} color="#E53935" />
          <Text style={styles.removeText}>Remover</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Meu carrinho</Text>

      {items.length > 0 ? (
        <>
          {/* Lista de itens */}
          <FlatList
            data={items}
            renderItem={renderCartItem}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.listContent}
            showsVerticalScrollIndicator={false}
          />

          {/* Rodapé com total e botão */}
          <View style={styles.footer}>
            <View style={styles.totalRow}>
              <Text style={styles.totalLabel}>Total a pagar</Text>
              <Text style={styles.totalValue}>$ {total.toFixed(2)}</Text>
            </View>

            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('Início')}
            >
              <Text style={styles.buttonText}>Acrescentar Produtos</Text>
            </TouchableOpacity>
          </View>
        </>
      ) : (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>Seu carrinho está vazio.</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Início')}>
            <Text style={styles.browseText}>Comece a comprar</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 16 },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 100,
    marginBottom: 20,
    color: '#333',
  },
  listContent: { paddingBottom: 20 },
  cartItem: {
    padding: 15,
    borderRadius: 10,
    marginBottom: 12,
    backgroundColor: '#f9f9f9',
  },
  itemHeader: { flexDirection: 'row', alignItems: 'center' },
  imageWrapper: {
    width: 70,
    height: 70,
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  image: { width: 40, height: 40, resizeMode: 'contain' },
  itemInfo: { flex: 1 },
  category: { fontSize: 16, fontWeight: 'bold', color: '#333' },
  priceRow: { flexDirection: 'row', marginTop: 4 },
  total: { fontSize: 14, fontWeight: 'bold', color: '#333' },
  count: { fontSize: 14, color: '#666', marginLeft: 10 },
  editButton: { flexDirection: 'row', alignItems: 'center' },
  removeText: {
    marginLeft: 4,
    fontSize: 14,
    fontWeight: '500',
    color: '#E53935',
  },
  footer: { paddingVertical: 20 },
  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  totalLabel: { fontSize: 18, fontWeight: 'bold', color: '#333' },
  totalValue: { fontSize: 20, fontWeight: 'bold', color: '#4CAF50' },
  button: {
    backgroundColor: '#7785DB',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 18,
    color: '#666',
    marginBottom: 10,
  },
  browseText: {
    fontSize: 16,
    color: '#7785DB',
    fontWeight: 'bold',
  },
});

export default CartScreen;
