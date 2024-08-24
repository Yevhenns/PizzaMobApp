import { StyleSheet, Text } from 'react-native';

import { HorizontalCarousel } from '../components/Carousel/Carousel';
import { PagesWrapper } from '../components/PagesWrapper/PagesWrapper';
import { ProductsList } from '../components/ProductsList/ProductsList';
import { Weather } from '../components/Weather/Weather';

export function NewsScreen() {
  return (
    <PagesWrapper>
      <HorizontalCarousel />
      <Weather />
      <Text style={styles.title}>Акційні пропозиції</Text>
      <ProductsList category="promotions" />
    </PagesWrapper>
  );
}

const styles = StyleSheet.create({
  title: {
    color: 'black',
    fontSize: 18,
    textAlign: 'center',
    fontFamily: 'Comfortaa-SemiBold',
  },
});
