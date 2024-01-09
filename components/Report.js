import { useEffect, useState } from "react"
import { ActivityIndicator, Image, ScrollView, StyleSheet, Text, TextInput, TouchableHighlight, TouchableOpacity, View } from "react-native"
import { getAssetById } from "../helper/api/getAssetById"

const Report = ({navigation, route}) => {
    const {id} = route.params
    const [screenLoad, setScreenLoad] = useState(true)
    const [isLoad, setIsLoad] = useState(false)
    const [isCTALoad, setIsCTALoad] = useState(false)
    const [detailAsset, setDetailAsset] = useState({
        id: '',
        asset_code: '',
        name: '',
        category: ''
    })
    const {name, asset_code, category} = detailAsset
    const [dataKerusakan, setDataKerusakan] = useState({
        tipe: '',
        uraian: '',
        pernahRusak: false
    })
    const [isValid, setIsValid] = useState(false)
    const [estimasi, setEstimasi] = useState('-')
    const {tipe, uraian, pernahRusak} = dataKerusakan

    const handlePress = () => {
        setDataKerusakan(preVal => {
            return {
                ...preVal,
                pernahRusak: !pernahRusak
            }
        })
    }

    const handleChange = (name, value) => {
        setDataKerusakan(preVal => {
            return {
                ...preVal,
                [name]: value
            }
        })
    }

    const hitungEstimasi = () => {
        setIsLoad(true)
        if(!tipe || !['sebagian', 'sedang', 'parah'].includes(tipe.toLowerCase())) {
            setIsValid(false)
            setEstimasi('Masukkan tipe kerusakan!')
            setIsLoad(false)
            return
        }

        if(pernahRusak) {
            switch (tipe.toLowerCase()) {
                case 'sebagian':
                    setEstimasi('4 Hari')
                    break;
                case 'sedang':
                    setEstimasi('8 Hari')
                    break;
                case 'parah':
                    setEstimasi('14 Hari')
                    break;
                default:
                    break;
            }
        } else {
            switch (tipe.toLowerCase()) {
                case 'sebagian':
                    setEstimasi('2 Hari')
                    break;
                case 'sedang':
                    setEstimasi('4 Hari')
                    break;
                case 'parah':
                    setEstimasi('7 Hari')
                    break;
                default:
                    break;
            }
        }
        setTimeout(() => {
            setIsValid(true)
            setIsLoad(false)
        }, 1000)
    }

    const handleSubmitLapor = () => {
        setIsCTALoad(true)
        setTimeout(() => {
            navigation.navigate('ReportSuccess', {
                id,
                name,
                asset_code,
                category,
                tipe,
                uraian,
                pernahRusak
            })
            setIsCTALoad(false)
        }, 1000)
    }

    const getDetailAsset = async () => {
        const data = await getAssetById(id)
        setDetailAsset(data)
        setScreenLoad(false)
    }

    const navigateBack = () => {
        navigation.goBack()
    }

    useEffect(() => {
        getDetailAsset()
    }, [])
    
    return (
        <ScrollView contentContainerStyle={styles.container} className='bg-primary'>
        {screenLoad ? 
            <View className='h-screen flex justify-center items-center'>
                <ActivityIndicator size="large" color='#F9F5F6' />
            </View> :
            <View className='flex flex-col flex-1 gap-8 p-6'>
                <View className='flex flex-row justify-between items-center'>
                    <TouchableOpacity onPress={navigateBack}>
                        <View className=' w-12 h-12 flex items-center justify-center rounded-full border-2 border-secondary p-2'>
                            <Image source={require('../assets/left-arrow.png')} className=''/>
                        </View>
                    </TouchableOpacity>
                    <Image source={require('../assets/person.jpg')} style={{width:50, height:50, resizeMode: 'contain', borderRadius: 50}}/>
                </View>
                <View className='flex flex-col'>
                    <View className=''>
                        <Text className='text-3xl font-bold text-left text-secondary'>{name}</Text>
                        <Text className='text-xl font-medium text-left text-secondary mt-4'>
                            Category: {category.trimEnd()}
                        </Text>
                    </View>
                    <View className='mt-4'>
                        <Text className='text-lg font-medium text-left text-secondary'>Tipe Kerusakan</Text>
                        <TextInput
                            className='px-4 py-2 bg-[#191919] rounded-md text-lg font-semibold text-white placeholder:light mt-2'
                            onChangeText={(value) => handleChange('tipe', value)}
                            value={tipe}
                            placeholder='tipe kerusakan'
                            placeholderTextColor='rgb(156 163 175)'
                        />
                        <Text className='text-base font-medium text-left text-secondary'>*sebagian/sedang/parah</Text>
                    </View>
                    <View className='mt-4'>
                        <Text className='text-lg font-medium text-left text-secondary'>Uraian Kerusakan</Text>
                        <TextInput
                            className='px-4 py-2 bg-[#191919] rounded-md text-lg font-semibold text-white placeholder:light mt-2'
                            onChangeText={(value) => handleChange('uraian', value)}
                            value={uraian}
                            placeholder='uraian kerusakan'
                            placeholderTextColor='rgb(156 163 175)'
                        />
                    </View>
                    <Text className='text-lg font-medium text-left text-secondary mt-4'>Pernah Rusak Sebelumnya?</Text>
                    <View className='px-4 py-2 bg-[#191919] rounded-md mt-4'>
                        <View className='flex flex-row items-center justify-between'>
                            <Text className='text-lg font-medium text-left text-secondary'>Pernah rusak?</Text>
                            <TouchableHighlight className={`flex flex-row items-center w-16 h-8 rounded-full border-2 border-secondary p-2 ${pernahRusak && 'bg-secondary'}`} onPress={handlePress}>
                                <View className={`w-5 h-5 rounded-full bg-secondary ${pernahRusak && 'ml-auto bg-primary'}`}></View>
                            </TouchableHighlight>
                        </View>
                    </View>
                    <View className='h-[1px] w-full bg-secondary rounded mt-4' />
                    <View>                        
                        <View className='mt-4'>
                            <Text className='text-lg font-medium text-left text-secondary'>Estimasi perbaikan:</Text>
                            {isLoad ? 
                            <Text className='text-2xl font-medium text-left text-secondary'>Calculating...</Text> :
                            <Text className='text-2xl font-bold text-left text-secondary'>{estimasi}</Text>                     
                            }
                        </View>                        
                    </View>
                    <View className='flex flex-row gap-4 items-center mt-4'>
                        <TouchableOpacity className='grow flex flex-row justify-center items-center h-11 px-2 rounded-md bg-secondary' onPress={hitungEstimasi}>
                            <Text className='text-lg text-center font-bold text-primary'>Hitung</Text>
                        </TouchableOpacity>
                        <TouchableOpacity className={`grow flex flex-row justify-center items-center h-11 px-2 rounded-md ${isValid ? 'bg-[#0D20F1]' : 'bg-[#6b7280]'}`} onPress={handleSubmitLapor} disabled={isValid ? false : true}>
                            {isCTALoad ? 
                            <ActivityIndicator size="large" color='#F9F5F6' /> : 
                            <Text className='text-lg text-center font-bold text-secondary'>Laporkan</Text>
                            }
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

export default Report