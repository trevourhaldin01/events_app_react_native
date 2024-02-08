import { useNavigation } from "@react-navigation/native";
import { View, StyleSheet, Text, Button, FlatList } from "react-native"
import EventList from "../components/events/event-list";
import { useEffect, useState } from "react";
import { API_URL } from "../config";



 function HomeScreen() {
    const [loading, setLoading] = useState(true);
    const [refresh, setRefresh] = useState(false)
    const [data, setData] = useState([])

    const navigation  = useNavigation()

    const handleRefresh = ()=>{
        console.log('refreshing...')
        setRefresh(prevState => !prevState)
    }
    useEffect(()=>{
        fetchData()

    },[refresh]);
    {/*once refresh changes, we are going to fetch the data */}

    const fetchData = async ()=>{
        try {
            const response = await fetch(`${API_URL}/api/events/`);
            
            if (!response.ok) {
                throw new Error('Network request failed');
              }
            const data = await response.json();
            setData(data);
          } catch (error) {
            console.error('Error fetching data:', error.message);
          } finally {
            setLoading(false);
          }
    }


    return (
        <View style={styles.screen}>
            <Button 
                title="Add New Event"
                onPress={()=>navigation.navigate('New Event')}
            />
            <EventList data={data} onRefresh={handleRefresh}/>

            
        </View>

    )
}

const styles = StyleSheet.create({
    screen: {
        padding:20
    }
})

export default HomeScreen;