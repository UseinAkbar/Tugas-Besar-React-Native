import { useEffect, useState } from "react"
import SelectDropdown from 'react-native-select-dropdown'
import { ActivityIndicator, Button, Image, ScrollView, StyleSheet, Text, TextInput, TouchableHighlight, TouchableOpacity, View } from "react-native"
import { getAllAsset } from "../helper/api/getAllAsset"
import { banner, curretage, examining, incubator, operating } from "../data"
import { getAllCategory } from "../helper/api/getAllCategory"
import SearchCategory from "./SearchCategory"
import SearchCode from "./SearchCode"
import SearchName from "./SearchName"
import { searchByCategory } from "../helper/api/search/searchByCategory"
import { searchByCode } from "../helper/api/search/searchByCode"
import { searchByName } from "../helper/api/search/searchByName"

const Home = ({navigation}) => {
    const [isLoading, setIsLoading] = useState(true);
    const [isSearchLoading, setIsSearchLoading] = useState(false);
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [searchType, setSearchType] = useState('Category')
    const [search, setSearch] = useState('')

    const getAssets = async () => {
        try {
            const data = await getAllAsset()
            setData(data)
            setFilteredData(data)
        } catch (error) {
            console.error(error);
        }
        setIsLoading(false)
    }

    const getAssetThumbnail = (state) => {
        if(state.toLowerCase().includes('curetage')) {
            return curretage[0]
        } else if(state.toLowerCase().includes('examining')) {
            return examining[0]
        } else if(state.toLowerCase().includes('operating')) {
            return operating[0]
        } else if(state.toLowerCase().includes('premature')) {
            return incubator[0]
        }
    }

    const handleSearch = async () => {
        setIsSearchLoading(true)
        if(searchType === 'Category') {
            const data = await searchByCategory(search)
            setFilteredData(data)
        } else if(searchType === 'Code') {
            const data = await searchByCode(search)
            setFilteredData(data)
        } else {
            const data = await searchByName(search)
            setFilteredData(data)
        }
        setIsSearchLoading(false)
    }
        
    const handleSelectSearchType = (selectedItem) => {
            setSearchType(selectedItem)
    }
        
    const handleSelectValue = (selectedItem, name = '') => {
        if(name === 'category') {
            setSearch(selectedItem.id)
            return
        }
        setSearch(selectedItem)
    }
        
    const handleChange = (value) => {
        setSearch(value)
    }

    const navigate = (route, id = '') => {
        navigation.navigate(route, {id})
    }

    const searchComponent = () => {
        if(searchType === 'Category') {
            return <SearchCategory handleSelectValue={handleSelectValue} />
        } else if(searchType === 'Code') {
            return <SearchCode handleSelectValue={handleSelectValue} />
        } else {
            return <SearchName handleChange={handleChange} search={search} />
        }
    }

    useEffect(() => {
        setSearch('')
    }, [searchType])

    useEffect(() => {
        getAssets()
    }, [])
    
    return (
        <ScrollView className='bg-primary'>
        {isLoading ? 
            <View className='p-6 h-screen flex justify-center items-center'>
                <ActivityIndicator size="large" color='#F9F5F6' />
            </View> :
            <View className='flex flex-col flex-1 gap-8 p-6 py-10'>
                <Text className='text-3xl font-bold text-left text-secondary'>Asset Management</Text>
                <View className='flex flex-col'>
                    <ScrollView horizontal={true} contentContainerStyle={styles.center}>
                    {banner.map((item, i) => {
                        return (
                            <View key={i}>
                                <Image source={item} className='rounded-md' style={{width:150, height:100, resizeMode: 'contain'}}/>
                            </View>
                        )
                    })}
                    </ScrollView>
                    <View className='w-full mt-4'>
                        <Text className='text-xl font-semibold text-left text-secondary'>Search by:</Text>
                        <SelectDropdown
                            data={['Category', 'Name', 'Code']}
                            defaultButtonText="Choose search type"
                            buttonStyle={{width:'100%', marginTop: 16, borderRadius: 10, backgroundColor: '#F9F5F6'}}
                            buttonTextStyle={{color: '#040D12', fontSize: 18, fontWeight: 'bold'}}
                            renderDropdownIcon={() => <Image source={require('../assets/chevron.png')} className='w-6 h-6' />}
                            onSelect={handleSelectSearchType}
                            buttonTextAfterSelection={(selectedItem) => {
                                return selectedItem
                            }}
                            rowTextForSelection={(item) => {
                                return item
                            }}
                        />
                    </View>
                    <View className='flex flex-col gap-4 mt-2'>
                        <Text className='text-xl font-semibold text-left text-secondary'>Search option:</Text>
                        <View className='grow'>
                            {searchComponent()}
                        </View>
                        <TouchableOpacity className='grow py-2 px-2 rounded-md bg-[#0D20F1]' onPress={handleSearch}>
                            <Text className='text-lg text-center font-bold text-secondary'>Search</Text>
                        </TouchableOpacity>
                    </View>
                    {
                        isSearchLoading ? 
                        <View className='h-40 flex justify-center items-center mt-4'>
                            <ActivityIndicator size="large" color='#F9F5F6' />
                        </View> :                    
                        <View className='flex flex-col gap-4 mt-4'>
                            {
                                filteredData.length === 0 ?
                                <Text className='text-xl font-semibold text-center text-secondary'>No data found</Text> :
                                filteredData.map((item, i) => {
                                    const {id, name, category} = item
                                    return (
                                        <TouchableOpacity key={id} className='p-4 rounded-md bg-[#191919] shadow-sm shadow-black' onPress={() => navigate('Detail', id)}>
                                            <View className='flex flex-row gap-4 items-center'>
                                                <Image source={getAssetThumbnail(name)} className='rounded-md' style={{width:60, height:60, resizeMode: 'contain'}}/>
                                                <View className='flex flex-col justify-center'>
                                                    <Text className='text-base font-bold text-left text-secondary'>{name.trimEnd()}</Text>
                                                    <Text className='text-sm font-medium text-left text-secondary'>{category}</Text>
                                                </View>
                                                {/* <Image source={require('../assets/plus.png')} className=''/> */}
                                            </View>
                                        </TouchableOpacity>
                                    )
                                })
                            }
                        </View>
                    }
                    <View className='flex flex-row gap-4 items-center mt-4'>
                        <TouchableOpacity className='grow py-2 px-2 rounded-md bg-secondary' onPress={() => navigate('Scan')}>
                            <Text className='text-lg text-center font-bold text-primary'>Scan QR Code</Text>
                        </TouchableOpacity>
                        <TouchableOpacity className='grow py-2 px-2 rounded-md bg-[#0D20F1]'>
                            <Text className='text-lg text-center font-bold text-secondary'>Scan Barcode</Text>
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
  });

export default Home