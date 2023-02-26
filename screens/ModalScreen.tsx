import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, ScrollView, AsyncStorageStatic, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View, } from '../components/Themed';
import {useSelector} from 'react-redux';
import { useEffect, useState } from 'react';
export default function ModalScreen({route}:any) {
  const [data,setData] = useState<any>([]);
  const isDarkMode = useSelector((state: any) => state.dataSlice.isDarkMode);
  useEffect(() => {
    getData()
  }, [])

const getData = async () => {
  console.log("Inside Function")
  console.log("Data",data)
  try {
    const jsonValue = await AsyncStorage.getItem('Result')
    if(jsonValue !== null) {
      setData(JSON.parse(jsonValue))

    }
  } catch(e) {
    // error reading value
    console.log("Error",e)
  }
}
const deleteData = async () => {
  try {
    await AsyncStorage.removeItem('Result')
    setData([])
  } catch(e) {
    // remove error
  }
}


  return (
    <View style={isDarkMode ? styles.container : styles.lightContainer}>
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
      <TouchableOpacity
        onPress={() => deleteData()}
        >
        <Text style={isDarkMode ? styles.title :styles.lightTitle }>Clear History</Text>
        </TouchableOpacity>
      <ScrollView>

        <View>
        {data.map((item:any) => {
          const key = Math.floor(Math.random()*10000)
          return (
            <View style={isDarkMode ?{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end',
              alignItems: 'flex-end',
              backgroundColor: 'black',
            }: {
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end',
              alignItems: 'flex-end',
              backgroundColor: 'white',
            }} key={key}>
            <Text style={isDarkMode ? styles.pt :styles.lpt }>{item.operation}</Text>
            <Text style={isDarkMode ? styles.rt :styles.lrt }>{item.result}</Text>
            </View>
          )
        })}
      </View>
      
      </ScrollView>
      {/* Use a light status bar on iOS to account for the black space above the modal */}
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: 'black',

  },
  lightContainer: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: 'white',
    color: 'black',
  },
  title: {
    textAlign: 'center',
    fontSize: 35,
    fontWeight: 'bold',
    color: 'white',
  },
  pt:{
    fontSize: 23,
    fontWeight: 'bold',
    marginTop: 20,
    marginRight: 10,
    color: 'white',
  },
  lpt:{
    fontSize: 23,
    fontWeight: 'bold',
    color: 'black',
    backgroundColor: 'white',
    marginRight: 10,
  },
  rt:{
    fontSize: 15,
    fontWeight: 'bold',
    color: 'gray',
    backgroundColor: 'black',
    marginRight: 10,
  },
  lrt:{
    fontSize: 15,
    fontWeight: 'bold',
    backgroundColor: 'white',
    color: 'gray',
    marginRight: 10,
  },

  lightTitle:{
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
    backgroundColor: 'white',

  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
