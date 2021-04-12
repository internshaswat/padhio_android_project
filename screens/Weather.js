import * as React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';
import { LineChart, YAxis, Grid } from 'react-native-svg-charts';

export default function Weather() {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['black', 'grey']}
        style={styles.container}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}>
        <Text style={{marginTop:"-10%",marginLeft:"-70%",color:"white",paddingBottom:"30%",fontSize:20}}>Hi Shubham!</Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Icon
            name="map-marker"
            style={{ fontSize: 20, padding: 10 }}
            color="white"
          />
          <TextInput
            placeholder="Location"
            style={{
              borderBottomWidth: 1,
              borderBottomStyle: 'dashed',
              fontSize: 20,
              width: '50%',
              textAlign: 'center',
              color: 'white',
            }}
            placeholderTextColor="white"></TextInput>
          <Icon
            name="pencil"
            style={{ fontSize: 20, padding: 10 }}
            color="white"
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{ fontSize: 40, paddingRight: 10 }}>23</Text>
          <Text style={{ color: 'white' }}>C|F</Text>
          <Icon
            name="cloud"
            style={{ fontSize: 20, padding: 10 }}
            color="#ff"
          />
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{ fontSize: 20, paddingRight: 10 }}>Mon</Text>
          <Text style={{ color: 'white' }}>12:44 PM</Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            marginLeft: '-60%',
            borderRadius: 20,
            borderColor: 'white',
            borderWidth: 1,
            marginTop: 12,
          }}>
          <Text
            style={{
              color: 'white',
              fontSize: 15,
              padding: 5,
              backgroundColor: 'black',
              borderRadius: 20,
              borderTopRightRadius: 0,
              borderBottomRightRadius: 0,
            }}>
            Today
          </Text>
          <Text
            style={{
              color: 'black',
              fontSize: 15,
              padding: 5,
              backgroundColor: 'white',
              borderRadius: 20,
              borderTopLeftRadius: 0,
              borderBottomLeftRadius: 0,
            }}>
            Today
          </Text>
        </View>
        <YAxisExample style={{ marginTop: 20 }} />
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
});

class YAxisExample extends React.PureComponent {
  render() {
    const data = [
      50,
      10,
      40,
      95,
      -4,
      -24,
      85,
      91,
      35,
      53,
      -53,
      24,
      50,
      -20,
      -80,
    ];

    const contentInset = { top: 20, bottom: 20 };

    return (
      <View style={{ height: 200, flexDirection: 'row', marginTop: 30 }}>
        <YAxis
          data={data}
          contentInset={contentInset}
          svg={{
            fill: 'white',
            fontSize: 10,
          }}
          numberOfTicks={10}
          formatLabel={(value) => `${value}ºC`}
        />
        <LineChart
          style={{ flex: 1, marginLeft: 16, backgroundColor: 'white' }}
          data={data}
          svg={{ stroke: 'rgb(134, 65, 244)' }}
          contentInset={contentInset}>
          <Grid />
        </LineChart>
      </View>
    );
  }
}
