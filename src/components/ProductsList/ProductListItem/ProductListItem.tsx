import { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Toast from 'react-native-toast-message';

import { useAppDispatch } from '../../../redux/hooks';
import {
  addToFavoriteAction,
  removeFromFavoriteAction,
} from '../../../redux/products/productsSlice';
import { ProductDescription } from './components/ProductDescription';
import { ProductFooter } from './components/ProductFooter';
import { ProductOptionsList } from './components/ProductOptionsList';
import { ProductQuantity } from './components/ProductQuantity';

interface ProductListItemProps {
  item: Product;
  addToCart: AddToCart;
  setFavoriteProducts: (_id: string) => boolean;
  favoriteProducts: Product[];
  options?: Option[];
}

export function ProductListItem({
  item,
  addToCart,
  setFavoriteProducts,
  favoriteProducts,
  options = [],
}: ProductListItemProps) {
  const {
    _id,
    title,
    description,
    dimension,
    price,
    photo,
    promotion,
    promPrice,
    category,
    vegan,
  } = item;

  const [totalPrice, setTotalPrice] = useState(price);
  const [totalPromPrice, setTotalPromPrice] = useState(promPrice);
  const [totalQuantity, setTotalQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(setFavoriteProducts(_id));
  const [optionsShown, setOptionsShown] = useState(false);
  const [optionsArray, setOptionsArray] = useState<Option[]>([]);
  const [optionsSum, setOptionsSum] = useState(0);

  const dispatch = useAppDispatch();

  const getTotalQuantity = (quantity: number) => {
    setTotalQuantity(quantity);
    setTotalPrice((price + optionsSum) * quantity);
    setTotalPromPrice((promPrice + optionsSum) * quantity);
  };

  const addToFavorite = () => {
    if (favoriteProducts.some(item => item._id === _id)) {
      setIsFavorite(false);
      dispatch(removeFromFavoriteAction(_id));
      Toast.show({
        type: 'info',
        text1: 'Видалено з улюблених',
      });
    } else {
      setIsFavorite(true);
      dispatch(addToFavoriteAction(item));
      Toast.show({
        type: 'success',
        text1: 'Додано в улюблені',
      });
    }
  };

  const handleShowOptions = () => {
    setOptionsShown(!optionsShown);
  };

  const handleChooseOptions = (title: string, isChecked: boolean) => {
    const optionData = options.find(item => item.title === title);

    if (optionData !== undefined) {
      if (isChecked && !optionsArray.includes(optionData)) {
        setOptionsArray([...optionsArray, optionData]);
        setOptionsSum(optionsSum + optionData.price);
      }
      if (!isChecked && optionsArray.includes(optionData)) {
        const filteredArray = optionsArray.filter(item => item !== optionData);
        setOptionsArray(filteredArray);
        setOptionsSum(optionsSum - optionData.price);
      }
    }
  };

  useEffect(() => {
    !optionsShown && setOptionsArray([]), setOptionsSum(0);
  }, [optionsShown]);

  return (
    <View style={styles.listItem}>
      <ProductDescription
        _id={_id}
        photo={photo}
        title={title}
        description={description}
        dimension={dimension}
        promotion={promotion}
        isFavorite={isFavorite}
        addToFavorite={addToFavorite}
      />
      <ProductQuantity
        getTotalQuantity={getTotalQuantity}
        handleChange={handleShowOptions}
        options={options}
        category={category}
      />
      {optionsShown && (
        <ProductOptionsList
          options={options}
          handleChange={handleChooseOptions}
          vegan={vegan}
        />
      )}
      <ProductFooter
        _id={_id}
        totalQuantity={totalQuantity}
        promotion={promotion}
        totalPrice={totalPrice}
        totalPromPrice={totalPromPrice}
        addToCart={addToCart}
        optionsArray={optionsArray}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  listItem: {
    flex: 1,
    backgroundColor: '#fff',
    color: 'black',
    padding: 24,
    borderRadius: 10,
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
  },
});
