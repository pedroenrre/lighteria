import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

// import { Container } from './styles';

const Sacola = () => {
  return (
    <View style={styles.containerSacola}>
      <Image
        source={require('../../assets/images/icone-sacola.png')}
        style={styles.image}
      />
    </View>
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
});
