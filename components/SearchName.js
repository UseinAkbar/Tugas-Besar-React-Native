import { TextInput } from "react-native"

const SearchName = ({handleChange, search}) => {
    return (
        <TextInput
            className='grow px-4 py-3 bg-secondary text-lg font-semibold text-primary rounded-lg'
            onChangeText={(value) => handleChange(value)}
            value={String(search)}
            placeholder='Search asset'
            placeholderTextColor='#040D12'
        />
    )
}

export default SearchName