import React, { useContext } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { DataContext } from '../../provider';
import { WHITE } from '../../styles/styles';
import { useNavigation } from '@react-navigation/native';
// import { Container } from './styles';

const Sacola = () => {
  const navigation = useNavigation();
  const { itensCheckout } = useContext(DataContext);
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Checkout')}
      style={styles.containerSacola}>
      <Image
        source={require('../../assets/images/icone-sacola.png')}
        style={styles.image}
      />
      {itensCheckout.length > 0 ? (
        <View style={styles.containerQuantidade}>
          <Text style={styles.textoQuantidade}>
            {itensCheckout.reduce(
              (acumulado, atual) => acumulado + atual.quantidade,
              0,
            )}
          </Text>
        </View>
      ) : null}
    </TouchableOpacity>
  );
};

export default Sacola;

const styles = StyleSheet.create({
  containerSacola: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 30,
  },
  image: {
    height: 30,
    width: 30,
  },
  containerQuantidade: {
    backgroundColor: 'red',
    borderRadius: 15,
    width: 30,
    height: 30,
    zIndex: 5,
    position: 'absolute',
    right: 8,
    bottom: 8,
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0.9,
  },
  textoQuantidade: {
    textAlign: 'center',
    color: WHITE,
  },
});
