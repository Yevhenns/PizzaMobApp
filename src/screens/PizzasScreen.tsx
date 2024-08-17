import {PagesWrapper} from '../components/PagesWrapper/PagesWrapper';
import {getIsLoading, getProductsAll} from '../redux/products/productsSlice';
import {filterByCategory} from '../helpers/filterByCategory';
import {useAppSelector} from '../redux/hooks';
import {options} from '../options';
import Loader from '../components/Loader/Loader';
import {ProductsList} from '../components/ProductsList/ProductsList';

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
