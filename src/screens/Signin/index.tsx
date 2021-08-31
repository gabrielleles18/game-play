import React from 'react';
import {View, Text, Image, StatusBar, ScrollView} from 'react-native';

import {ButtonIcon} from "../../components/ButtonIcon";
import {styles} from "./styles";
import IllustrationImg from '../../assets/illustration.png';
import {useNavigation} from "@react-navigation/native";

export function SignIn() {
    const navigation = useNavigation();

    function handleSignIn() {
        navigation.navigate('Home');
    }

    return (
        <ScrollView horizontal={false}>
            <View style={styles.container}>

                <Image
                    source={IllustrationImg}
                    style={styles.image}
                    resizeMode="stretch"
                />

                <View style={styles.content}>
                    <Text style={styles.title}>
                        Conecte-se{`\n`}
                        e organize suas{`\n`}
                        jogatinas
                    </Text>

                    <Text style={styles.subtitle}>
                        Crie grupos para jogar seus games{`\n`}
                        favoritos com seus amigos
                    </Text>
                </View>
                <View style={{marginHorizontal: 50, marginBottom: 50}}>
                    <ButtonIcon
                        title="Entrar com Discord"
                        onPress={handleSignIn}
                    />
                </View>
            </View>
        </ScrollView>
    )
}
