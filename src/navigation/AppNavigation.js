import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { MainScreen } from '../screens/MainScreen'
import { PostScreen } from '../screens/PostScreen'
import { AboutScreen } from '../screens/AboutScreen'
import { BookmarkScreen } from '../screens/BookmarkScreen'
import { CreateScreen } from '../screens/CreateScreen'
import { THEME } from '../theme';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

const Stack = createStackNavigator();

export const AppNavigation =()=> {
return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName="MainScreen" screenOptions={{
        headerStyle: {
          backgroundColor: THEME.MAIN,
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen name="MainScreen" component={MainScreen} options={{
        title: 'Main',
        headerStyle: {
          backgroundColor: THEME.DANGER
        },
        headerRight: () => (
          <HeaderButtons>
            <Item title = 'CAM' iconName ='ios camera' onPress = {()=> console.log('11')} />
          </HeaderButtons>
        )
      }} /> 
      <Stack.Screen name="PostScreen" component={PostScreen} options={({ route }) => ({ 
        title: new Date(route.params.date).toLocaleDateString(),
        })} />
      <Stack.Screen name="AboutScreen" component={AboutScreen} />
      <Stack.Screen name="BookmarkScreen" component={BookmarkScreen} />
      <Stack.Screen name="CreateScreen" component={CreateScreen} />
      </Stack.Navigator>
    </NavigationContainer>
)
} 