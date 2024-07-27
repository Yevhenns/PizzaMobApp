import React from 'react';
import {View, Text, Image} from 'react-native';
import {ProductDescriptionCSS} from './ProductDescription.styles';
import RoundButton from '../../../../UI/RoundButton/RoundButton';
import {Heart} from '../../../../components/icons/Heart';
import {HeartFilled} from '../../../../components/icons/HeartFilled';

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
        {promotion && (
          <View style={ProductDescriptionCSS.promotion}>
            <Text style={ProductDescriptionCSS.promotionText}>Акція</Text>
          </View>
        )}
        <View style={ProductDescriptionCSS.favorite}>
          <RoundButton aria-label="add to favorite" onPress={addToFavorite}>
            {isFavorite ? (
              <Heart color={'#de612b'} />
            ) : (
              <HeartFilled color={'#de612b'} />
            )}
          </RoundButton>
        </View>
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
