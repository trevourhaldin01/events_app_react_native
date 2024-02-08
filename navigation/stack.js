import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/home-screen';
import EventDetailScreen from '../screens/event-detail-screen';
import { useNavigation } from '@react-navigation/native';
import { NavOptions } from './options';
import ProfileDetailScreen from '../screens/profiles/profile-detail-screen';
import ProfileScreen from '../screens/profiles/profiles-screen';
import { HomeTabs } from './tabs';
import NewEventScreen from '../screens/new-event-screen';


const Stack = createStackNavigator();

export const HomeStack= () => {
  const navigation = useNavigation();
  return (
    <Stack.Navigator screenOptions={()=>NavOptions(navigation)}>
      <Stack.Screen name="Home" component={HomeTabs} />
      <Stack.Screen name="Event" component={EventDetailScreen} />
      <Stack.Screen name="New Event" component={NewEventScreen} />
      
      
    </Stack.Navigator>
  );
}

export const  ProfilesStack= () => {
  const navigation = useNavigation();
  return (
    <Stack.Navigator screenOptions={()=>NavOptions(navigation)}>
      <Stack.Screen name="Profiles" component={ProfileScreen} />
      <Stack.Screen name="Profile" component={ProfileDetailScreen} />
      
    </Stack.Navigator>
  );
}