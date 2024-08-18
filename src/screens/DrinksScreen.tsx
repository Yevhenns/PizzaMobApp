import { PagesWrapper } from '../components/PagesWrapper/PagesWrapper';
import { ProductsList } from '../components/ProductsList/ProductsList';

export function DrinksScreen() {
  return (
    <PagesWrapper>
      <ProductsList category="drinks" />
    </PagesWrapper>
  );
}
