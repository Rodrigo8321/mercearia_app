import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Imagem principal */}
      <View style={styles.imageContainer}>
        <Image
          source={require('../../../assets/main_image.png')}
          resizeMode="contain"
          style={styles.image}
        />
      </View>

      {/* Título */}
      <Text style={styles.title}>Entregamos mantimentos à sua porta</Text>

      {/* Descrição */}
      <Text style={styles.description}>
        A mercearia oferece vegetais e frutas frescas. Encomende itens frescos na mercearia.
      </Text>

      {/* Botão de início */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Main')}
      >
        <Text style={styles.buttonText}>INICIAR →</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },

  imageContainer: {
    marginBottom: 20,
  },
  image: {
    width: 320,
    height: 320,
    borderRadius: 10,
    alignSelf: 'center',
  },

  title: {
    fontSize: 36,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333',
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    color: '#666',
    lineHeight: 22,
    marginBottom: 30,
    paddingHorizontal: 10,
  },

  button: {
    backgroundColor: '#7785DB',
    paddingVertical: 18,
    paddingHorizontal: 60,
    borderRadius: 45,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default WelcomeScreen;
