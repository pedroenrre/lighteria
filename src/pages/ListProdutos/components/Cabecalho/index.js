import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Sacola from '../../../../components/Sacola';
import {
  COR_DE_FUNDO,
  FONT_FAMILY_EXTRA_BOLD,
  FONT_FAMILY_REGULAR,
  FONT_SIZE_MEDIUM,
  FONT_SIZE_XX_LARGE,
} from '../../../../styles/styles';

const Cabecalho = () => {
  return (
    <>
      <View style={styles.containerTitulo}>
        <Text style={styles.titulo}>Lighteria</Text>
        <Sacola />
      </View>
      <View>
        <View style={styles.separador} />
        <View style={styles.containerCategoria}>
          <Text style={styles.categoriaTexto}>Categorias</Text>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: COR_DE_FUNDO,
    paddingHorizontal: 24,
  },
  containerTitulo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 24,
  },
  titulo: {
    fontFamily: FONT_FAMILY_EXTRA_BOLD,
    fontSize: FONT_SIZE_XX_LARGE,
  },
  separador: {
    borderWidth: 0.5,
    borderColor: '#a1a5aa',
  },
  containerCategoria: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: -37,
  },
  categoriaTexto: {
    backgroundColor: COR_DE_FUNDO,
    padding: 24,
    color: '#a1a5aa',
    fontSize: FONT_SIZE_MEDIUM,
    fontFamily: FONT_FAMILY_REGULAR,
  },
});

export default Cabecalho;