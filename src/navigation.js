import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Pressable, Text} from 'react-native';
import {useSelector} from 'react-redux';
import CartIcon from './assets/images/CartIcon';
import {numberOfItems} from './store/cartSlice';

// Screens
import ShoppingCart from './screens/CartScreen';
import ProductDetailScreen from './screens/ProductDetailScreen';
import ProductsScreen from './screens/ProductsScreen';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  const itemsInCart = useSelector(numberOfItems);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          contentStyle: {
            backgroundColor: 'white',
          },
        }}>
        <Stack.Screen
          name="Products"
          component={ProductsScreen}
          options={({navigation}) => ({
            headerTitleAlign: 'center',
            headerRight: () => (
              <Pressable
                onPress={() => navigation.navigate('Cart')}
                style={{position: 'relative'}}>
                <CartIcon />
                <Text
                  style={{
                    marginLeft: 5,
                    position: 'absolute',
                    top: -10,
                    right: -13,
                    backgroundColor: 'white',
                    width: 20,
                    height: 20,
                    textAlign: 'center',
                    borderWidth: 1,
                    borderColor: 'black',
                    borderRadius: 10,
                  }}>
                  {itemsInCart}
                </Text>
              </Pressable>
            ),
          })}
        />
        <Stack.Screen
          name="Product Detail"
          component={ProductDetailScreen}
          options={{
            title: 'Product Detail',
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen name="Cart" component={ShoppingCart} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
