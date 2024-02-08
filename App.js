import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';

import { NavigationContainer } from '@react-navigation/native';

import { MyDrawer } from './navigation/drawer';

export default function App() {
  
  return (
    <NavigationContainer>
        {/*<HomeStack /> */}
        <MyDrawer />
        <StatusBar style='light'/>
    </NavigationContainer>
    
    

      );
}

