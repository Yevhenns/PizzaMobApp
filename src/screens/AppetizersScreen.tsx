import Loader from '../components/Loader/Loader';
import { PagesWrapper } from '../components/PagesWrapper/PagesWrapper';
import { ProductsList } from '../components/ProductsList/ProductsList';
import { filterByCategory } from '../helpers/filterByCategory';
import { useAppSelector } from '../redux/hooks';
import { getIsLoading, getProductsAll } from '../redux/products/productsSlice';

export function AppetizersScreen() {
  const products = useAppSelector(getProductsAll);
  const isLoading = useAppSelector(getIsLoading);
  const appetizers = filterByCategory(products, 'appetizers');

  return (
    <PagesWrapper>
      {isLoading && <Loader />}
      <ProductsList data={appetizers} />
    </PagesWrapper>
  );
}
