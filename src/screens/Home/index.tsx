import React, {useState} from "react";
import {FlatList, View} from "react-native";
import {useNavigation} from "@react-navigation/native"

import {ButtonAdd} from "../../components/ButtonAdd";
import {Profile} from "../../components/Profile";
import {CategorySelect} from "../../components/CategorySelect";
import {ListHeader} from "../../components/ListHeader";
import {Appointment} from "../../components/Appointment";
import {ListDivider} from "../../components/ListDivider";

import {styles} from "./styles";
import {Background} from "../../components/Background";

export function Home() {
    const [category, setCategory] = useState('');
    const navigation = useNavigation()

    const appointments = [
        {
            id: '1',
            guild: {
                id: '1',
                name: 'Lendários',
                icon: null,
                owner: true,
            },
            category: '1',
            date: '22/06 ás 20:40h',
            description: 'É hoje qye vamos chaegar ao challenger sem perder um partida da md10'
        },
        {
            id: '2',
            guild: {
                id: '1',
                name: 'Lendários',
                icon: null,
                owner: true,
            },
            category: '1',
            date: '22/06 ás 20:40h',
            description: 'É hoje qye vamos chaegar ao challenger sem perder um partida da md10'
        }
    ];

    function handleCategorySelect(categoryId: string) {
        categoryId === category ? setCategory('') : setCategory(categoryId);
    }

    function handleAppointmentDetails() {
        navigation.navigate('AppointmentDetails');
    }

    function handleAppointmentCreate() {
        navigation.navigate('AppointmentCreate');
    }

    return (
        <Background>
            <View style={styles.header}>
                <Profile/>
                <ButtonAdd onPress={handleAppointmentCreate}/>
            </View>
            <CategorySelect
                categorySelected={category}
                setCategory={handleCategorySelect}
            />
            <ListHeader
                title="Partidas agendadas"
                subTitle="Total 6"
            />
            <FlatList
                data={appointments}
                keyExtractor={item => item.id}
                renderItem={({item}) => (
                    <Appointment
                        data={item}
                        onPress={handleAppointmentDetails}
                    />
                )}
                ItemSeparatorComponent={() => <ListDivider/>}
                contentContainerStyle={{paddingBottom: 30}}
                style={styles.matches}
                showsHorizontalScrollIndicator={false}
            />
        </Background>
    )
}
