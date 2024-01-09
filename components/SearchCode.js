import SelectDropdown from 'react-native-select-dropdown'
import { getAllAsset } from '../helper/api/getAllAsset'
import { useEffect, useState } from 'react'
import { Image } from 'react-native'

const SearchCode = ({handleSelectValue}) => {
    const [assets, setAssets] = useState([])
    const getAssets = async () => {
        const data = await getAllAsset()
        const mappedData = data.map((item) => item.asset_code)
        setAssets(mappedData)
    }

    useEffect(() => {
        getAssets()
    }, [])

    return (
        <SelectDropdown
            data={assets}
            defaultButtonText={'Choose asset code'}
            buttonStyle={{width:'100%', borderRadius: 10, backgroundColor: '#F9F5F6'}}
            buttonTextStyle={{color: '#040D12', fontSize: 18, fontWeight: 'bold'}}
            renderDropdownIcon={() => <Image source={require('../assets/chevron.png')} className='w-6 h-6' />}
            onSelect={handleSelectValue}
            buttonTextAfterSelection={(selectedItem, index) => {
                return selectedItem
            }}
            rowTextForSelection={(item, index) => {
                return item
            }}
        />
    )
}

export default SearchCode