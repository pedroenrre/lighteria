import React from 'react';
import { View, SafeAreaView, Text, StyleSheet, Image } from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={styles.background}>
      <View style={styles.containerTitulo}>
        <Text style={styles.titulo}>LIGHTERIA</Text>
        <View style={styles.containerSacola}>
          <Image
            source={require('./assets/images/icone-sacola.png')}
            style={styles.image}
          />
        </View>
      </View>
      <View>
        <View style={styles.separador} />
        <View style={styles.containerCategoria}>
          <Text style={styles.categoriaTexto}>Categorias</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#f4f0f4',
    paddingHorizontal: 24,
  },
  containerTitulo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 24,
  },
  titulo: {
    fontFamily: 'OpenSans-ExtraBold',
    fontSize: 28,
  },
  containerSacola: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 30,
  },
  image: {
    height: 30,
    width: 30,
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
    backgroundColor: '#f4f0f4',
    padding: 24,
    color: '#a1a5aa',
    fontSize: 16,
    fontFamily: 'OpenSans-Regular',
  },
});

export default App;
