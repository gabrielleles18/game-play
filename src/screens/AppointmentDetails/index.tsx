import React from "react";
import {BorderlessButton} from "react-native-gesture-handler";
import {Fontisto} from "@expo/vector-icons";
import {FlatList, ImageBackground, Text, View} from "react-native";

import {Background} from "../../components/Background";
import {Header} from "../../components/Header";

import {theme} from "../../global/styles/theme";
import {styles} from "./styles";
import bannerImg from '../../assets/banner.png';
import {ListHeader} from "../../components/ListHeader";
import {Member} from "../../components/Member";
import {ListDivider} from "../../components/ListDivider";
import {ButtonIcon} from "../../components/ButtonIcon";

export function AppointmentDetails() {
    const members = [
        {
            id: '1',
            username: 'Gabriel',
            avatar_url: 'https://github.com/gabrielleles18.png',
            status: 'online'
        },
        {
            id: '2',
            username: 'Leles',
            avatar_url: 'https://github.com/gabrielleles18.png',
            status: 'offline'
        },
        {
            id: '3',
            username: 'Leles',
            avatar_url: 'https://github.com/gabrielleles18.png',
            status: 'offline'
        }
    ]
    return (
        <Background>
            <Header
                title="Detalhes"
                action={
                    <BorderlessButton>
                        <Fontisto name="share" size={24} color={theme.colors.primary}/>
                    </BorderlessButton>
                }
            />

            <ImageBackground
                source={bannerImg}
                style={styles.banner}
            >
                <View style={styles.bannerContent}>
                    <Text style={styles.title}>
                        Lendários
                    </Text>

                    <Text style={styles.subtitle}>
                        É hoje que vamos chegar ao challenger sem perder uma partida da md10.
                    </Text>
                </View>
            </ImageBackground>

            <ListHeader
                title='Jogadores'
                subTitle='Total 3'
            />

            <FlatList
                data={members}
                keyExtractor={item => item.id}
                ItemSeparatorComponent={() => <ListDivider/>}
                style={styles.members}
                renderItem={({item}) => (
                    <Member data={item}/>
                )}
            />

            <View style={styles.footer}>
                <ButtonIcon title="Entar na partida"/>
            </View>
        </Background>
    )
}
