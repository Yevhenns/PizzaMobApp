import { PagesWrapper } from '../components/PagesWrapper/PagesWrapper';
import { ProductsList } from '../components/ProductsList/ProductsList';
import { Weather } from '../components/Weather/Weather';

export function NewsScreen() {
  return (
    <PagesWrapper>
      <Weather />
      <ProductsList category="promotions" />
    </PagesWrapper>
  );
}
