
// import React, { useState } from 'react';
// import { View, Text, StyleSheet, Button, Alert, TouchableOpacity, ScrollView } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { useSelector } from 'react-redux';
// import { Motion } from '@legendapp/motion';
// export default function TabOneScreen({ navigation }: any ): JSX.Element {
//   const isDarkMode = useSelector((state: any) => state.dataSlice.isDarkMode);
//   console.log("Dark Mode",isDarkMode)
//   const [number, setNumber] = useState<string>('0');
//   const [result, setResult] = useState<string>('');
//   const [total,setTotal] = useState<number>(0);




//   const handlePress = (buttonValue: string) => {

//     // console.log("Inside Function Number",number)
//     // console.log("Inside Function Total Number",total)
//     // console.log("Inside Function Previous Input",number[total])
//     // console.log("Current Inserted Value",buttonValue)

//     if (number[total] === '+' || number[total] === '-' || number[total] === '*' || number[total] === '/'){
//       if (buttonValue === '+' || buttonValue === '-' || buttonValue === '*' || buttonValue === '/'){
//         Alert.alert('Invalid operation');
//         return;
//       }
//     }
//      if (buttonValue === 'C') {
//       setNumber('0');
//       setResult('');
//       setTotal(0)

//     }else if (buttonValue === '=') {
//       const x = number[0] === '*' || number[0] === '/'
//       if (x === false){
//         try{
//           setResult(eval(number).toString());
//           storeData(eval(number).toString());
//         }catch(err){
//           Alert.alert('Cannot perform this operation');
//         }
//       }else{
//         Alert.alert('Cannot perform this operation');
//       }
//     }
//     else if(number[0] === '*' || number[0] === '/' || number[0] === '%'){
//       Alert.alert('Invalid operation');
//     }else if(buttonValue === 'Del'){
//       if (number.length === 1){
//         setNumber('0');
//         setTotal(0)
//       }else{
//         setNumber(number.slice(0, -1));
//         setTotal(total - 1)
//       }
//     } 
//       else {
//       if (number === '0') {
//         setNumber(buttonValue);
//       } else {
//       setNumber(number + buttonValue);
//       setTotal(total + 1)
//     }
//   }
// };
// // const storeData = async (v:any) => {
// //   console.log("Inside Store Data", number)
// //   const obj = {
// //     operation: number,
// //     result: v,
// //   }
// //   try {
// //    const storedJsonValue =  await AsyncStorage.getItem('Result')
// //    console.log("Stored Value",storedJsonValue)

// //     if(storedJsonValue !== null){
// //       const jsonValue = JSON.parse(storedJsonValue)
// //       console.log("Parsed Value",jsonValue)
// //       jsonValue.push(obj)
// //       console.log("Pushed Value",jsonValue)
// //       await AsyncStorage.setItem('Result', JSON.stringify(jsonValue))
// //     }
// //     else{
// //       await AsyncStorage.setItem('Result', JSON.stringify(obj))
// //     }

// //   } catch (e) {
// //     // saving error
// //     console.log("Error",e)
// //   }
// // }

// const storeData = async (v:any) => {
//   console.log("Inside Store Data", number)
//   const obj = {
//     operation: number,
//     result: v,
//   }
//   try {
//     const storedJsonValue =  await AsyncStorage.getItem('Result')
//     console.log("Stored Value",typeof storedJsonValue)
  
//       if(storedJsonValue !== null){
//         const jsonValue = JSON.parse(storedJsonValue)
//         console.log("Parsed Value",jsonValue)
//         jsonValue.push(obj)
//         console.log("Pushed Value",jsonValue)
//         await AsyncStorage.setItem('Result', JSON.stringify(jsonValue))
//       }
//       else{
//         await AsyncStorage.setItem('Result', JSON.stringify([obj]))
//       }
  
//     } catch (e) {
//       // saving error
//       console.log("Error",e)
//     }
// }

  

//   const renderButtons = () => {
//     const buttons = [];
//     const buttonValues = [
//       '(',
//       '7',
//       '4',
//       '1',
//       '0'

//     ];
//     for (let i = 0; i < buttonValues.length; i++) {
//       buttons.push(
//         <TouchableOpacity
//           key={buttonValues[i]}
//           onPress={() => handlePress(buttonValues[i])}
//           style={{
//             backgroundColor: buttonValues[i] === "(" ? 'rgb(103, 103, 103)': 'rgb(240, 240, 240)' && isDarkMode === true ?  'rgb(240, 240, 240)' : 'lightgrey',
//             borderRadius: buttonValues[i] === '(' ? 20 : 50,
//             padding: 10,
//             width: 70,
//             height: 70,
//             marginTop: 15,
//             display: 'flex',
//             justifyContent: 'center',
//             alignItems: 'center',
//           }}
//         >
//           <Text style={{
//             fontSize: 30,
//             color: buttonValues[i] === '(' ? 'white' : 'black',
//             fontWeight: 'bold',
//             textAlign: 'center',
//           }}
//           >
//             {buttonValues[i]}
//           </Text>
//         </TouchableOpacity>

//       );
//     }
//     return buttons;
//   };
//   const renderButtons1 = () => {
//     const buttons = [];
//     const buttonValues = [
//       ')',
//       '8',
//       '5',
//       '2',
//       '.'
//     ];
//     for (let i = 0; i < buttonValues.length; i++) {
//       buttons.push(
//         <TouchableOpacity
//           key={buttonValues[i]}
//           style={{
//             backgroundColor: buttonValues[i] === ")" ? 'rgb(103, 103, 103)': 'rgb(240, 240, 240)' && isDarkMode === true ?  'rgb(240, 240, 240)' : 'lightgrey',
//             borderRadius: buttonValues[i] === ')' ? 20 : 50,
//             padding: 10,
//             width: 70,
//             height: 70,
//             marginTop: 15,
//             display: 'flex',
//             justifyContent: 'center',
//             alignItems: 'center',
//           }}
//           onPress={() => handlePress(buttonValues[i])}
//         >
//           <Text style={{
//             fontSize: 30,
//             color: buttonValues[i] === ')' ? 'white' : 'black',
//             fontWeight: 'bold',
//             textAlign: 'center',
//           }}
//           >
//             {buttonValues[i]}
//           </Text>
//         </TouchableOpacity>,

//       );
//     }

//     return buttons;
//   };
//   const renderButtons2 = () => {
//     const buttons = [];
//     const buttonValues = [
//       '%',
//       '9',
//       '6',
//       '3',
//       '='
//     ];
//     for (let i = 0; i < buttonValues.length; i++) {
//       buttons.push(
//         <TouchableOpacity
//           key={buttonValues[i]}
//           style={{
//             backgroundColor: buttonValues[i] === "%" ? 'rgb(103, 103, 103)': 'rgb(240, 240, 240)' && isDarkMode === true ?  'rgb(240, 240, 240)' : 'lightgrey',
//             borderRadius: buttonValues[i] === '%' ? 20 : 50,
//             padding: 10,
//             width: 70,
//             height: 70,
//             marginTop: 15,
//             display: 'flex',
//             justifyContent: 'center',
//             alignItems: 'center',

//           }}
//           onPress={() => handlePress(buttonValues[i])}
//         >
//           <Text style={{
//             fontSize: 30,
//             color: buttonValues[i] === '%' ? 'white' : 'black',
//             fontWeight: 'bold',
//             textAlign: 'center',
            
//           }}
//           >
//             {buttonValues[i]}
//           </Text>

//         </TouchableOpacity>,
//       );
//     }
//     return buttons;
//   };
//   const renderButtons3 = () => {
//     const buttons = [];
//     const buttonValues = [
//       'Del',
//       '/',
//       '*',
//       '-',
//       '+',
//       'C',
//     ];
//     for (let i = 0; i < buttonValues.length; i++) {
//       buttons.push(
       
//         <TouchableOpacity
//         // color={buttonValues[i] === 'C' ? 'red' : 'blue'}
//           key={buttonValues[i]}
//           style={{
//             backgroundColor: '#333399',
//             borderRadius: 20,
//             height: 57,
//             width: 75,
//             marginTop: 13,
//             display: 'flex',
//             justifyContent: 'center',
//             alignItems: 'center',

//           }}
//           onPress={() => handlePress(buttonValues[i])}
//         >
//           <Text style={{
//             fontSize: 30,
//             color:'white',
//             fontWeight: 'bold',
//             textAlign: 'center',
      
//           }}>{buttonValues[i]}</Text>
//         </TouchableOpacity>
//       );
//     }

//     return buttons;
//   };

//   return (
//     <View style={isDarkMode ? styles.container : styles.lightContainer}>
//       {/* <Text
//         style={{
//           color: 'white',
//           fontSize: 30,
//           fontWeight: 'bold',
//           textAlign: 'left',
//           marginTop: 20,
//         }}
//       >
//         Calculator
//       </Text> */}
//       <Text>

//       </Text>
//       <Text>
//         </Text>
//         <Text>
//         </Text>
//         <Text>
        
//         </Text>

//       <View style={styles.display}>
//         <Text style={isDarkMode? styles.number : styles.lightNumber}>{number}</Text>
//         <Text style={styles.result}>{result}</Text>
//       </View>
     
//       <View>
//       </View>
//       <View style={styles.buttonsFlex}>
//         <View style={styles.buttons}>{renderButtons()}</View>
//         <View style={styles.buttons}>{renderButtons1()}</View>
//         <View style={styles.buttons}>{renderButtons2()}</View>
//         <View style={styles.buttons}>{renderButtons3()}</View>
        
//       </View>

  

      
//     </View>
//   );
// }


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'flex-end',
//     justifyContent: 'flex-end',
//     backgroundColor: 'rgba(18, 18, 18, 255)',
//     // backgroundColor: 'black',
//     padding:10

//   },
//   lightContainer:{
//     flex: 1,
//     backgroundColor: 'white',
//     padding:10
//   },
//   display: {
//     flex: 1,
//     justifyContent: 'flex-end',
//     alignItems: 'flex-end',
//     padding: 10,
//     paddingBottom: 20,
//   },
//   buttons: {
//     flex: 3,
//     flexDirection: 'column',
//     margin: 10,
//   },
//   buttonsFlex:{
//     flex: 3,
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     justifyContent: 'space-between',
//     alignItems: 'flex-end',
//   },
//   lightNumber:{
//     fontSize: 50,
//     fontWeight: 'bold',
//     color: 'black',
//     textAlign: 'right',
//   },
//   number: {
//     fontSize: 50,
//     fontWeight: 'bold',
//     color: 'white',
//     textAlign: 'right',
//   },

//   result: {
//     fontSize: 30,
//     color: 'gray',
//     textAlign: 'right',
//   },
// });



import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, Alert, TouchableOpacity, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useSelector } from 'react-redux';
import { Motion } from '@legendapp/motion';
export default function TabOneScreen({ navigation }: any ): JSX.Element {
  const isDarkMode = useSelector((state: any) => state.dataSlice.isDarkMode);
  console.log("Dark Mode",isDarkMode)
  const [number, setNumber] = useState<string>('0');
  const [result, setResult] = useState<string>('');
  const [total,setTotal] = useState<number>(0);




  const handlePress = (buttonValue: string) => {

    // console.log("Inside Function Number",number)
    // console.log("Inside Function Total Number",total)
    // console.log("Inside Function Previous Input",number[total])
    // console.log("Current Inserted Value",buttonValue)

    if (number[total] === '+' || number[total] === '-' || number[total] === '*' || number[total] === '/'){
      if (buttonValue === '+' || buttonValue === '-' || buttonValue === '*' || buttonValue === '/'){
        Alert.alert('Invalid operation');
        return;
      }
    }
     if (buttonValue === 'C') {
      setNumber('0');
      setResult('');
      setTotal(0)

    }else if (buttonValue === '=') {
      const x = number[0] === '*' || number[0] === '/'
      if (x === false){
        try{
          setResult(eval(number).toString());
          storeData(eval(number).toString());
        }catch(err){
          Alert.alert('Cannot perform this operation');
        }
      }else{
        Alert.alert('Cannot perform this operation');
      }
    }
    else if(number[0] === '*' || number[0] === '/' || number[0] === '%'){
      Alert.alert('Invalid operation');
    }else if(buttonValue === 'Del'){
      if (number.length === 1){
        setNumber('0');
        setTotal(0)
      }else{
        setNumber(number.slice(0, -1));
        setTotal(total - 1)
      }
    } 
      else {
      if (number === '0') {
        setNumber(buttonValue);
      } else {
      setNumber(number + buttonValue);
      setTotal(total + 1)
    }
  }
};
// const storeData = async (v:any) => {
//   console.log("Inside Store Data", number)
//   const obj = {
//     operation: number,
//     result: v,
//   }
//   try {
//    const storedJsonValue =  await AsyncStorage.getItem('Result')
//    console.log("Stored Value",storedJsonValue)

//     if(storedJsonValue !== null){
//       const jsonValue = JSON.parse(storedJsonValue)
//       console.log("Parsed Value",jsonValue)
//       jsonValue.push(obj)
//       console.log("Pushed Value",jsonValue)
//       await AsyncStorage.setItem('Result', JSON.stringify(jsonValue))
//     }
//     else{
//       await AsyncStorage.setItem('Result', JSON.stringify(obj))
//     }

//   } catch (e) {
//     // saving error
//     console.log("Error",e)
//   }
// }

const storeData = async (v:any) => {
  console.log("Inside Store Data", number)
  const obj = {
    operation: number,
    result: v,
  }
  try {
    const storedJsonValue =  await AsyncStorage.getItem('Result')
    console.log("Stored Value",typeof storedJsonValue)
  
      if(storedJsonValue !== null){
        const jsonValue = JSON.parse(storedJsonValue)
        console.log("Parsed Value",jsonValue)
        jsonValue.push(obj)
        console.log("Pushed Value",jsonValue)
        await AsyncStorage.setItem('Result', JSON.stringify(jsonValue))
      }
      else{
        await AsyncStorage.setItem('Result', JSON.stringify([obj]))
      }
  
    } catch (e) {
      // saving error
      console.log("Error",e)
    }
}

  

  const renderButtons = () => {
    const buttons = [];
    const buttonValues = [
      '(',
      '7',
      '4',
      '1',
      '0'

    ];
    for (let i = 0; i < buttonValues.length; i++) {
      buttons.push(
        <Motion.Pressable
        key={buttonValues[i]}
        
        onPress={() => handlePress(buttonValues[i])}
      >
        <Motion.View whileTap={{
          y: 12,
        }} style={{
          backgroundColor: buttonValues[i] === "(" ? 'rgb(103, 103, 103)': 'rgb(240, 240, 240)' && isDarkMode === true ?  'rgb(240, 240, 240)' : 'lightgrey',
          borderRadius: buttonValues[i] === '(' ? 20 : 50,
          padding: 10,
          width: 70,
          height: 70,
          marginTop: 15,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{
          fontSize: 30,
          color: buttonValues[i] === '(' ? 'white' : 'black',
          fontWeight: 'bold',
          textAlign: 'center',
        }}
        >
          {buttonValues[i]}
        </Text>
        </Motion.View>
        
      </Motion.Pressable>,
      );
    }
    return buttons;
  };
  const renderButtons1 = () => {
    const buttons = [];
    const buttonValues = [
      ')',
      '8',
      '5',
      '2',
      '.'
    ];
    for (let i = 0; i < buttonValues.length; i++) {
      buttons.push(
        <Motion.Pressable
        key={buttonValues[i]}
        
        onPress={() => handlePress(buttonValues[i])}
      >
        <Motion.View whileTap={{
          y: 12,
        }} style={{
          backgroundColor: buttonValues[i] === ")" ? 'rgb(103, 103, 103)': 'rgb(240, 240, 240)' && isDarkMode === true ?  'rgb(240, 240, 240)' : 'lightgrey',
          borderRadius: buttonValues[i] === ')' ? 20 : 50,
          padding: 10,
          width: 70,
          height: 70,
          marginTop: 15,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{
          fontSize: 30,
          color: buttonValues[i] === ')' ? 'white' : 'black',
          fontWeight: 'bold',
          textAlign: 'center',
          
        }}
        >
          {buttonValues[i]}
        </Text>
        </Motion.View>
        
      </Motion.Pressable>,

      );
    }

    return buttons;
  };
  const renderButtons2 = () => {
    const buttons = [];
    const buttonValues = [
      '%',
      '9',
      '6',
      '3',
      '='
    ];
    for (let i = 0; i < buttonValues.length; i++) {
      buttons.push(

        <Motion.Pressable
          key={buttonValues[i]}
          
          onPress={() => handlePress(buttonValues[i])}
        >
          <Motion.View whileTap={{
            y: 12,
          }} style={{
            backgroundColor: buttonValues[i] === "%" ? 'rgb(103, 103, 103)': 'rgb(240, 240, 240)' && isDarkMode === true ?  'rgb(240, 240, 240)' : 'lightgrey',
            borderRadius: buttonValues[i] === '%' ? 20 : 50,
            padding: 10,
            width: 70,
            height: 70,
            marginTop: 15,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{
            fontSize: 30,
            color: buttonValues[i] === '%' ? 'white' : 'black',
            fontWeight: 'bold',
            textAlign: 'center',
            
          }}
          >
            {buttonValues[i]}
          </Text>
          </Motion.View>
          
        </Motion.Pressable>,
      );
    }
    return buttons;
  };
  const renderButtons3 = () => {
    const buttons = [];
    const buttonValues = [
      'Del',
      '/',
      '*',
      '-',
      '+',
      'C',
    ];
    for (let i = 0; i < buttonValues.length; i++) {
      buttons.push(
        <Motion.Pressable
        key={buttonValues[i]} 
        // color={buttonValues[i] === 'C' ? 'red' : 'blue'}
          onPress={() => handlePress(buttonValues[i])}
        >
        <Motion.View whileTap={{
          y:12,
        }}           style={{
          backgroundColor: '#333399',
          borderRadius: 20,
          height: 57,
          width: 75,
          marginTop: 13,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <Motion.Text style={{
            fontSize: 30,
            color:'white',
            fontWeight: 'bold',
            textAlign: 'center',
      
          }}>{buttonValues[i]}</Motion.Text>
      </Motion.View>
      </Motion.Pressable>
      );
    }

    return buttons;
  };

  return (
    <View style={isDarkMode ? styles.container : styles.lightContainer}>
      {/* <Text
        style={{
          color: 'white',
          fontSize: 30,
          fontWeight: 'bold',
          textAlign: 'left',
          marginTop: 20,
        }}
      >
        Calculator
      </Text> */}
      <Text>

      </Text>
      <Text>
        </Text>
        <Text>
        </Text>
        <Text>
        
        </Text>

      <View style={styles.display}>
        <Text style={isDarkMode? styles.number : styles.lightNumber}>{number}</Text>
        <Text style={styles.result}>{result}</Text>
      </View>
     
      <View>
      </View>
      <View style={styles.buttonsFlex}>
        <View style={styles.buttons}>{renderButtons()}</View>
        <View style={styles.buttons}>{renderButtons1()}</View>
        <View style={styles.buttons}>{renderButtons2()}</View>
        <View style={styles.buttons}>{renderButtons3()}</View>
        
      </View>      
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(18, 18, 18, 255)',
    // backgroundColor: 'black',
    padding:10

  },
  lightContainer:{
    flex: 1,
    backgroundColor: 'white',
    padding:10
  },
  display: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    padding: 10,
    paddingBottom: 20,
  },
  buttons: {
    flex: 3,
    flexDirection: 'column',
    margin: 10,
  },
  buttonsFlex:{
    flex: 3,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  lightNumber:{
    fontSize: 50,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'right',
  },
  number: {
    fontSize: 50,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'right',
  },

  result: {
    fontSize: 30,
    color: 'gray',
    textAlign: 'right',
  },
});


