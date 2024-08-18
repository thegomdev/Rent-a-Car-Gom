import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import { database } from '../../firebaseConnection';
import { ref, onValue } from 'firebase/database';

const Viaturas = () => {
    
    const navigation = useNavigation();
    const [viaturas, setViaturas] = useState([]); // Estado para listar as viaturas.
    const [searchQuery, setSearchQuery] = useState(''); // Estado para o texto de busca.



    // Listar viaturas com base na pesquisa.
    const filteredViaturas = viaturas.filter(item =>
        item.matricula.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.modelo.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.km.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.ano.toLowerCase().includes(searchQuery.toLowerCase())
    );



    // useEffect para exibir lista das viaturas ja cadastradas.
    useEffect(() => {
        // Referência ao nó "viaturas" no Realtime Database.
        const viaturasRef = ref(database, 'viaturas');

        // Observa as mudanças no nó "viaturas".
        onValue(viaturasRef, (snapshot) => {
            const data = snapshot.val();
            if (data) {
                // Transforma os dados em uma lista de viaturas.
                const viaturasList = Object.keys(data).map(key => ({
                    id: key,
                    ...data[key]
                }));
                setViaturas(viaturasList);
            } else {
                setViaturas([]);
            }
        });

    }, []);

    return (
        <View style={styles.container}>

            <View style={styles.top}>

                <TouchableOpacity
                    style={styles.voltar}
                    onPress={() => navigation.navigate('Home')}>
                    <Feather name="arrow-left" size={25} color={'#ffc52c'} />
                    <Text style={styles.voltarText}>Voltar</Text>
                </TouchableOpacity>

                <View style={styles.search}>
                    <Feather name="search" size={25} color={'#ffc52c'} />
                    <TextInput
                        style={styles.search2}
                        placeholder="Pesquisar"
                        value={searchQuery}
                        onChangeText={(text) => setSearchQuery(text)} // Atualiza o texto de pesquisa.
                    />
                </View>

                <TouchableOpacity style={styles.cadastrar}
                    onPress={() => navigation.navigate('CadastroViaturas')}>
                    <Feather name="plus" size={30} color={"#ffc52c"} />
                </TouchableOpacity>

            </View>

            <View style={styles.listViaturas}>
                {/* Exibir a lista de viaturas */}
                <FlatList
                    data={filteredViaturas}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <View style={styles.viaturaItem}>
                            <Text style={styles.viaturaText}>Matricula: {item.matricula}</Text>
                            <Text style={styles.viaturaText}>Modelo: {item.modelo}</Text>
                            <Text style={styles.viaturaText}>Km's: {item.km}</Text>
                            <Text style={styles.viaturaText}>Ano: {item.ano}</Text>
                        </View>
                    )}
                />
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
    cadastrar: {
        marginRight: 10,
    },
    listViaturas: {
        flex: 1,
        width: '100%',
        padding: 20,
    },
    viaturaItem: {
        padding: 15,
        backgroundColor: '#f5f5f5',
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    viaturaText: {
        fontSize: 16,
        color: '#333',
    },
});

export default Viaturas;