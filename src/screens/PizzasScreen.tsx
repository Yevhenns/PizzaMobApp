import Loader from '../components/Loader/Loader';
import { PagesWrapper } from '../components/PagesWrapper/PagesWrapper';
import { ProductsList } from '../components/ProductsList/ProductsList';
import { filterByCategory } from '../helpers/filterByCategory';
import { options } from '../options';
import { useAppSelector } from '../redux/hooks';
import { getIsLoading, getProductsAll } from '../redux/products/productsSlice';

export function PizzasScreen() {
  const products = useAppSelector(getProductsAll);
  const isLoading = useAppSelector(getIsLoading);
  const pizzas = filterByCategory(products, 'pizzas');

  return (
    <PagesWrapper>
      {isLoading && <Loader />}
      <ProductsList data={pizzas} options={options} />
    </PagesWrapper>
  );
}
