import { View, Text, Image, TextInput } from 'react-native'
import React from 'react'
import { useUser } from '@clerk/clerk-expo'
import { FontAwesome } from '@expo/vector-icons';


export default function Header() {
    const {user}=useUser();
  return (
    <View>
      {/*USer info section*/}
      <View className='flex items-center gap-2'>
        <Image source={{uri:user?.imageUrl}}
        
        className='rounded-full w-20 h-20'
        />

        <View className='items-center mt-2'>

          <Text className='text-[20px]'>Welcome  </Text>
          <Text className='text-[35px] font-bold'>{user?.firstName}</Text>
        </View>
      </View>
      {/*search bar*/}
      <View className='p-[14px] px-5 flex flex-row items-center bg-gray-170 mt-[30px] border-green-500 border-[1px] rounded-3xl shadow-lg'>
      <FontAwesome name="search" size={24} color="black" className='ml-3' />

        <TextInput placeholder='Search' className='ml-2 text-[18px]'
        onChangeText={(value)=>console.log(value)}
        />
      </View>
    </View>
  )
}