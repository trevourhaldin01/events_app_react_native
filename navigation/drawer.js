import { DrawerItem, DrawerItemList, createDrawerNavigator } from '@react-navigation/drawer';
import { HomeStack } from './stack';
import { ProfilesStack } from './stack';
import { Image, Linking, SafeAreaView, View } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
const Drawer = createDrawerNavigator();

export const MyDrawer = ()=> {
  return (
    <Drawer.Navigator 
        drawerContent={(props)=>{
            return (
                <SafeAreaView style={{flex: 1, paddingTop:20, backgroundColor:'#99f6e4'}}>
                    <View style={{justifyContent:'center', alignItems:'center',height:140}}>
                        <Image 
                            style={{height:150, width:'50%'}}
                            source={require('../assets/images/link.png')}
                        />
                    </View>
                    <DrawerItemList {...props} />
                    <DrawerItem 
                      label='more info'
                      onPress={()=>Linking.openURL('https://googe.com')}
                      icon={()=>(
                        <Ionicons
                          name='information'
                          size={22}
                         />
                      )}
                    />
                </SafeAreaView>
                
            );
        }}
            screenOptions={{headerShown: false}}
      >
        {/* the props */}
      <Drawer.Screen name="HomeStack" component={HomeStack} 
      options={{title:'Home' , drawerIcon: ()=>(<Ionicons  name='home' size={22} />) }}/>
      <Drawer.Screen name="ProfilesStack" component={ProfilesStack} 
      options={{title:'Profiles', drawerIcon: ()=>(<MaterialCommunityIcons  name='face-man-profile' size={22} />)}}/>
      
    </Drawer.Navigator>
  );
}