import { View, Text, Image } from 'react-native'
import React from 'react'
import Container from '@/components/Container'
import Title from '@/components/Title'

export default function index() {
  return (
    <Container>
      <Title color='red'>This is Title</Title>
      <Image
        source={{ uri: 'https://th.bing.com/th/id/R.80048c94faacac8b7ff6af18efa3d92a?rik=Ac82coHKVHLVyg&riu=http%3a%2f%2fwonderfulengineering.com%2fwp-content%2fuploads%2f2016%2f01%2fnature-wallpapers-8.jpg&ehk=GoUR7nA3jNm0gIdWFJoMVL1iu%2bJuWOU7Nu7KkgKZzeQ%3d&risl=&pid=ImgRaw&r=0' }}
        className='w-full h-56'
        resizeMode='contain'
      />
    </Container>
  )
}