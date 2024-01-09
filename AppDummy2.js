import { StatusBar } from 'expo-status-bar';
import { useEffect, useReducer, useState } from 'react';
import { Button, FlatList, Image, ScrollView, StyleSheet, Text, TextInput, TouchableHighlight, TouchableOpacity, View } from 'react-native';
import Home from './components/Home';
import Detail from './components/Detail';
import Scan from './components/Scan';
import Report from './components/Report';
import { ActivityIndicator } from 'react-native-web';

export default function App() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getAssets = async () => {
    try {
      const data = await fetch('http://localhost:8080/assets')
      .then(res => res.json())
      .then(response => response)
      setData(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  // const [payload, setPayload] = useState({
  //   nama: '',
  //   email: ''
  // })
  // const [response, setResponse] = useState({
  //   nama: '',
  //   email: ''
  // })
  // const {nama, email} = payload
  // const {nama: responseNama, email: responseEmail} = response

  // const handleChange = (name, value) => {
  //   setPayload(preVal => {
  //     return {
  //       ...preVal,
  //       [name]: value
  //     }
  //   })
  // }

  // const handleSubmit = async (e) => {
  //   e.preventDefault()
  //   try {
  //     const data = await fetch('https://httpbin.org/post', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json'
  //       },
  //       body: JSON.stringify(payload)
  //     })
  //     .then(res => res.json())
  //     .then(response => JSON.parse(response.data))
  //     setResponse(data)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  useEffect(() => {
    getAssets();
  }, []);

  return (
    <View style={styles.container} className='bg-primary justify-center px-6 py-6 pt-16'> 
    {
      isLoading ? <ActivityIndicator /> :
      <FlatList
        data={data}
        keyExtractor={({ID}) => ID}
        renderItem={({item}) => {
          const {ID, AssetName, Category, HaveBroken} = item
          return (
            <Text>
              {ID}, {AssetName}, {Category}, {HaveBroken}
            </Text>  
          )
        }}
      />
    }
      {/* <Home /> */}
      {/* <Detail /> */}
      {/* <Scan /> */}
      {/* <Report /> */}
      {/* <Text className='text-2xl font-bold text-left text-secondary'>{responseNama}</Text>
      <Text className='text-2xl font-bold text-left text-secondary mt-4'>{responseEmail}</Text>
      <View className='mt-4'>
        <Text className='text-lg font-medium text-left text-secondary'>Nama</Text>
          <TextInput
            className='px-4 py-2 bg-[#191919] rounded-md text-lg font-semibold text-white placeholder:light mt-2'
            onChangeText={(value) => handleChange('nama', value)}
            value={nama}
            placeholder='Nama'
            placeholderTextColor='rgb(156 163 175)'
          />
      </View>
      <View className='mt-4'>
        <Text className='text-lg font-medium text-left text-secondary'>Email</Text>
          <TextInput
            className='px-4 py-2 bg-[#191919] rounded-md text-lg font-semibold text-white placeholder:light mt-2'
            onChangeText={(value) => handleChange('email', value)}
            value={email}
            placeholder='Email'
            placeholderTextColor='rgb(156 163 175)'
          />
      </View>
      <TouchableOpacity className='py-2 px-2 rounded-md bg-[#0D20F1] mt-4' onPress={handleSubmit}>
        <Text className='text-lg text-center font-bold text-secondary'>Simpan</Text>
      </TouchableOpacity> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
