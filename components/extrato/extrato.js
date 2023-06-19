import React, {} from "react";
import {View, TouchableOpacity, Text} from "react-native";
import Icon from "react-native-vector-icons/Entypo";
import styles from './style'

export default function Extrato(props) {
  return (
    <View style={styles.container}>
      <View style={styles.rect1}>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("Read")}
          style={styles.button}
        >
          <Icon name="chevron-thin-left" style={styles.icon}></Icon>
        </TouchableOpacity>
        <Text style={styles.saldoEmConta1}>Saldo em conta.</Text>
        <View style={styles.textRow}>
          <Text style={styles.text}>Extrato</Text>
          <Text style={styles.r2}>R$ 10.040.87</Text>
        </View>
      </View>
    </View>
  );
}