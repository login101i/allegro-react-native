import React, { useState } from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import Swipeable from 'react-native-gesture-handler/Swipeable'


import ListItem from '../components/ListItem'
import ListItemDeleteAction from '../components/ListItemDeleteAction'
import Screen from '../screens/Screen'
import ItemListSeparator from '../components/ListItemSeparator'
import LIstItemSeparator from '../components/ListItemSeparator'


const messages = [
    {
        id: 1,
        title: 'D1',
        subTitle: "description D1",
        image: require('../assets/foto3.jpg')
    },
    {
        id: 2,
        title: 'D2',
        subTitle: "description D2",
        image: require('../assets/foto3.jpg')
    }
]

export default function MessagesScreen() {

    const [newMessages, setNewMessages] = useState(messages)
    const [refreshing, setRefreshing] = useState(false)

    const handleDelete = message => {
        const newOnes = newMessages.filter(m => m.id !== message.id)
        setNewMessages(newOnes)
    }


    return (
        <>

            <Screen >
                <FlatList
                    data={newMessages}
                    keyExtractor={message => message.id.toString()}
                    renderItem={({ item }) => <ListItem
                        title={item.title}
                        subTitle={item.subTitle}
                        image={item.image}
                        onPress={() => console.log(item)}
                        renderRightActions={() =>
                            <ListItemDeleteAction
                                onPress={() => handleDelete(item)}
                            />
                        }
                    />}
                    ItemSeparatorComponent={() => <LIstItemSeparator />}
                    refreshing={refreshing}
                    onRefresh={() => setNewMessages(messages)}

                />
            </Screen>
    
        </>
    )
}

const styles = StyleSheet.create({
 
})
