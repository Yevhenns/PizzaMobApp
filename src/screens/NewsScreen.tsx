import Loader from '../components/Loader/Loader';
import { PagesWrapper } from '../components/PagesWrapper/PagesWrapper';
import { ProductsList } from '../components/ProductsList/ProductsList';
import { Weather } from '../components/Weather/Weather';
import { options } from '../options';
import { useAppSelector } from '../redux/hooks';
import { getIsLoading, getPromotions } from '../redux/products/productsSlice';

export function NewsScreen() {
  const promotionProducts = useAppSelector(getPromotions);
  const isLoading = useAppSelector(getIsLoading);

  return (
    <PagesWrapper>
      {isLoading && <Loader />}
      {/* <CarouselComponent /> */}
      <ProductsList data={promotionProducts} options={options} />
      <Weather />
    </PagesWrapper>
  );
}
