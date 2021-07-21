import React from 'react';
import { View, FlatList } from 'react-native';

import Cabecalho from './components/Cabecalho';
import Produto from './components/Produto';
import { DATA } from '../../utils/data';

const ListProdutos = () => {
  return (
    <FlatList
      style={{ paddingHorizontal: 24 }}
      numColumns={2}
      data={DATA}
      renderItem={({ item, index }) => <Produto {...item} index={index} />}
      keyExtractor={item => item.id}
      ListHeaderComponent={<Cabecalho />}
      ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
    />
  );
};

export default ListProdutos;
