import React from "react";
import {FlatList, View} from "react-native";

import {styles} from "./styles";
import {Guild} from "../../components/Guild";
import {ListDivider} from "../../components/ListDivider";

export function AppointmentDetails() {
    const guilds = [
        {
            id: '1',
            name: 'Lendários',
            icon: null,
            owner: true
        }
    ];

    return (
        <View style={styles.container}>
            <FlatList
                data={guilds}
                keyExtractor={item => item.id}
                renderItem={({item}) => (
                    <Guild data={item}/>
                )}
                showsVerticalScrollIndicator={false}
                ItemSeparatorComponent={ () => <ListDivider/>}
                style={styles.guilds}
            />
        </View>
    )
}
