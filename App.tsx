import React from 'react'
import { View, Text } from 'react-native'

const App = () => {
  return (
    <View style={{
      justifyContent:'center',
      flex:1
    }} >
      <Text
        style={{
          textAlign:'center',
          fontSize:45
        }}
      >Hello world!!</Text>
    </View>
  )
}

export default App
