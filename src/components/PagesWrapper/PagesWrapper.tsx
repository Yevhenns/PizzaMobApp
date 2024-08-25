import { PropsWithChildren, useEffect } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

import { checkCart } from '../../redux/cart/cartSlice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { getProducts } from '../../redux/products/productsOperations';
import {
  getError,
  getIsLoading,
  getProductsAll,
} from '../../redux/products/productsSlice';
import { Error500 } from '../Error500/Error500';
import Loader from '../Loader/Loader';

type PagesWrapperProps = PropsWithChildren;

export function PagesWrapper({ children }: PagesWrapperProps) {
  const productsAll = useAppSelector(getProductsAll);
  const isLoading = useAppSelector(getIsLoading);
  const error = useAppSelector(getError);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (productsAll.length === 0 && !error) {
      dispatch(getProducts());
      return;
    }
    if (productsAll.length > 0) {
      dispatch(checkCart(productsAll));
    }
  }, [dispatch, error, productsAll]);

  return (
    <ScrollView style={styles.wrapper}>
      {error ? (
        <Error500 />
      ) : (
        <>
          {isLoading && <Loader />}
          <View style={styles.childrenWrapper}>{children}</View>
        </>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 10,
    paddingTop: 10,
  },

  childrenWrapper: {
    display: 'flex',
    gap: 20,
  },
});
