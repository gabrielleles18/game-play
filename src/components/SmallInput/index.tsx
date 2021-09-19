import React from "react";
import {TextInput, TextInputProps} from "react-native";

import {styles} from "./styles";
import {Avatar} from "../Avatar";

export function SmallInput({...rest}: TextInputProps) {

    return (
        <TextInput
            style={styles.container}
            keyboardType='numeric'
            {...rest}
        />
    )

}
