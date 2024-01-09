import { useEffect, useState } from 'react'
import { Image } from 'react-native'
import SelectDropdown from 'react-native-select-dropdown'
import { getAllCategory } from '../helper/api/getAllCategory'

const SearchCategory = ({handleSelectValue}) => {
    const [categories, setCategories] = useState([])
    const getCategories = async () => {
        const data = await getAllCategory()
        setCategories(data)
    }

    useEffect(() => {
        getCategories()
    }, [])

    return (
        <SelectDropdown
            data={categories}
            defaultButtonText={'Choose category'}
            buttonStyle={{ width: '100%', borderRadius: 10, backgroundColor: '#F9F5F6'}}
            buttonTextStyle={{color: '#040D12', fontSize: 18, fontWeight: 'bold'}}
            renderDropdownIcon={() => <Image source={require('../assets/chevron.png')} className='w-6 h-6' />}
            onSelect={(selectedItem) => handleSelectValue(selectedItem, 'category')}
            buttonTextAfterSelection={(selectedItem, index) => {
                return selectedItem.category
            }}
            rowTextForSelection={(item, index) => {
                return item.category
            }}
        />
    )
}

export default SearchCategory