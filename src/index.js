import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import ListProdutos from './pages/ListProdutos';
import DetalhesProduto from './pages/DetalhesProduto';
import { Checkout } from './pages/Checkout';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from './provider';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Provider>
        <SafeAreaView style={styles.background}>
          <Stack.Navigator
            initialRouteName="ListProdutos"
            screenOptions={{ headerShown: false }}>
            <Stack.Screen name="ListProdutos" component={ListProdutos} />
            <Stack.Screen name="DetalhesProduto" component={DetalhesProduto} />
            <Stack.Screen name="Checkout" component={Checkout} />
          </Stack.Navigator>
        </SafeAreaView>
      </Provider>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#f4f0f4',
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
