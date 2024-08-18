import { useNavigation } from "@react-navigation/native";
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Alert, ScrollView } from "react-native";
import { Feather } from '@expo/vector-icons';
import { database } from '../../../firebaseConnection';
import { ref, push, set } from 'firebase/database';  // Importando as funções do firebase.
import Toast from 'react-native-toast-message';

const CadastroViaturas = () => {
    const navigation = useNavigation();

    const [matricula, setMatricula] = useState('');
    const [modelo, setModelo] = useState('');
    const [km, setKm] = useState('');
    const [ano, setAno] = useState('');

    async function handleCadastro() {
        // Validando para nenhum campo ficar vazio.
        if (matricula !== '' && modelo !== '' && km !== '' && ano !== '') {

                // Referência para o nó 'viaturas' no Realtime Database.
                const cadastroViaturaRef = ref(database, 'viaturas');
                const newCadastroViaturaRef = push(cadastroViaturaRef);  // Cria uma nova key.

                // Salva os dados no Realtime Database.
                await set(newCadastroViaturaRef, {
                    matricula: matricula,
                    modelo: modelo,
                    km: km,
                    ano: ano,
                });

                Toast.show({
                    type: 'success',
                    position: 'top',
                    text1: 'Cadastro concluído!',
                    visibilityTime: 1000,
                });

                setMatricula('');
                setModelo('');
                setKm('');
                setAno('');

                navigation.goBack();

        } else {
            // Usando Toast para exibir mensagem de erro.
            Toast.show({
                type: 'error',
                position: 'top',
                text1: 'Preencha todos os campos!',
                visibilityTime: 1000,
            });
        }
    }



    return (
        <View style={styles.container}>



            <View style={styles.top}>
                <TouchableOpacity style={styles.voltarTop}
                    onPress={() => navigation.goBack()}>
                    <Feather name="arrow-left" size={30} color={"#000"} />
                </TouchableOpacity>
            </View>


            <ScrollView style={styles.scroll}>
                <View style={styles.cadastro}>


                    <View style={styles.titulo}>
                        <Text style={styles.tituloMain}>Cadastrar Viatura</Text>
                    </View>

                    {/* Matricula */}
                    <View style={styles.input}>
                        <Text style={styles.titulo2}>Matricula</Text>
                        <TextInput
                            style={styles.inputv}
                            placeholder="Matricula"
                            value={matricula}
                            onChangeText={(text) => setMatricula(text)}
                            maxLength={8}
                            placeholderTextColor="#e7edea"
                        />
                    </View>

                    {/* Modelo da viatura */}
                    <View style={styles.input}>
                        <Text style={styles.titulo2}>Modelo</Text>
                        <TextInput
                            style={styles.inputv}
                            placeholder="Modelo"
                            value={modelo}
                            onChangeText={(text) => setModelo(text)}
                            maxLength={15}
                            placeholderTextColor="#e7edea"
                        />
                    </View>

                    {/* Km's */}
                    <View style={styles.input}>
                        <Text style={styles.titulo2}>Km</Text>
                        <TextInput
                            style={styles.inputv}
                            placeholder="Km"
                            value={km}
                            onChangeText={(text) => setKm(text)}
                            keyboardType="numeric"
                            maxLength={15}
                            placeholderTextColor="#e7edea"
                        />
                    </View>

                    {/* Ano da viatura */}
                    <View style={styles.input}>
                        <Text style={styles.titulo2}>Ano</Text>
                        <TextInput
                            style={styles.inputv}
                            placeholder="Ano"
                            value={ano}
                            onChangeText={(text) => setAno(text)}
                            keyboardType="numeric"
                            maxLength={4}
                            placeholderTextColor="#e7edea"
                        />
                    </View>



                    {/* Botões */}
                    <View style={styles.botoes}>
                        <TouchableOpacity onPress={handleCadastro} style={styles.button}>
                            <Text style={styles.textCadastrar}>Cadastrar</Text>
                        </TouchableOpacity>
                    </View>


                </View>

            </ScrollView>





        </View>
    );
};


const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
        marginTop: 40,
        width: '100%',
    },

    scroll: {
        flex: 1,
        backgroundColor: '#ffc52c',
        width: '100%',
    },

    titulo: {
        marginBottom: 20,
    },

    tituloMain: {
        fontSize: 30,
        color: '#030d4f',
        fontWeight: 'bold',
    },

    cadastro: {
        width: '100%',
        alignItems: 'center',
        marginTop: 50,
    },

    input: {
        width: '100%',
        alignItems: 'center',
    },

    titulo2: {
        marginBottom: 5,
        color: '#fb0c06',
        fontWeight: 'bold',
    },

    inputv: {
        borderWidth: 1,
        width: '40%',
        height: 30,
        marginBottom: 20,
    },

    botoes: {
        width: '100%',
        alignItems: 'center',
    },

    button: {
        borderWidth: 1,
        width: '30%',
        alignItems: 'center',
        height: 30,
        marginTop: 15,
        borderColor: '#030d4f',
        borderRadius: 6,
    },

    textCadastrar: {
        color: '#030d4f',
        marginTop: 6,
    },

});

export default CadastroViaturas;