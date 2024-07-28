import {View} from 'react-native';
import {ProductListItem} from './ProductListItem/ProductListItem';
import {addItem} from '../../redux/cart/cartSlice';
import {getFavorites} from '../../redux/products/productsSlice';
import {useAppDispatch, useAppSelector} from '../../redux/hooks';
import Toast from 'react-native-toast-message';
import {StyleSheet} from 'react-native';

interface ProductsListProps {
  data: Product[];
  options?: Option[];
}

export function ProductsList({data, options}: ProductsListProps) {
  const dispatch = useAppDispatch();
  const favoriteProducts = useAppSelector(getFavorites);

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
      const {photo, title, _id} = chosenProduct;
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
      });
    }
  };

  const setFavoriteProducts = (_id: string) => {
    if (favoriteProducts.some(item => item._id === _id)) {
      return true;
    }
    return false;
  };

  return (
    <View style={css.wrapper}>
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

const css = StyleSheet.create({
  wrapper: {
    rowGap: 20,
    alignItems: 'stretch',
    padding: 10,
  },
});
