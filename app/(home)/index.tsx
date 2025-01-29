import { View, Text, Image } from 'react-native'
import React from 'react'
import Container from '@/components/Container'
import Title from '@/components/Title'
import Box from '@/components/Box'
import Card from '@/components/Card'

export default function index() {
  return (
    <Container>
      <Title color='red'>This is Title</Title>
      <Box>
        <Card
          image='https://th.bing.com/th/id/R.80048c94faacac8b7ff6af18efa3d92a?rik=Ac82coHKVHLVyg&riu=http%3a%2f%2fwonderfulengineering.com%2fwp-content%2fuploads%2f2016%2f01%2fnature-wallpapers-8.jpg&ehk=GoUR7nA3jNm0gIdWFJoMVL1iu%2bJuWOU7Nu7KkgKZzeQ%3d&risl=&pid=ImgRaw&r=0' 
          title='Image Title'
          desc = 'this is a description. you can write anything in here...'

        />
      </Box>
    </Container>
  )
}