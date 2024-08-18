import { PagesWrapper } from '../components/PagesWrapper/PagesWrapper';
import { ProductsList } from '../components/ProductsList/ProductsList';
import { Weather } from '../components/Weather/Weather';
import { useAppSelector } from '../redux/hooks';
import { getIsLoading } from '../redux/products/productsSlice';

export function NewsScreen() {
  const isLoading = useAppSelector(getIsLoading);

  return (
    <PagesWrapper>
      {/* <CarouselComponent /> */}
      <ProductsList category="promotions" />
      <Weather />
    </PagesWrapper>
  );
}
