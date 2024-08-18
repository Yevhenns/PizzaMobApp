import { View } from 'react-native';
import { StyleSheet } from 'react-native';
import Toast from 'react-native-toast-message';

import { filterByCategory } from '../../helpers/filterByCategory';
import { options } from '../../options';
import { addItem } from '../../redux/cart/cartSlice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import {
  getFavorites,
  getProductsAll,
  getPromotions,
} from '../../redux/products/productsSlice';
import { ProductListItem } from './ProductListItem/ProductListItem';

interface ProductsListProps {
  category: string;
}

export function ProductsList({ category }: ProductsListProps) {
  const favoriteProducts = useAppSelector(getFavorites);
  const products = useAppSelector(getProductsAll);
  const promotionProducts = useAppSelector(getPromotions);

  const dispatch = useAppDispatch();

  const data = (() => {
    if (category === 'promotions') {
      return promotionProducts;
    }
    if (category === 'favorites') {
      return favoriteProducts;
    }
    return filterByCategory(products, category);
  })();

  const addToCart = (
    _id: string,
    totalQuantity: number,
    promotion: boolean,
    totalPrice: number,
    totalPromPrice: number,
    chosenOptions: string[],
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
        totalPrice: promotion ? totalPromPrice : totalPrice,
      };
      dispatch(addItem(cartItem));
      Toast.show({
        type: 'success',
        text1: 'Додано у кошик',
        visibilityTime: 1500,
      });
    }
  };

  const setFavoriteProducts = (_id: string) => {
    return favoriteProducts.some(item => item._id === _id);
  };

  return (
    <View style={styles.wrapper}>
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
}

const styles = StyleSheet.create({
  wrapper: {
    rowGap: 20,
    alignItems: 'stretch',
    padding: 10,
  },
});
