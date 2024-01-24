import React from 'react';
import {View} from 'react-native';
import PagesWrapper from '../../components/PagesWrapper/PagesWrapper';
import {useAppSelector} from '../../redux/hooks';
import {getFavorites, getIsLoading} from '../../redux/products/productsSlice';
import ProductsList from '../../modules/Products/ProductsList';
import Empty from '../../components/Empty/Empty';
import Loader from '../../UI/Loader/Loader';
import {styles} from './FavoriteScreen.styles';

export function FavoriteScreen() {
  const isLoading = useAppSelector(getIsLoading);
  const favoriteProducts = useAppSelector(getFavorites);

  return (
    <PagesWrapper>
      {isLoading && <Loader />}
      {favoriteProducts.length > 0 ? (
        <ProductsList data={favoriteProducts} />
      ) : (
        <View style={styles.emptyContainer}>
          <Empty text={'Тут нічого немає!'} />
        </View>
      )}
    </PagesWrapper>
  );
}
