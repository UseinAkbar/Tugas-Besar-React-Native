import { useEffect, useState } from "react"
import { ActivityIndicator, Image, ScrollView, StyleSheet, Text, TextInput, TouchableHighlight, TouchableOpacity, View } from "react-native"
import { curretage, examining, incubator, operating } from "../data"
import { getAssetById } from "../helper/api/getAssetById"

const Detail = ({ route, navigation }) => {
    const {id} = route.params
    const [isLoading, setIsLoading] = useState(true);
    const [detailAsset, setDetailAsset] = useState({
        id: '',
        asset_code: '',
        name: '',
        category: ''
    })
    const {id: id_asset, asset_code, name, category} = detailAsset

    const getAssetImages = (state) => {
        if(state.toLowerCase().includes('curetage')) {
            return curretage
        } else if(state.toLowerCase().includes('examining')) {
            return examining
        } else if(state.toLowerCase().includes('operating')) {
            return operating
        } else if(state.toLowerCase().includes('premature')) {
            return incubator
        }
        return []
    }

    const getDetailAsset = async () => {
        const data = await getAssetById(id)
        setDetailAsset(data)
        setIsLoading(false)
    }

    const navigateReport = (route, id = '') => {
        navigation.navigate(route, {id})
    }

    const navigateBack = () => {
        navigation.goBack()
    }

    useEffect(() => {
        getDetailAsset()
    }, [])

    return (
        <ScrollView contentContainerStyle={styles.container} className='bg-primary'>
            {isLoading ? 
            <View className='h-screen flex justify-center items-center'>
                <ActivityIndicator size="large" color='#F9F5F6' />
            </View> : 
            <View className='flex flex-col flex-1 gap-4 p-6 pt-8'>
                <TouchableOpacity onPress={navigateBack}>
                    <View className='w-12 h-12 flex items-center justify-center rounded-full border-2 border-secondary p-2 mb-2'>
                        <Image source={require('../assets/left-arrow.png')} className=''/>
                    </View>
                </TouchableOpacity>
                <Text className='text-3xl font-bold text-left text-secondary'>{name}</Text>
                <Text className='text-lg font-semibold text-left text-secondary'>Category: {category.trimEnd()}</Text>
                <Text className='text-lg font-semibold text-left text-secondary'>Asset Code: {asset_code}</Text>
                <View className='flex flex-col'>
                    <ScrollView horizontal={true} contentContainerStyle={styles.center}>
                    {getAssetImages(name).map((item, i) => {
                        return (
                            <View key={i}>
                                <Image source={item} className='rounded-md' style={{width:150, height:150, resizeMode: 'cover'}}/>
                            </View>
                        )
                    })}
                    </ScrollView>
                    <View className='mt-4'>
                        <Text className='text-base font-medium text-justify text-secondary'>
                            Curetage And Dilation Set adalah kumpulan instrumen yang diperlukan untuk melebarkan serviks dan menghilangkan jaringan abnormal dari lapisan rahim selama prosedur ginekologi.
                        </Text>
                    </View>
                    <View className='mt-4'>
                        <Text className='text-base font-medium text-left text-secondary'>Jadwal Maintenance:</Text>
                        <Text className='text-base font-bold text-left text-secondary'>15 Januari 2024</Text>
                    </View>
                    <View className='mt-4'>                    
                        <Text className='text-sm font-medium text-left text-gray-400'>*Maintenance dilakukan secara bertahap dan pengajuan pelaporan kerusakan dapat dilakukan melalui aplikasi maksimal H-2 jadwal maintenance.</Text>
                    </View>
                    <View className='flex flex-row gap-4 items-center mt-4'>
                        <TouchableOpacity className='grow py-2 px-2 rounded-md bg-[#0D20F1]' onPress={() => navigateReport('Report', id_asset)}>
                            <Text className='text-lg text-center font-bold text-secondary'>Laporkan Kerusakan</Text>
                        </TouchableOpacity>
                    </View>
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

export default Detail