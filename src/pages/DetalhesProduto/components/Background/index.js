import React from 'react';
import {
  View,
  ImageBackground,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Sacola from '../../../../components/Sacola';
// import { Container } from './styles';

const Background = () => {
  const imgSrc = require('../../../../assets/images/bgimg.jpg');
  const navigation = useNavigation();
  return (
    <View style={styles.imgContainer}>
      <ImageBackground
        resizeMode="cover"
        source={imgSrc}
        style={styles.imagemFundo}>
        <View style={styles.headerContainer}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              source={require('../../../../assets/images/flecha-esquerda.png')}
              style={styles.imageArrow}
            />
          </TouchableOpacity>
          <Sacola />
        </View>
      </ImageBackground>
    </View>
  );
};

export default Background;

const styles = StyleSheet.create({
  imgContainer: {
    flex: 3,
  },
  imagemFundo: {
    width: Dimensions.get('window').width,
    height: '100%',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 16,
    marginHorizontal: 16,
  },
  imageArrow: {
    width: 24,
    height: 24,
  },
});
