import React from 'react';
import { TouchableOpacity, Text, Image, StyleSheet } from 'react-native';
import {
  FONT_FAMILY_SEMI_BOLD,
  FONT_SIZE_SMALL,
} from '../../../../styles/styles';
import { useNavigation } from '@react-navigation/native';

// import { Container } from './styles';

const Produto = ({
  id,
  imagem,
  titulo,
  estudio,
  itemName,
  itemDesc,
  preco,
  index,
}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('DetalhesProduto', {
          id,
          imagem,
          titulo,
          estudio,
          itemName,
          itemDesc,
          preco,
        })
      }
      style={[styles.containerProduto, index % 2 === 0 && { marginRight: 16 }]}>
      <Image source={imagem} resizeMode="contain" style={styles.imagem} />
      <Text style={styles.titulo}>{titulo}</Text>
    </TouchableOpacity>
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
