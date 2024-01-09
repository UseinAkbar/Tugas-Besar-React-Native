import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [counter, setCounter] = useState(0);

  return (
      <View className='flex-1 items-center justify-center bg-white gap-2 bg-red-100'>
        <Text className='text-center text-3xl font-bold text-red-500'>Usein Akbar</Text>
        <Text className='text-center text-2xl font-semibold text-red-500'>1202204043</Text>
        <Text className='text-center text-2xl font-semibold text-red-500'>S1 Sistem Informasi</Text>
        <View className='flex flex-col items-center'>
          <View className='w-14 h-14 bg-blue-200 rounded-md'></View>
          <View className='w-16 h-16 bg-blue-300 rounded-md'></View>
          <View className='w-20 h-20 bg-blue-400 rounded-md'></View>
        </View>
        <StatusBar style="auto" />
      </View>
  );
}

{/* <View className='flex-1 items-center justify-center bg-white gap-4'>
        <Text className='text-center text-2xl font-bold text-red-500'>Counter React-Native App</Text>
        <ScrollView className='flex flex-col items-center gap-4'>
          <Text className='text-center text-3xl font-bold'>{counter}</Text>
          <View className="flex flex-row items-center justify-center gap-6">
            <Pressable className='p-6 rounded-lg bg-black' onPress={() => setCounter(counter - 1)}>
              <Text className='text-white text-xl font-bold'>-</Text>
            </Pressable>
            <Pressable className='p-6 rounded-md bg-black' onPress={() => setCounter(counter + 1)}>
              <Text className='text-white text-xl font-bold'>+</Text>
            </Pressable>
          </View>
        </ScrollView>
        <StatusBar style="auto" />
      </View> */}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//     gap: 10,
//     padding: 10
//   },
//   title: {
//     textAlign: 'center',
//     fontSize: 20,
//     fontWeight: 'bold'
//   },
//   counter: {
//     display: 'flex'
//   },
//   button: {
//     backgroundColor: '#000',
//     paddingTop: 10,
//     paddingBottom: 10,
//     paddingLeft: 14,
//     paddingRight: 14,
//     borderRadius: 4,
//   },
//   buttonLabel: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#fff',
//   }
// });
