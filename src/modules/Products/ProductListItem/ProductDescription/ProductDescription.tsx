import React from 'react';
import {View, Text, Image} from 'react-native';
import {ProductDescriptionCSS} from './ProductDescription.styles';
import RoundButton from '../../../../UI/RoundButton/RoundButton';
import {Heart} from '../../../../components/icons/Heart';

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
        {promotion && <Text>Акція</Text>}
        <View>
          <RoundButton aria-label="add to favorite" onPress={addToFavorite}>
            {isFavorite ? <Heart color={'black'} /> : <Heart color={'red'} />}
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
