import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {FlatList, Image, Pressable, StatusBar, StyleSheet} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {produsSlice} from '../store/produsSlice';

const ProductsScreen = () => {
  const nav = useNavigation();
  const products = useSelector(state => state.produs.produs);

  const dispatch = useDispatch();

  return (
    <>
      <StatusBar barStyle={'dark-content'} backgroundColor={'white'} />
      <FlatList
        data={products}
        renderItem={({item}) => (
          <Pressable
            onPress={() => {
              dispatch(produsSlice.actions.seteazaProdusSelectat(item.id));
              nav.navigate('Product Detail');
            }}
            style={styles.itemContainer}>
            <Image source={{uri: item.image}} style={styles.image} />
          </Pressable>
        )}
        numColumns={2}
      />
    </>
  );
};

export default ProductsScreen;

const styles = StyleSheet.create({
  itemContainer: {
    width: '50%',
    padding: 1,
  },
  image: {
    width: '100%',
    aspectRatio: 1,
  },
});
