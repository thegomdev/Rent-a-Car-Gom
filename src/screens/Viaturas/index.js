import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

const Viaturas = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>


            <View style={styles.top}>

                <View>
                    <TouchableOpacity
                        style={styles.voltar}
                        onPress={() => navigation.navigate('Home')}>
                        <Feather name="arrow-left" size={25} color={'#ffc52c'} />
                        <Text style={styles.voltarText}>Voltar</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.search}>
                    <Feather name="search" size={25} color={'#ffc52c'} />
                    <TextInput
                        style={styles.search2}
                        placeholder="Pesquisar"/>
                </View>

                <View>
                    <TouchableOpacity style={styles.cadastrar}
                        onPress={() => navigation.navigate('CadastroViaturas')}>
                        <Feather name="plus" size={30} color={"#ffc52c"} />
                    </TouchableOpacity>
                </View>

            </View>




        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        width: '100%',
    },

    top: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 10,
        paddingBottom: 10,
        marginTop: 35
    },

    voltar: {
        marginLeft: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    search2: {
        marginLeft: 10,
        alignItems: 'center',
        width: '100%',
        height: '100%',
        color: '#030d4f',
    },

    voltarText: {
        color: '#ffc52c',
        fontSize: 20,
        marginLeft: 5,
    },

    search: {
        flexDirection: 'row',
        alignItems: 'center',
        borderStyle: 'solid',
        borderRadius: 10,
        width: '60%',
        backgroundColor: '#ceecef',
        marginRight: 10,
        padding: 5,
        height: '100%'

    },

    searchText: {
        color: '#ffc52c',
        fontSize: 20,
        marginLeft: 80,
    },

    cadastrar: {
        marginRight: 10,
    },


});

export default Viaturas;
