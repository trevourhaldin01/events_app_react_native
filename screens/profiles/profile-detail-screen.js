import { useNavigation, useRoute } from "@react-navigation/native"

import { StyleSheet, View, Text } from "react-native"

export default function ProfileDetailScreen() {
    const route = useRoute()
    const navigation = useNavigation();
    const { profileId } =route.params

    
    return (
        <View style={styles.screen}>
            <Text>Profile Id: {profileId}</Text>
            
        </View>

    )
}

const styles = StyleSheet.create({
    screen: {
        padding:20
    }
})