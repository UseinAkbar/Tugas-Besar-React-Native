import { useEffect, useState } from "react"
import { ActivityIndicator, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native"

const ReportSuccess = ({ route, navigation }) => {
    const {id, name, asset_code, category, tipe, uraian, pernahRusak} = route.params
    const [isLoading, setIsLoading] = useState(true);

    const navigateReport = (route, id = '') => {
        navigation.navigate(route, {id})
    }

    const navigateHome = () => {
        navigation.navigate('Home')
    }

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)    
        }, 400)
    }, [])

    return (
        <ScrollView contentContainerStyle={styles.container} className='bg-primary'>
            {isLoading ? 
            <View className='h-screen flex justify-center items-center'>
                <ActivityIndicator size="large" color='#F9F5F6' />
            </View> : 
            <View className='h-screen flex flex-col justify-center gap-6 p-6 pt-8'>
                <View className='flex flex-col justify-center items-center gap-2'>
                    <Image source={require('../assets/success.png')} style={{width:100, height:100, resizeMode: 'contain', borderRadius: 50}}/>
                    <Text className='text-3xl font-bold text-center text-secondary'>Pelaporan Asset Berhasil!</Text>
                </View>
                <View className='flex flex-col justify-center'>
                    <Text className='text-xl font-bold text-center w-full text-secondary mt-4'>{name.trim()}</Text>
                    <Text className='text-lg font-semibold text-center w-full text-secondary mt-4'>{category.trim()}</Text>
                    <Text className='text-lg font-semibold text-center w-full text-secondary mt-4'>{asset_code}</Text>
                    <View className='h-[2px] w-full bg-secondary rounded mt-4' />
                    <Text className='text-lg font-medium text-center w-full text-secondary mt-4'>Tipe Kerusakan: {tipe}</Text>
                    <Text className='text-lg font-medium text-center w-full text-secondary mt-4'>Pernah Rusak: {pernahRusak ? 'Pernah' : 'Belum'}</Text>
                    <Text className='text-lg font-medium text-center text-secondary mt-4'>Deskripsi: {uraian || '-'}</Text>
                    <TouchableOpacity className='w-full py-2 px-2 rounded-md bg-[#0D20F1] mt-6' onPress={navigateHome}>
                        <Text className='text-lg text-center font-bold text-secondary'>Ignore</Text>
                    </TouchableOpacity>
                </View>
            </View>
            }
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

export default ReportSuccess