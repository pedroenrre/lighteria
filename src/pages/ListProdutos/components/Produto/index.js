import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import {
  FONT_FAMILY_SEMI_BOLD,
  FONT_SIZE_SMALL,
} from '../../../../styles/styles';

// import { Container } from './styles';

const Produto = ({ imagem, titulo, index }) => {
  return (
    <View
      style={[styles.containerProduto, index % 2 === 0 && { marginRight: 16 }]}>
      <Image source={imagem} resizeMode="contain" style={styles.imagem} />
      <Text style={styles.titulo}>{titulo}</Text>
    </View>
  );
};

export default Produto;

const styles = StyleSheet.create({
  containerProduto: {
    height: 168,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    flex: 1,
  },
  imagem: {
    flex: 1,
  },
  titulo: {
    marginTop: 8,
    fontFamily: FONT_FAMILY_SEMI_BOLD,
    fontSize: FONT_SIZE_SMALL,
    color: '#848486',
  },
});
