import React, { useState } from 'react';
import AppIntroSlider from 'react-native-app-intro-slider';
import { StyleSheet, Text, Image, View, Button, LogBox } from 'react-native';

LogBox.ignoreAllLogs();

export default function App() {

  const [btnName, setBtnName] = useState("Next")
  const [ShowSkip, setShowSkip] = useState(true)
  const slides = [
    {
      id: 1,
      title: 'Quality Food',
      description: 'Quis excepteur officia ipsum in proident aliquip ad non dolore quis ipsum proident elit. Sint ex eu enim nulla veniam dolore non dolore sint pariatur',
      image: 'https://clipart.com/thumbs.php?f=/081/batch_23/000081-0023-000140_tnb.png'
    },
    {
      id: 2,
      title: 'Fast Delivery',
      description: 'Quis excepteur officia ipsum in proident aliquip ad non dolore quis ipsum proident elit. Sint ex eu enim nulla veniam dolore non dolore sint pariatur',
      image: 'https://img.freepik.com/premium-vector/home-delivery-flat-vector-shipping-services_203633-1378.jpg?w=826'
    },
    {
      id: 3,
      title: 'Reward Surprises',
      description: 'Quis excepteur officia ipsum in proident aliquip ad non dolore quis ipsum proident elit. Sint ex eu enim nulla veniam dolore non dolore sint pariatur',
      image: 'https://cdn.dribbble.com/users/844597/screenshots/9540128/media/a4d9501d12ea23cdc6e5ce598c00877f.png?compress=1&resize=1000x750&vertical=center'
    }
  ]

  function callDoneFunction() {
    setBtnName("Get Started")
    setShowSkip(false)
  }

  return (
    <View style={{ flex: 1, marginBottom: 50, paddingLeft: 20, paddingRight: 20 }}>
      <Text style={{ textAlign: 'right', fontWeight: 'bold', fontSize: 16, marginTop: 50 }}>
        {
          (ShowSkip) ?
            <>Skip</>
            :
            <></>
        }
      </Text>
      <AppIntroSlider
        data={slides}
        renderItem={({ item }) => {
          return (
            <View style={{ flex: 1, marginTop: -70 }}>
              <View style={styles.container}>
                <Image source={{ uri: `${item.image}` }} style={{ width: 320, height: 280 }} />
                <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 22, marginTop: 10 }}>{item.title}</Text>
                <Text style={{ textAlign: 'center', paddingTop: 5, color: 'gray' }}>{item.description}</Text>
              </View>
            </View>
          )
        }}
        activeDotStyle={{
          backgroundColor: 'orange',
          marginTop: -50,
        }}
        dotStyle={{
          marginTop: -50,
          backgroundColor: 'gray',
        }}
        renderDoneButton={callDoneFunction}
      />
      <Button
        title={btnName}
        color="#F37021"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 70,
    alignItems: 'center',
    padding: 15,
    paddingTop: 100
  },
});

