import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {Icon} from 'react-native-elements';
import All from './screens/All';
import Business from './screens/Business';
import Health from './screens/Health';
import Sports from './screens/Sports';
import Tech from './screens/Tech';
import Entertainment from './screens/Entertainment';

const Tab = createBottomTabNavigator();

export default function App(){
  return(
    <NavigationContainer>
    <Tab.Navigator>
    <Tab.Screen name="All" component={All}
    options={{tabBarIcon:(props)=>(
      <Icon type='ionicon' name='globe-outline' color={props.color}/>
    )}}
    />
    <Tab.Screen name="Business" component={Business}
    options={{tabBarIcon:(props)=>(
      <Icon type='ionicon' name='bar-chart-outline' color={props.color}/>
    )}}
    />
    <Tab.Screen name="Health" component={Health}
    options={{tabBarIcon:(props)=>(
      <Icon type='ionicon' name='fitness-outline' color={props.color}    />
    )}}
    />
    <Tab.Screen name="Sports" component={Sports}
    options={{tabBarIcon:(props)=>(
      <Icon type='ionicon' name='tennisball-outline' color={props.color}/>
    )}}
    />
    <Tab.Screen name="Entertainment" component={Entertainment}
    options={{tabBarIcon:(props)=>(
      <Icon type='ionicon' name='film-outline' color={props.color}/>
    )}}
    />
    <Tab.Screen name="Tech" component={Tech}
    options={{tabBarIcon:(props)=>(
      <Icon type='ionicon' name='game-controller-outline' color={props.color}/>
    )}}
    />
    </Tab.Navigator>
    </NavigationContainer>
  )
}
