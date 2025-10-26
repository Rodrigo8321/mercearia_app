import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import { categories, previousPurchases } from '../data/MockData';

const HomeScreen = ({ navigation }) => {
  const renderCategory = ({ item }) => (
    <TouchableOpacity
      style={[styles.categoryCard, { backgroundColor: item.color }]}
      onPress={() => navigation.navigate('Buscar', { category: item.name })}
    >
      <Image source={item.image} style={styles.categoryImage} resizeMode="contain" />
      <Text style={styles.categoryText}>{item.name}</Text>
    </TouchableOpacity>
  );

  const renderPurchase = ({ item }) => (
    <View style={styles.purchaseItem}>
      {/* Ícone + Nome + Data */}
      <View style={styles.purchaseLeft}>
        <View style={[styles.purchaseImageWrapper, { backgroundColor: item.bgColor }]}>
          <Image source={item.image} style={styles.purchaseImage} />
        </View>
        <View>
          <Text style={styles.purchaseCategory}>{item.category}</Text>
          <Text style={styles.purchaseDate}>{item.date}</Text>
        </View>
      </View>

      {/* Preço + Itens */}
      <View style={styles.purchaseRight}>
        <Text style={styles.purchaseTotal}>$ {item.total.toFixed(2)}</Text>
        <Text style={styles.purchaseItems}>{item.items} itens</Text>
      </View>
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      {/* Cabeçalho */}
      <View style={styles.header}>
        <View style={styles.locationContainer}>
          <Image source={require('../../../assets/map-pin.png')} style={styles.mapPinIcon} />
          <Text style={[styles.location, { flex: 0.85 }]}>Taboão da Serra, SP</Text>
          <TouchableOpacity
            style={styles.userIcon}
            onPress={() => {}}
          >
            <Image source={require('../../../assets/user-profile.png')} style={styles.userImage} />
          </TouchableOpacity>
        </View>
        <Text style={styles.greeting}>Seja bem-vindo,</Text>
        <Text style={styles.subtitle}>Vamos pedir itens fresquinhos para você?</Text>
      </View>

      {/* Categorias */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Categorias</Text>
        <FlatList
          data={categories}
          renderItem={renderCategory}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.categoriesList}
        />
      </View>

      {/* Minhas Compras */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Minhas Compras</Text>
        <FlatList
          data={previousPurchases}
          renderItem={renderPurchase}
          keyExtractor={(item) => item.id}
          scrollEnabled={false}
        />
      </View>
    </ScrollView>
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
  location: {
    marginTop: 20,
    fontSize: 14,
    fontWeight: 'bold',
    color: '#050609',
  },
  mapPinIcon: {
    marginTop: 20,
    width: 20,
    height: 20,
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
  greeting: {
    marginTop: 20,
    fontSize: 14,
    color: '#828B93',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#050609',
  },

  section: { marginBottom: 30 },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
  },

  categoriesList: { paddingRight: 16 },
  categoryCard: {
    width: 90,
    height: 100,
    borderRadius: 12,
    marginRight: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryImage: {
    width: 60,
    height: 60,
    marginBottom: 8,
  },
  categoryText: {
    fontSize: 14,
    textAlign: 'center',
    color: '#333',
    fontWeight: 'bold',
  },

  purchaseItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    backgroundColor: '#f9f9f9',
  },

  purchaseLeft: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  purchaseImageWrapper: {
    width: 52,
    height: 52,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  purchaseImage: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  purchaseCategory: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  purchaseDate: {
    fontSize: 11,
    color: '#666',
  },
  purchaseRight: {
    alignItems: 'flex-end',
  },
  purchaseTotal: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#4CAF50',
  },
  purchaseItems: {
    fontSize: 11,
    color: '#666',
  },
});

export default HomeScreen;
