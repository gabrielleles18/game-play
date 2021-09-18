import React, {ReactNode} from "react";

import {styles} from "./styles";
import {theme} from "../../global/styles/theme";
import {Text, View} from "react-native";
import {Avatar} from "../Avatar";
import * as stream from "stream";

export type MemberPros = {
    id: string,
    username: string,
    avatar_url: string,
    status: string
}

type Props = {
    data: MemberPros
}

export function Member({data}: Props) {
    const {on, primary} = theme.colors;
    const isOnline = data.status === 'online';

    return (
        <View style={styles.container}>
            <Avatar urlImage={data.avatar_url}/>
            <View>
                <Text style={styles.title}>
                    {data.username}
                </Text>
                <View style={styles.status}>
                    <View style={[
                        styles.bulletStatus, {
                            backgroundColor: isOnline ? on : primary
                        }
                    ]}/>
                    <Text style={styles.nameStatus}>
                        {isOnline ? 'Disponível' : 'Ocupado'}
                    </Text>
                </View>
            </View>
        </View>
    )
}
