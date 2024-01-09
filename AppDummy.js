import { StatusBar } from 'expo-status-bar';
import { useEffect, useReducer, useState } from 'react';
import { Button, Image, ScrollView, StyleSheet, Text, TextInput, TouchableHighlight, TouchableOpacity, View } from 'react-native';
import Login from './components/Login';
import FoodOrder from './components/FoodOrder';
import Home from './components/Home';
import Detail from './components/Detail';
import Scan from './components/Scan';
import Report from './components/Report';

const FixedDimensionsBasics = () => {
  return (
    <View style={styles.boxContainer}>
      <View
        style={{
          width: 50,
          height: 50,
          backgroundColor: "powderblue",
          borderRadius: 2
        }}
      />
      <View
        style={{
          width: 100,
          height: 100,
          backgroundColor: "skyblue",
          borderRadius: 2
        }}
      />
      <View
        style={{
          width: 150,
          height: 150,
          backgroundColor: "steelblue",
          borderRadius: 2
        }}
      />
    </View>
  );
};

const ImageLayout = () => {
  return (
    <View>
      <Text style={styles.imageTitle}>Contoh Gambar</Text>
      <View style={styles.imageContainer}>
        <Image source={require('./assets/ronaldo.jpeg')} style={{width:100, height:100}}/>
        <Image source={{uri: 'https://akcdn.detik.net.id/community/media/visual/2019/06/28/2846568b-3057-49c6-8125-ff5135d07312.png?d=1'}} style={{width:200, height:40}}/>
      </View>
    </View>
  )
}

export default function App() {
  const [numbers, setNumbers] = useState({angka1: '', angka2: ''})
  const [hasil, setHasil] = useState(0)
  const {angka1, angka2} = numbers

  const handleSubmit = () => {
    const result = angka1 + angka2
    setHasil(result)
    setNumbers({angka1: '', angka2: ''})
  }

  const handleChange = (name, value) => {
    setNumbers(preVal => {
          return {
              ...preVal,
              [name]: +value
          }
      })
  }

  return (
    <View style={styles.container} className='bg-primary px-6 py-6 pt-16'>
      {/* <Home /> */}
      {/* <Detail /> */}
      {/* <Scan /> */}
      <Report />

      {/* <Image source={require('./assets/wick4.jpg')} className='absolute w-full h-full z-[1]'/>
      <View className='absolute w-full h-full bg-black/[.8] z-[2]'></View>
      <Login />  */}
      {/* <View>
        <Text className='text-base font-medium text-white'>Angka 1:</Text>
        <TextInput
          className='px-4 py-2 bg-gray-200 rounded text-base font-normal text-black'
          onChangeText={(value) => handleChange('angka1', value)}
          value={angka1}
          placeholder='angka 1'
          placeholderTextColor='rgb(107 114 128)'
          />
      </View>
      <View>
        <Text className='text-base font-medium text-white'>Angka 2:</Text>
        <TextInput
        className='px-4 py-2 bg-gray-200 rounded text-base font-normal text-black'
        onChangeText={(value) => handleChange('angka2', value)}
        value={angka2}
        placeholder='angka 2'
        placeholderTextColor='rgb(107 114 128)'
        />
      </View>
      <TouchableOpacity className='py-2 px-2 mt-2 rounded bg-sky-900' onPress={handleSubmit}>
        <Text className='text-base text-center font-bold text-white'>Tambah</Text>
      </TouchableOpacity>
      <Text className='text-xl font-bold text-center text-white mt-6'>Hasil: {hasil}</Text> */}
      {/* <FoodOrder /> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#000",
    // alignItems: "stretch",
    // justifyContent: "center",
    // padding: 10,
    // backgroundSize: 'cover'
  },
  nama: {
    color: "red",
    fontSize: 20,
    alignItems: "center",
    fontWeight: "bold",
  },
  nim: {
    color: "blue",
    alignItems: "center",
    fontSize: 18,
  },
  jurusan: {
    color: "green",
    alignItems: "center",
    fontSize: 16,
  },
  desc: {
    color: "blue",
    alignItems: "center",
    fontSize: 14,
    textAlign: "center",
    width: '80%'
  },
  boxContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 10
  },
  imageTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  imageContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
    marginTop: 10
  }
});
