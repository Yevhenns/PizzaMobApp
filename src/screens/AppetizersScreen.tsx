import { PagesWrapper } from '../components/PagesWrapper/PagesWrapper';
import { ProductsList } from '../components/ProductsList/ProductsList';

export function AppetizersScreen() {
  return (
    <PagesWrapper>
      <ProductsList category="appetizers" />
    </PagesWrapper>
  );
}
