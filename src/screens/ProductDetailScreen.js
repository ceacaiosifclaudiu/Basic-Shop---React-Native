import {
  StyleSheet,
  View,
  Text,
  Image,
  StatusBar,
  ScrollView,
  FlatList,
  useWindowDimensions,
  Pressable,
} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {cartSlice} from '../store/cartSlice';

const ProductDetailScreen = () => {
  const {width, height} = useWindowDimensions();
  const product = useSelector(state => state.produs.produsSelectat);
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(cartSlice.actions.addToCart({product}));
  };

  return (
    <>
      <StatusBar barStyle={'dark-content'} backgroundColor={'white'} />
      <ScrollView style={{marginBottom: 85}}>
        {/* Carousel with images */}
        <FlatList
          data={product.images}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => (
            <Image source={{uri: item}} style={{width, aspectRatio: 1}} />
          )}
        />
        <View style={{padding: 20}}>
          {/* Title */}
          <Text style={styles.title}>{product.name}</Text>

          {/* Price */}
          <Text style={styles.price}>${product.price}</Text>
        </View>
      </ScrollView>

      {/* Add to cart button */}
      <Pressable
        style={({pressed}) => [
          {
            backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'black',
          },
          styles.button,
        ]}
        onPress={addToCart}>
        <Text style={styles.buttonText}>Add to cart</Text>
      </Pressable>
    </>
  );
};

export default ProductDetailScreen;

const styles = StyleSheet.create({
  title: {
    fontSize: 34,
    fontWeight: '500',
    marginVertical: 10,
  },
  price: {
    fontWeight: '500',
    fontSize: 16,
    letterSpacing: 1.5,
  },

  button: {
    position: 'absolute',
    bottom: 30,
    width: '90%',
    alignSelf: 'center',
    padding: 20,
    borderRadius: 100,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',

    fontSize: 16,
  },
});
