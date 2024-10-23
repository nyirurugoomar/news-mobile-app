import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import Header from '@/components/Header'
import Searchbar from '@/components/Searchbar'
import axios from 'axios'
import { NewsDataType } from '@/types'
import BreakingNews from '@/components/BreakingNews'

type Props = {}

const Page = (props: Props) => {
  const {top:safeTop} = useSafeAreaInsets()
  const [breakingNews , setBreakingNews] = useState<NewsDataType[]>([])
  const [isLoading, setIsLoading] = useState(true)


  useEffect(() =>{
    getBreakingNews()
  },[])
  const getBreakingNews = async() =>{
    try{
      const URL = `https://newsdata.io/api/1/news?apikey=${process.env.EXPORT_PUBLIC_API_KEY}&country=us&language=en&category=business`
      const response = await axios .get(URL)
      if(response && response.data){
         setBreakingNews(response.data.results)
         setIsLoading(false)
      }
    }catch(err:any){
      console.log('Error Message', err.message)
    }
  }
  return (
    <View style={[styles.container, {paddingTop:safeTop}]}>
      <Header/>
      <Searchbar/>
      {isLoading ?(
        <ActivityIndicator size={'large'}/>
      ) :(
        <BreakingNews newsList={breakingNews}/>
      )} 
    </View>
  )
}

export default Page

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
})