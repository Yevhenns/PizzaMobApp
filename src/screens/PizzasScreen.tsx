import { PagesWrapper } from '../components/PagesWrapper/PagesWrapper';
import { ProductsList } from '../components/ProductsList/ProductsList';

export function PizzasScreen() {
  return (
    <PagesWrapper>
      <ProductsList category="pizzas" />
    </PagesWrapper>
  );
}
