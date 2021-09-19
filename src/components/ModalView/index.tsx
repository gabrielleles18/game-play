import React, {ReactNode} from 'react';
import {ModalProps, View} from 'react-native';

import {styles} from './styles';

type Props = ModalProps & {
    children: ReactNode
}

export function ModalView({title, ...rest}: Props) {
    return (
        <View
            style={styles.container}
            {...rest}
        >
        </View>
    );
}
