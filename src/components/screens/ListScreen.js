import React, { useState, useMemo } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';
import { useCart } from './CartContext';

const ListScreen = ({ navigation }) => {
  const { items, removeItem } = useCart();
  const [searchQuery, setSearchQuery] = useState('');

  // Filtra os itens com base na busca
  const filteredItems = items.filter((item) =>
    item.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Finaliza o pagamento removendo todos os itens
  const handlePayment = () => {
    // Para limpar o carrinho, podemos chamar removeItem para cada item
    items.forEach((item) => removeItem(item.id));
    // Navega para a tela inicial após o pagamento
    navigation.navigate('Início');
  };

  // Calcula o total da lista
  const total = useMemo(
    () => items.reduce((sum, item) => sum + item.total, 0),
    [items]
  );

  // Renderiza cada item da lista
  const renderCartItem = ({ item }) => (
    <View style={styles.cartItem}>
      <View style={styles.itemHeader}>
        <Text style={styles.itemCategory}>{item.category}</Text>
        <TouchableOpacity onPress={() => removeItem(item.id)}>
          <Text style={styles.removeText}>Remover</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.itemDetails}>
        <Text style={styles.itemTotal}>$ {item.total.toFixed(2)}</Text>
        <Text style={styles.itemCount}>{item.items} itens</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Compras</Text>

      {/* Barra de busca */}
      <View style={styles.searchContainer}>
        <Image source={require('../../../assets/icon-search.png')} style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Buscar na lista..."
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>

      {items.length > 0 ? (
        <>
          {/* Lista de itens */}
          <FlatList
            data={filteredItems}
            renderItem={renderCartItem}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.cartListContent}
            showsVerticalScrollIndicator={false}
          />

          {/* Rodapé com total e botão */}
          <View style={styles.footer}>
            <View style={styles.totalContainer}>
              <Text style={styles.totalLabel}>Total a pagar</Text>
              <Text style={styles.totalValue}>$ {total.toFixed(2)}</Text>
            </View>

            <TouchableOpacity style={styles.payButton} onPress={handlePayment}>
              <Text style={styles.payButtonText}>Realizar Pagamento</Text>
            </TouchableOpacity>
          </View>
        </>
      ) : (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>Sua lista de compras está vazia.</Text>
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

  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 12,
    paddingHorizontal: 12,
    marginBottom: 20,
  },
  searchIcon: {
    width: 20,
    height: 20,
    tintColor: '#888',
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 10,
    color: '#333',
  },

  cartListContent: { paddingBottom: 20 },

  cartItem: {
    backgroundColor: '#f8f8f8',
    padding: 15,
    borderRadius: 8,
    marginBottom: 12,
  },
  itemHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  itemCategory: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  removeText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#E53935', // Cor vermelha para remover
  },
  itemDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itemTotal: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  itemCount: {
    fontSize: 14,
    color: '#666',
  },

  footer: { paddingVertical: 20 },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  totalLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  totalValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#4CAF50',
  },
  payButton: {
    backgroundColor: '#7785DB',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  payButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
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

export default ListScreen;
