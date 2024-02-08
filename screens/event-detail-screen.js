import { useNavigation, useRoute } from "@react-navigation/native"
import { useLayoutEffect } from "react";
import { StyleSheet, View, Text } from "react-native"

export default function EventDetailScreen() {
    const route = useRoute()
    const navigation = useNavigation();
    const { EventId,name,description } =route.params

    useLayoutEffect(()=>{
        navigation.setOptions({
            headerTitle: name,
            
        })

    },[]);
        return (
        <View style={styles.screen}>
            <Text style={{fontSize:20}}>This is the event detail screen for {EventId}</Text>
            <Text style={{fontSize:14}}> {name}</Text>
            <Text style={{fontSize:14}}> {description}</Text>
        </View>

    )
}

const styles = StyleSheet.create({
    screen: {
        padding:20
    }
})