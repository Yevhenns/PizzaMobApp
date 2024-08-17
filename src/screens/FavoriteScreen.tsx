import { View } from 'react-native';

import { Empty } from '../components/Empty/Empty';
import Loader from '../components/Loader/Loader';
import { PagesWrapper } from '../components/PagesWrapper/PagesWrapper';
import { ProductsList } from '../components/ProductsList/ProductsList';
import { options } from '../options';
import { useAppSelector } from '../redux/hooks';
import { getFavorites, getIsLoading } from '../redux/products/productsSlice';

export function FavoriteScreen() {
  const isLoading = useAppSelector(getIsLoading);
  const favoriteProducts = useAppSelector(getFavorites);

  return (
    <PagesWrapper>
      {isLoading && <Loader />}
      {favoriteProducts.length > 0 ? (
        <ProductsList data={favoriteProducts} options={options} />
      ) : (
        <View>
          <Empty />
        </View>
      )}
    </PagesWrapper>
  );
}
