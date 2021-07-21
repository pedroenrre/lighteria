import React from 'react';
import { StyleSheet, View } from 'react-native';
import Background from './components/Background';
import DescricaoItem from './components/DescricaoItem';

// import { Container } from './styles';

const DetalhesProduto = ({ route }) => {
  const { id, imagem, titulo, estudio, itemName, itemDesc, preco } =
    route.params;
  return (
    <View style={styles.container}>
      <Background />
      <DescricaoItem
        id={id}
        imagem={imagem}
        titulo={titulo}
        estudio={estudio}
        itemName={itemName}
        itemDesc={itemDesc}
        preco={preco}
      />
    </View>
  );
};

export default DetalhesProduto;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
