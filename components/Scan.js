import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native"

const Scan = ({navigation}) => {
    const navigateBack = () => {
        navigation.goBack()
    }

    return (
        <ScrollView contentContainerStyle={styles.container} className='bg-primary'>
            <View className='h-screen flex flex-col flex-1 gap-14 p-6 pt-8'>
                <View className='flex flex-row justify-between items-center'>
                    <TouchableOpacity onPress={navigateBack}>
                        <View className=' w-12 h-12 flex items-center justify-center rounded-full border-2 border-secondary p-2'>
                            <Image source={require('../assets/left-arrow.png')} className=''/>
                        </View>
                    </TouchableOpacity>
                    <Image source={require('../assets/person.jpg')} style={{width:50, height:50, resizeMode: 'contain', borderRadius: 50}}/>
                </View>
                <View className='flex flex-1 flex-col justify-center'>
                    <View className='flex flex-row justify-center'>
                        <Image source={require('../assets/operating/operating1.jpg')} className='rounded-md' style={{width:'100%', height:280, resizeMode: 'contain'}}/>
                    </View>
                    <View className='flex flex-row gap-4 items-center mt-4'>
                        <TouchableOpacity className='grow py-2 px-2 rounded-md bg-[#0D20F1]'>
                            <Text className='text-lg text-center font-bold text-secondary'>Scan</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    center: {
    //   alignItems: 'center',
      gap: 10
    },
    container: {

    }
  });

export default Scan