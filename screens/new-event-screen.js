import { useState,useLayoutEffect } from "react";
import { StyleSheet, TextInput, View, Button, Text } from "react-native";
import { API_URL } from "../config";
import { useNavigation } from "@react-navigation/native";


const NewEventScreen = ()=>{
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [date, setDate] = useState(new Date())
    const [alert , setAlert] = useState({
        isVisible: false,
        msg:''
    })

    const navigation = useNavigation()

    useLayoutEffect(()=>{
        navigation.setOptions({
            headerTitle: "Add New Event",
            
        })

    },[]);

    const handleAddEvent = async() =>{
        const d = date.toISOString().slice(0 ,10)
        
        const data = {
            name,
            description,
            date: d,
        }
        const response = await fetch(`${API_URL}/api/events/`,{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)

        })
        const res = await response.json()
        setAlert({isVisible: true, msg:"Event Added"})
        setName('')
        setDescription('')
    }

    return(
        <View style={styles.screen} >
            {alert.isVisible && <Text>{alert.msg}</Text>}
            <TextInput 
                value={name}
                onChangeText={setName}
                placeholder="name"
                style={styles.input}
            />
            <TextInput 
                value={description}
                onChangeText={setDescription}
                placeholder="description"
                multiline = {true}
                style={styles.input}
            />
            <TextInput 
                value={date.toLocaleString()}
                onChangeText={setDate}
                placeholder="Event Date"
                style={styles.input}
            />
            <Button 
                title="Add"
                onPress={handleAddEvent}
            />


        </View>

    )

}
const styles  = StyleSheet.create({
    screen : {
        padding: 20,
    },
    input: {
        height: 40,
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        backgroundColor: "white",
        marginBottom: 10,

    }
})

export default NewEventScreen;