import { Image, Text, View } from 'react-native';
import { StyleSheet } from 'react-native';

import { Heart } from '../../../../components/icons/Heart';
import { HeartFilled } from '../../../../components/icons/HeartFilled';
import RoundButton from '../../../RoundButton/RoundButton';

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
          source={{ uri: photo }}
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
    fontFamily: 'Comfortaa-Bold',
    fontSize: 24,
    color: '#000000',
  },

  text: {
    fontFamily: 'Inter-Regular',
    fontSize: 16,
    color: '#989898',
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
    width: 64,
    height: 24,
    borderRadius: 12,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  promotionText: {
    fontFamily: 'Comfortaa-SemiBold',
    color: 'white',
  },

  favorite: {
    position: 'absolute',
    top: 0,
    right: 0,
  },
});
