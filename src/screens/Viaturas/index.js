import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

const Viaturas = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>


            <View style={styles.top}>
                <Text style={styles.text1}>Viaturas</Text>
                <TouchableOpacity style={styles.cadastrar}
                    onPress={() => navigation.navigate('CadastroViaturas')}>
                    <Feather name="plus" size={30} color={"#000"} />
                </TouchableOpacity>
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
        marginTop: 50,
    },


});

export default Viaturas;
