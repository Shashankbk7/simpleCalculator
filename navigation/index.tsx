/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, Pressable, Text, View, Switch } from 'react-native';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import ModalScreen from '../screens/ModalScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import TabOneScreen from '../screens/TabOneScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import { RootStackParamList, RootTabParamList,  } from '../types';
import LinkingConfiguration from './LinkingConfiguration';
import { useDispatch, useSelector } from 'react-redux';
import { Actions } from '../redux/dataSlice';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="History" component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();
  const [isEnabled, setIsEnabled] = React.useState(false);
  const isDarkMode = useSelector((state: any) => state.dataSlice.isDarkMode);
  const dispatch = useDispatch();

  return (
    <BottomTab.Navigator
      initialRouteName="Calculator"
      screenOptions={{
        // tabBarActiveTintColor: Colors[colorScheme].tint,
      }}>
      <BottomTab.Screen
        name="Calculator"
        component={TabOneScreen}
        options={({ navigation, }: any) => ({
          tabBarStyle: {
            display: 'none',
          },
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate('History',{
                   })}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}>
                <View>
                  <Text style={{
                    color: Colors[colorScheme].text,
                    marginRight: 20,
                  }}>History</Text>
                  
              </View>
            </Pressable>
          ),
          headerLeft: () => (
            <View style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginLeft: 20,
            }}>
              <Switch
                trackColor={{ false: "white", true: "black" }}
                onValueChange={() => {
                  dispatch(Actions.setIsDarkMode(!isDarkMode))
                }}
                value={isDarkMode}
              />
            </View>
          ),


        })}
      />
    </BottomTab.Navigator>

  );

}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}
