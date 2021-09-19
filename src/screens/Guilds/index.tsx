import React from "react";
import {FlatList, View} from "react-native";
import {Guild, GuildProps} from "../../components/Guild";
import {ListDivider} from "../../components/ListDivider";

import {styles} from "./styles";

type Props = {
    handleGuildsSelect: (guild: GuildProps) => void
}

export function Guilds({handleGuildsSelect}: Props) {
    const guilds = [
        {
            id: '1',
            name: 'Lendários',
            icon: 'image.png',
            owner: true
        },
        {
            id: '2',
            name: 'Lendários',
            icon: 'image.png',
            owner: true
        },
        {
            id: '3',
            name: 'Lendários',
            icon: 'image.png',
            owner: true
        },
        {
            id: '4',
            name: 'Lendários',
            icon: 'image.png',
            owner: true
        },
        {
            id: '5',
            name: 'Lendários',
            icon: 'image.png',
            owner: true
        }
    ];

    return (
        <View style={styles.container}>
            <FlatList
                data={guilds}
                keyExtractor={item => item.id}
                renderItem={({item}) => (
                    <Guild
                        data={item}
                        onPress={() => handleGuildsSelect(item)}
                    />
                )}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{paddingBottom: 30}}
                ItemSeparatorComponent={() => <ListDivider isCentered/>}
                ListHeaderComponent={() => <ListDivider isCentered/>}
                style={styles.guilds}
            />
        </View>
    )
}
