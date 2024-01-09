import { Image, ScrollView, Text, View } from "react-native"
import food1 from '../assets/food1.jpg'
import food2 from '../assets/food2.jpg'
import food3 from '../assets/food3.jpg'
import star from '../assets/star.png'

const FoodOrder = () => {
    const data = [
        {
            img: food1,
            title: 'Chicken Steak',
            desc: 'Roasted Chicken steak with vegetables',
            price: '30',
            stars: [star, star, star, star]
        },
        {
            img: food2,
            title: 'Chicken Breast',
            desc: 'Roasted chicken breast with vegetables',
            price: '20',
            stars: [star, star, star, star]
        },
        {
            img: food3,
            title: 'Vegie Salad',
            desc: 'Vegie salad is a dish of mixed vegetables',
            price: '10',
            stars: [star, star, star, star]
        }
    ]

    return (
        <ScrollView className='flex-col flex-1 gap-6 px-2 pt-8'>
            <View className='flex flex-row items-center'>
                <View className='p-2 bg-white shadow-md rounded-full'>
                    <Image source={require('../assets/arrow.png')} style={{width:18, height:18, resizeMode: 'contain'}}/>
                </View>
                <Text className='grow text-base font-medium text-center'>Your Order</Text>
                <Image source={require('../assets/person.jpg')} style={{width:30, height:30, resizeMode: 'contain', borderRadius: 50}}/>
            </View>
            <View className='px-2'>
                <View className='flex flex-col gap-4'>
                    {data.map((item, i) => {
                        const {img, title, desc, price, stars} = item
                        return (
                            <View key={i} className='flex flex-row gap-2 p-2 items-center rounded-md shadow-md bg-white'>
                                <Image source={img} className='rounded-full' style={{width:80, height:80, resizeMode: 'cover'}}/>
                                <View className='flex flex-col gap-1'>
                                    <View className='flex flex-row w-full'>
                                        <Text className='grow text-base font-semibold'>{title}</Text>
                                        <Text className='grow text-sm text-rose-500 font-medium'>2x</Text>
                                    </View>
                                    <Text className='w-[60%] text-xs text-gray-400 font-medium'>{desc}</Text>
                                    <View className='flex flex-row items-center gap-2'>
                                        <View className='grow flex flex-1 flex-row items-center'>
                                            <Text className='text-xs text-rose-500 font-medium'>$</Text>
                                            <Text className='text-xl font-semibold'>{price}</Text>
                                        </View>
                                        <View className='grow flex flex-row items-center'>
                                            {stars.map((star, i) => <Image source={star} key={i} style={{width:10, height:10, resizeMode: 'contain'}}/>)}
                                        </View>
                                    </View>
                                </View>
                            </View>
                        )
                    })}

                </View>
            </View>
            <View></View>
        </ScrollView>
    )
}

export default FoodOrder