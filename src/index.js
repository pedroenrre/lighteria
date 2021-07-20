import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import ListProdutos from './pages/ListProdutos';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.background}>
        <Stack.Navigator
          initialRouteName="ListProdutos"
          screenOptions={{ headerShown: false }}>
          <Stack.Screen name="ListProdutos" component={ListProdutos} />
        </Stack.Navigator>
      </SafeAreaView>
    </NavigationContainer>
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
