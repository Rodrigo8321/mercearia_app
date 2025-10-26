import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import { categories } from '../data/MockData';
import Feather from '@react-native-vector-icons/feather';

const SearchScreen = ({ route, navigation }) => {
  const [searchQuery, setSearchQuery] = useState('');

  // Filtra as categorias com base na busca
  const filteredCategories = categories.filter((category) =>
    category.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Verifica se a navegação passou um parâmetro de categoria
  useEffect(() => {
    if (route.params?.category) {
      setSearchQuery(route.params.category);
    }
  }, [route.params?.category]);

  const renderCategory = ({ item }) => (
    <TouchableOpacity
      style={[styles.categoryCard, { backgroundColor: item.color }]}
      onPress={() => setSearchQuery(item.name)}
    >
      <View style={styles.categoryContent}>
        <Image source={item.image} style={styles.categoryImage} />
        <Text style={styles.categoryText}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Cabeçalho */}
      <View style={styles.header}>
        <View style={styles.locationContainer}>
          {/* Botão Voltar */}
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Feather name="arrow-left" size={24} color="#333" style={styles.icon} />
          </TouchableOpacity>
          <Text style={styles.location}>Taboão da Serra, SP</Text>
          <TouchableOpacity
            style={styles.userIcon}
            onPress={() => {}}
          >
            <Image source={require('../../../assets/user-profile.png')} style={styles.userImage} />
          </TouchableOpacity>
        </View>
      </View>

      {/* Barra de busca */}
      <View style={styles.searchContainer}>
        <Image source={require('../../../assets/icon-search.png')} style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Buscar produtos..."
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>

      {/* Lista de categorias */}
      <FlatList
        data={filteredCategories}
        renderItem={renderCategory}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={styles.categoriesGrid}
        contentContainerStyle={styles.categoriesContainer}
        showsVerticalScrollIndicator={false}
      />

      {/* Botão de exemplo para navegar para o Carrinho */}
      <TouchableOpacity
        style={styles.navButton}
        onPress={() => navigation.navigate('Carrinho')}
      >
        <Text style={styles.navButtonText}>Ir para o Carrinho</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 16 },

  header: { marginTop: 30, marginBottom: 30 },

  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  icon: {
    width: 20,
    height: 24,
    marginRight: 8,
  },
  location: {
    flex: 0.9,
    marginTop: 20,
    fontSize: 14,
    fontWeight: 'bold',
    color: '#050609',
  },
  userIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  userImage: {
    width: '100%',
    height: '100%',
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
  },

  categoriesContainer: { paddingBottom: 20 },
  categoriesGrid: {
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  categoryCard: {
    flex: 0.48,
    padding: 15,
    borderRadius: 12,
    justifyContent: 'center',
    minHeight: 80,
  },
  categoryContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  categoryImage: {
    width: 55,
    height: 55,
    resizeMode: 'contain',
    marginRight: 8,
  },
  categoryText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
  },
  navButton: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  navButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default SearchScreen;
