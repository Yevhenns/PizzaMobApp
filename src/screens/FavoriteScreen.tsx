import { View } from 'react-native';

import { Empty } from '../components/Empty/Empty';
import { PagesWrapper } from '../components/PagesWrapper/PagesWrapper';
import { ProductsList } from '../components/ProductsList/ProductsList';
import { useAppSelector } from '../redux/hooks';
import { getFavorites } from '../redux/products/productsSlice';

export function FavoriteScreen() {
  const favoriteProducts = useAppSelector(getFavorites);

  return (
    <PagesWrapper>
      {favoriteProducts.length > 0 ? (
        <ProductsList category="favorites" />
      ) : (
        <View>
          <Empty />
        </View>
      )}
    </PagesWrapper>
  );
}
