import {StyleSheet} from "react-native";
import {theme} from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image:{
        width: '100%',
        height: 360
    },
    content:{
        marginTop: -60
    },
    title:{
        color: theme.colors.heading,
        textAlign: 'center',
        fontSize: 40,
        marginBottom: 16,
        fontFamily: theme.fonts.title700,
        lineHeight: 40
    },
    subtitle:{
        color: theme.colors.heading,
        textAlign: 'center',
        fontSize: 15,
        marginBottom: 60,
        fontFamily: theme.fonts.title500
    }
})
