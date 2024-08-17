import {useEffect, useState} from 'react';
import {showDniproWeather} from './showDniproWeather';
import {Image, StyleSheet, Text, View} from 'react-native';

export function Weather() {
  const [weather, setWeather] = useState<[] | ForecastDay[]>([]);

  useEffect(() => {
    showDniproWeather().then((data: FilteredApiResponse) => {
      const newArray = data.map(item => {
        return {
          date: item.date.split('-').reverse().join('.'),
          avgtemp: item.day.avgtemp_c,
          conditionText: item.day.condition.text,
          icon: 'https:' + item.day.condition.icon,
        };
      });
      setWeather(newArray);
    });
  }, []);

  return (
    <View>
      <Text style={styles.heading}>Погода в Дніпрі</Text>
      <View style={styles.weatherList}>
        {weather.map(item => {
          return (
            <View key={item.date} style={styles.weatherListitem}>
              <Text style={styles.text}>{item.avgtemp} C°</Text>
              <Text style={styles.text}>{item.date}</Text>
              <Text style={styles.text}>{item.conditionText}</Text>
              <Image source={{uri: item.icon}} width={100} height={100} />
            </View>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontFamily: 'Inter-Regular',
    color: 'black',
    textAlign: 'center',
    marginVertical: 24,
  },

  weatherList: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 20,
  },

  weatherListitem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },

  text: {
    fontFamily: 'Inter-Regular',
    color: 'black',
    textAlign: 'center',
    flexGrow: 1,
  },
});
