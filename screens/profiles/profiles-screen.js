import { useNavigation } from "@react-navigation/native";
import { Button, Text, View } from "react-native";

export default function ProfileScreen() {
    const navigation = useNavigation();

    return(
        <View>
            <Text>Profile Screen</Text>
            <Button title="some Profile" onPress={()=>navigation.navigate('Profile', {profileId: 1})}></Button>
        </View>


    )
}