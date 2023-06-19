import React, {} from "react";
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    ImageBackground
} from "react-native";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import styles from "./style"

export default function Code(props) {
    return (
        <View style={styles.container}>
            <Text style={styles.registro1}>Código de{"\n"}Verificação</Text>
            <Text style={styles.precisaDeAjuda1}>
                Insira o código enviado por SMS para o número preenchido.
            </Text>
            <View style={styles.icon1Stack}>
                <FontAwesomeIcon name="circle" style={styles.icon1}></FontAwesomeIcon>
                <FontAwesomeIcon name="circle" style={styles.icon2}></FontAwesomeIcon>
                <FontAwesomeIcon name="circle" style={styles.icon3}></FontAwesomeIcon>
                <FontAwesomeIcon name="circle" style={styles.icon4}></FontAwesomeIcon>
                <FontAwesomeIcon name="circle" style={styles.icon5}></FontAwesomeIcon>
                <Text style={styles.reenviarCodigo}>Reenviar Código</Text>
            </View>
            <View style={styles.icon6StackStack}>
                <View style={styles.icon6Stack}>
                    <TouchableOpacity
                        onPress={() => props.navigation.navigate("createU")}
                        style={styles.button}>
                        <Text style={styles.continuar2}>Continuar</Text>
                        <IoniconsIcon name="ios-arrow-forward" style={styles.icon7}></IoniconsIcon>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.image1Stack}>
                <Image
                    source={require("../../assets/images/mdi_alpha-d-boxDias.png")}
                    resizeMode="contain"
                    style={styles.image1}></Image>
                <ImageBackground
                    source={require("../../assets/images/mdi_alpha-aDias.png")}
                    resizeMode="contain"
                    style={styles.image2}
                    imageStyle={styles.image2_imageStyle}>
                    <Image
                        source={require("../../assets/images/VectorDias.png")}
                        resizeMode="contain"
                        style={styles.image3}></Image>
                </ImageBackground>
                <Image
                    source={require("../../assets/images/mdi_size-sDias.png")}
                    resizeMode="contain"
                    style={styles.image4}></Image>
            </View>
        </View>
    );
}