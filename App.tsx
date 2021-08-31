import React from 'react';
import {useFonts} from "expo-font";
import AppLoading from "expo-app-loading";
import {Inter_400Regular, Inter_500Medium} from '@expo-google-fonts/inter';
import {Rajdhani_700Bold, Rajdhani_500Medium} from '@expo-google-fonts/rajdhani';

import {Background} from './src/components/Background';
import {StatusBar} from "react-native";
import {Routes} from "./src/routes";

export default function App() {

    const [fontsLoaded] = useFonts({
        Inter_400Regular,
        Inter_500Medium,
        Rajdhani_700Bold,
        Rajdhani_500Medium
    });

    if (!fontsLoaded) {
        return <AppLoading/>
    }

    return (
        <Background>
            <StatusBar
                barStyle='light-content'
                backgroundColor='transparent'
                translucent
            />
            <Routes/>
        </Background>
    )
}
