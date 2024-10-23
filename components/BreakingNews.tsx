import { View, Text, StyleSheet,FlatList } from 'react-native'
import React, { useState } from 'react'
import { Colors } from '@/constants/Colors'
import { NewsDataType } from '@/types'
import SliderItem from '@/components/SliderItem'

type Props = {
    newsList: Array<NewsDataType>
}

const BreakingNews = ({newsList}: Props) => {
    const [data,setData] = useState(newsList)
  return (
    <View style={sytles.container}>
      <Text style={sytles.title}>Breaking News</Text>
      <View style={sytles.slideWrapper}>
        <FlatList  data={data} keyExtractor={(_, index) =>`list_item${index}`} renderItem={({item,index}) =>(
            <SliderItem slideItem={item} index={index} />
        )}

        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        
        />
      </View>
    </View>
  )
}

export default BreakingNews

const sytles = StyleSheet.create({
  container:{
    marginBottom:10
  },
  title:{
    fontSize:18,
    fontWeight:'600',
    color:Colors.black,
    marginBottom:10,
    marginLeft:10,
  },
  slideWrapper:{
    // width:'100%',
    // flex:1,
    justifyContent: 'center'
  }
})