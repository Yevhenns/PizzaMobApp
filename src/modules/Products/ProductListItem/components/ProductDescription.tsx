import React from 'react';
import {View, Text, Image} from 'react-native';
import RoundButton from '../../../../UI/RoundButton/RoundButton';
import {Heart} from '../../../../components/icons/Heart';
import {HeartFilled} from '../../../../components/icons/HeartFilled';
import {StyleSheet} from 'react-native';

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
    <View style={styles.descriprionWrapper}>
      <View>
        <Image
          style={styles.img}
          source={{uri: photo}}
          width={200}
          height={200}
        />
        {promotion && (
          <View style={styles.promotion}>
            <Text style={styles.promotionText}>Акція</Text>
          </View>
        )}
        <View style={styles.favorite}>
          <RoundButton aria-label="add to favorite" onPress={addToFavorite}>
            {!isFavorite ? (
              <Heart color={'#de612b'} />
            ) : (
              <HeartFilled color={'#de612b'} />
            )}
          </RoundButton>
        </View>
      </View>
      <View style={styles.info}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.text}>{description}</Text>
        <Text style={styles.text}>{dimension}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  descriprionWrapper: {
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
  },
  info: {
    display: 'flex',
    flexDirection: 'column',
    gap: 12,
  },
  title: {
    fontSize: 24,
  },
  text: {
    fontSize: 16,
  },
  img: {
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  promotion: {
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: '#de612b',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 12,
    //           font-family: var(--main-font);
  },
  promotionText: {
    color: 'white',
  },
  favorite: {
    position: 'absolute',
    top: 0,
    right: 0,
  },
});
