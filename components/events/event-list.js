import { View, Text, FlatList, RefreshControl } from "react-native";


import EventItem from "./event-item";

export default function EventList({data, onRefresh}) {
    const renderItem = ({item}) => {
        return(
            <EventItem 
                id={item.id}
                name={item.name}
                description={item.description}
                qrCode = {item.qr_code}
            />
        )
    }
    return (
        <View>
            <FlatList 
                data={data}
                keyExtractor={item=> item.id}
                renderItem={renderItem}
                refreshControl={
                    //brings the refresh animation
                    <RefreshControl
                        refreshing={false}
                        onRefresh={onRefresh} 

                    />
                }
                
                
            />

        </View>
    )
}