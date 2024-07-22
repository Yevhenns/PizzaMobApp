import React from 'react';
import { View } from 'react-native';
import ProductListItem from './ProductListItem/ProductListItem';
import { addItem, getFilteredCart } from '../../redux/cart/cartSlice';
import { getFavorites } from '../../redux/products/productsSlice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import Toast from 'react-native-toast-message';
import { ProductsListCSS } from './ProductsList.styles';

interface ProductsListProps {
  data: Product[];
  options?: Option[];
}

export function ProductsList({ data, options }: ProductsListProps) {
  const dispatch = useAppDispatch();
  const favoriteProducts = useAppSelector(getFavorites);

  const addToCart = (
    _id: string,
    totalQuantity: number,
    promotion: boolean,
    totalPrice: number,
    TotalPromPrice: number,
    chosenOptions: string[]
  ) => {
    const chosenProduct = data.find(item => item._id === _id);
    if (chosenProduct) {
      const { photo, title, _id } = chosenProduct;
      const cartItem = {
        _id: _id,
        photo: photo,
        title: title,
        quantity: totalQuantity,
        options: chosenOptions,
        totalPrice: totalPrice,
      };
      const cartPromItem = {
        _id: _id,
        photo: photo,
        title: title,
        quantity: totalQuantity,
        options: chosenOptions,
        totalPrice: TotalPromPrice,
      };
      if (promotion) {
        dispatch(addItem(cartPromItem));
      } else {
        dispatch(addItem(cartItem));
      }
      toast.success('Додано до кошика', {
        position: 'top-center',
        autoClose: 1500,
        hideProgressBar: true,
      });
    }
  };

  const setFavoriteProducts = (_id: string) => {
    if (favoriteProducts.some(item => item._id === _id)) {
      return true;
    } else {
      return false;
    }
  };

  const setFavoriteProducts = (_id: string) => {
    if (favoriteProducts.some(item => item._id === _id)) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <View style={ProductsListCSS.wrapper}>
      {data.map(item => {
        return (
          <ProductListItem
            key={item._id}
            item={item}
            addToCart={addToCart}
            setFavoriteProducts={setFavoriteProducts}
            favoriteProducts={favoriteProducts}
            options={options}
          />
        );
      })}
    </View>
  );
};

export default ProductsList;
