import { View } from 'react-native';
import { StyleSheet } from 'react-native';

import { filterByCategory } from '../../helpers/filterByCategory';
import { useAppSelector } from '../../redux/hooks';
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

  const data = (() => {
    if (category === 'promotions') {
      return promotionProducts;
    }
    if (category === 'favorites') {
      return favoriteProducts;
    }
    return filterByCategory(products, category);
  })();

  const checkIsFavoriteProducts = (_id: string) => {
    return favoriteProducts.some(item => item._id === _id);
  };

  return (
    <View style={styles.wrapper}>
      {data.map(item => {
        return (
          <ProductListItem
            key={item._id}
            item={item}
            checkIsFavoriteProducts={checkIsFavoriteProducts}
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
  },
});
