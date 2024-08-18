import { PropsWithChildren, useEffect } from 'react';
import { ScrollView } from 'react-native';

import { useFetchProducts } from '../../hooks/useFetchProducts';
import { checkCart } from '../../redux/cart/cartSlice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import {
  getIsLoading,
  getProductsAll,
} from '../../redux/products/productsSlice';
import { Error500 } from '../Error500/Error500';
import Loader from '../Loader/Loader';

type PagesWrapperProps = PropsWithChildren;

export function PagesWrapper({ children }: PagesWrapperProps) {
  const error = useFetchProducts();

  const productsAll = useAppSelector(getProductsAll);
  const isLoading = useAppSelector(getIsLoading);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (productsAll.length > 0) {
      dispatch(checkCart(productsAll));
    }
  }, [dispatch, productsAll]);

  return (
    <ScrollView>
      {error ? (
        <Error500 />
      ) : (
        <>
          {isLoading && <Loader />}
          {children}
        </>
      )}
    </ScrollView>
  );
}
