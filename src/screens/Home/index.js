import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>


      <View style={styles.top}>
        <Text style={styles.text1}>Rent a Gom</Text>
      </View>

      <View style={styles.bottons}>

        <View style={styles.vcal}>
          <TouchableOpacity style={styles.viaturas} onPress={() => navigation.navigate('')}>
            <Text style={styles.tcalc}>Viaturas</Text>
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
    alignItems: 'center',
    marginTop: 80,
    marginBottom: 30,
  },

  text1: {
    fontSize: 60,
    fontWeight: 'bold',
    color: '#00435b',
  },

  bottons: {
    width: '100%',
    alignItems: 'center',
  },

  vcal: {
    width: '100%',
    alignItems: 'center'
  },

  viaturas: {
    width: '50%',
    alignItems: 'center',
    backgroundColor: '#22647e',
    borderRadius: 6,
    height: 60,
  },

  tcalc: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 13,
  },

});

export default Home;
