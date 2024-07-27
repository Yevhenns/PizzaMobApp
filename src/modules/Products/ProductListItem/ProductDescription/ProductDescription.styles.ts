import {StyleSheet} from 'react-native';

export const ProductDescriptionCSS = StyleSheet.create({
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
