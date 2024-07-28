import {useAppSelector} from '../redux/hooks';
import {getIsLoading, getPromotions} from '../redux/products/productsSlice';
import {PagesWrapper} from '../components/PagesWrapper/PagesWrapper';
import {ProductsList} from '../modules/Products/ProductsList';
import Loader from '../UI/Loader/Loader';
import {options} from '../options';

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
