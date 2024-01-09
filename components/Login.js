import { useState } from "react"
import { Button, Image, ScrollView, StyleSheet, Text, TextInput, TouchableHighlight, TouchableOpacity, View } from "react-native"

const Login = () => {
    const [loginValue, setLoginValue] = useState({username: '', password: ''})
    const {username, password} = loginValue

    const handleLogin = () => {
        alert(`${username} logged in!`)
    }

    const handleChange = (name, value) => {
        setLoginValue(preVal => {
            return {
                ...preVal,
                [name]: value
            }
        })
    }
    
    return (
        <View className='flex-col flex-1 justify-center gap-10 px-6 relative z-[3]'>
            <View className='flex-col gap-4'>
                <View className='flex items-center'>                
                    <Image source={require('../assets/netflix.png')} style={{width:200, height:100, resizeMode: 'contain'}}/>
                </View>
                <Text className='text-3xl text-white font-bold mb-4'>Hi there,</Text>
                <TextInput
                    className='px-4 py-2 bg-transparent text-lg font-semibold text-white border-b-[1px] border-solid border-gray-200'
                    onChangeText={(value) => handleChange('username', value)}
                    value={username}
                    placeholder='Username'
                    placeholderTextColor='rgb(229 231 235)'
                />
                <TextInput
                    className='px-4 py-2 bg-transparent text-lg font-semibold text-white border-b-[1px] border-solid border-gray-200'
                    onChangeText={(value) => handleChange('password', value)}
                    value={password}
                    placeholder="Password"
                    placeholderTextColor='rgb(229 231 235)'
                    secureTextEntry={true}
                />
                <Text className='text-sm text-white text-right font-semibold'>Forgot password?</Text>
                <TouchableOpacity className='py-2 px-2 mt-2 rounded bg-[#db0000]' onPress={handleLogin}>
                    <Text className='text-base text-center font-bold text-white'>Sign In</Text>
                </TouchableOpacity>
            </View>
            <View className='flex-col'>
                <Text className='text-sm text-white text-center font-normal mt-2'>
                    Don't have an account? <Text className='font-semibold'>Sign up</Text>
                </Text>
                <Text className='text-xs text-white text-center font-light mt-6'>Sign in is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.</Text>
            </View>
        </View>
    )
}

export default Login