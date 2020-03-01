import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { MainScreen } from '../screens/MainScreen'
import { PostScreen } from '../screens/PostScreen'
import { AboutScreen } from '../screens/AboutScreen'
import { BookmarkScreen } from '../screens/BookmarkScreen'
import { CreateScreen } from '../screens/CreateScreen'
import { THEME } from '../theme'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { MaterialHeader } from '../components/MaterialHeader'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'


const Stack = createStackNavigator();
const Booked = createStackNavigator();
const Drawer = createDrawerNavigator();

export const Drowwer = ()=> {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Главная">
        <Drawer.Screen name="Главная" component={AllNavigation} />
        <Drawer.Screen name="Избранное" component={BookedNavigation} />
        <Drawer.Screen name="О нас" component={AboutScreenNavigation} />
        <Drawer.Screen name="Создать публикацию" component={CreateScreenNavigation} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const CreateScreenNavigation =({navigation})=> {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Создать" component={CreateScreen} options={{
        title: 'Создать',
        headerStyle: {
          backgroundColor: THEME.DANGER
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerLeft: () => (
          <HeaderButtons HeaderButtonComponent={MaterialHeader}>
            <Item title="search" iconName="ios-menu" onPress={() => navigation.openDrawer()} />
          </HeaderButtons>
        )
      }} />
    </Stack.Navigator>
  )
}
const AboutScreenNavigation=({navigation})=> {
  return (
    <Stack.Navigator>
      <Stack.Screen name="О нас" component={AboutScreen} options={{
        title: 'О нас',
        headerStyle: {
          backgroundColor: THEME.DANGER
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerLeft: () => (
          <HeaderButtons HeaderButtonComponent={MaterialHeader}>
            <Item title="search" iconName="ios-menu" onPress={() => navigation.openDrawer()} />
          </HeaderButtons>
        )
      }} />
    </Stack.Navigator>
  )
}

export const AppNavigation =({navigation})=> {
return (
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
          <HeaderButtons HeaderButtonComponent={MaterialHeader}>
            <Item title="search" iconName="ios-camera" onPress={() => navigation.navigate('Create')} />
          </HeaderButtons>
        ),
        headerLeft: () => (
          <HeaderButtons HeaderButtonComponent={MaterialHeader}>
            <Item title="search" iconName="ios-menu" onPress={() => navigation.openDrawer()} />
          </HeaderButtons>
        )
      }} /> 
      <Stack.Screen name="PostScreen" component={PostScreen} options={({ route }) => ({ 
        title: new Date(route.params.date).toLocaleDateString(),
        headerRight: () => (
          <HeaderButtons HeaderButtonComponent={MaterialHeader}>
            <Item title="search" iconName={route.params.booked ? "ios-star" : "ios-star-outline"} onPress={() => alert(route.params.booked)} />
          </HeaderButtons>
        )
        })} />
        <Stack.Screen name="Create" component={CreateScreen} />
      </Stack.Navigator>
)
} 

export const BookedNavigation =({navigation})=> {
  return (
        <Booked.Navigator initialRouteName="BookmarkScreen" screenOptions={{
          headerStyle: {
            backgroundColor: THEME.MAIN,
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}>
        <Booked.Screen name="BookmarkScreen" component={BookmarkScreen} options={{
          title: 'Booked',
          headerStyle: {
            backgroundColor: THEME.DANGER
          },
          headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={MaterialHeader}>
              <Item title="search" iconName="ios-menu" onPress={() => navigation.openDrawer()} />
            </HeaderButtons>
          )
        }} /> 
        <Booked.Screen name="PostScreen" component={PostScreen} options={({ route }) => ({ 
          title: new Date(route.params.date).toLocaleDateString(),
          headerRight: () => (
            <HeaderButtons HeaderButtonComponent={MaterialHeader}>
              <Item title="search" iconName={route.params.booked ? "ios-star" : "ios-star-outline"} onPress={() => alert(route.params.booked)} />
            </HeaderButtons>
          )
          })} />
        </Booked.Navigator>
  )
  } 

  const Tab = createBottomTabNavigator();

  export const AllNavigation=()=> {
    return (
      
        <Tab.Navigator screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Main') {
              iconName = focused
                ? 'ios-information-circle'
                : 'ios-information-circle-outline';
            } else if (route.name === 'Book') {
              iconName = focused ? 'ios-list-box' : 'ios-list';
            }
            
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}>
          <Tab.Screen name="Main" component={AppNavigation} />
          <Tab.Screen name="Book" component={BookedNavigation} />
        </Tab.Navigator>
    );
  }

 