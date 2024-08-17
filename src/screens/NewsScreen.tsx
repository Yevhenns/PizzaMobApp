import {useAppSelector} from '../redux/hooks';
import {getIsLoading, getPromotions} from '../redux/products/productsSlice';
import {PagesWrapper} from '../components/PagesWrapper/PagesWrapper';
import {options} from '../options';
import Loader from '../components/Loader/Loader';
import {ProductsList} from '../components/ProductsList/ProductsList';

export function NewsScreen() {
  const promotionProducts = useAppSelector(getPromotions);
  const isLoading = useAppSelector(getIsLoading);

  return (
    <PagesWrapper>
      {isLoading && <Loader />}
      {/* <CarouselComponent /> */}
      <ProductsList data={promotionProducts} options={options} />
    </PagesWrapper>
  );
}
