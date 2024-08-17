import { StyleSheet, View } from 'react-native';
import Svg, { Path, SvgProps } from 'react-native-svg';

export const ChevronRight = (props: SvgProps) => {
  return (
    <View style={styles.container}>
      <Svg stroke-width="0" viewBox="0 0 28 48" width={24} height={24}>
        <Path
          d="M1.32325 1.53454C0.662155 2.19716 0.290771 3.09574 0.290771 4.03268C0.290771 4.96962 0.662155 5.8682 1.32325 6.53082L18.7788 24.0213L1.32325 41.5118C0.680891 42.1783 0.325451 43.0708 0.333485 43.9973C0.34152 44.9237 0.712385 45.81 1.36621 46.4651C2.02003 47.1202 2.90449 47.4918 3.82909 47.4999C4.7537 47.5079 5.64447 47.1518 6.30955 46.5081L16.2839 36.5138L26.2583 26.5195C26.9194 25.8569 27.2908 24.9583 27.2908 24.0213C27.2908 23.0844 26.9194 22.1858 26.2583 21.5232L6.30955 1.53454C5.64826 0.872125 4.75147 0.5 3.8164 0.5C2.88133 0.5 1.98454 0.872125 1.32325 1.53454Z"
          fill={props.color}
        />
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
