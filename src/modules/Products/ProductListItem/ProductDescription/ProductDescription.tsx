import React from 'react';
import {View, Text, Image} from 'react-native';
import {ProductDescriptionCSS} from './ProductDescription.styles';
import RoundButton from '../../../../UI/RoundButton/RoundButton';

interface ProductDescriptionProps {
  _id: string;
  photo: string;
  title: string;
  description: string;
  dimension: string;
  promotion: boolean;
  isFavorite: boolean;
  addToFavorite: () => void;
}

export function ProductDescription({
  photo,
  title,
  description,
  dimension,
  promotion,
  isFavorite,
  addToFavorite,
}: ProductDescriptionProps) {
  return (
    <View style={ProductDescriptionCSS.descriprionWrapper}>
      <View>
        <Image
          style={ProductDescriptionCSS.img}
          source={{uri: photo}}
          width={200}
          height={200}
        />
        {promotion && <div className={css.promotion}>Акція</div>}
        <div className={css.favorite}>
          <RoundButton aria-label="add to favorite" onClick={addToFavorite}>
            {isFavorite ? (
              <Icon
                svg="heart-filled"
                iconWidth={34}
                iconHeight={34}
                color="accent"
              />
            ) : (
              <Icon svg="heart" iconWidth={34} iconHeight={34} />
            )}
          </RoundButton>
        </div>
      </View>
      <View style={ProductDescriptionCSS.info}>
        <Text style={ProductDescriptionCSS.title}>{title}</Text>
        <Text style={ProductDescriptionCSS.text}>{description}</Text>
        <Text style={ProductDescriptionCSS.text}>{dimension}</Text>
      </View>
    </View>
  );
}

export default ProductDescription;
