import React, {} from "react";
import {
    View,
    Text,
    Image,
    TextInput,
    TouchableOpacity,
    ImageBackground
} from "react-native";
import EntypoIcon from "react-native-vector-icons/Entypo";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import styles from './style'

export default function Fone(props) {
    return (
        <View style={styles.container}>
            <Text style={styles.registro}>Registro</Text>
            <Text style={styles.precisaDeAjuda1}>
                Digite seu número{"\n"}de telefone, você receberá{"\n"}um código de confirmação.
            </Text>
            <Text style={styles.suaConta1}></Text>
            <Text style={styles.localizacao}>Localização</Text>
            <View style={styles.rect1}>
                <View style={styles.imageRow}>
                    <Image
                        source={require("../../assets/images/330430-removebg-preview.png")}
                        resizeMode="contain"
                        style={styles.image}></Image>
                    <EntypoIcon name="chevron-down" style={styles.icon}></EntypoIcon>
                    <Text style={styles.comecarAgora1}>+55</Text>
                    <Text style={styles.comecarAgora1}>Brasil</Text>
                </View>
            </View>
            <Text style={styles.telefone}>Telefone</Text>
            <View style={styles.rect2}>
                <TextInput placeholder="(99) 9 9999-9999" style={styles.textInput}></TextInput>
            </View>
            <TouchableOpacity
                onPress={() => props.navigation.navigate("Code")}
                style={styles.button}>
                <Text style={styles.continuar}>Continuar</Text>
                <IoniconsIcon name="ios-arrow-forward" style={styles.icon1}></IoniconsIcon>
            </TouchableOpacity>
            <View style={styles.image4Row}>
                <Image
                    source={require("../../assets/images/mdi_alpha-d-boxDias.png")}
                    resizeMode="contain"
                    style={styles.image4}></Image>
                <View style={styles.image1Stack}>
                    <ImageBackground
                        source={require("../../assets/images/mdi_size-sDias.png")}
                        resizeMode="contain"
                        style={styles.image1}
                        imageStyle={styles.image1_imageStyle}>
                        <Image
                            source={require("../../assets/images/VectorDias.png")}
                            resizeMode="contain"
                            style={styles.image2}></Image>
                    </ImageBackground>
                    <Image
                        source={require("../../assets/images/mdi_alpha-aDias.png")}
                        resizeMode="contain"
                        style={styles.image3}></Image>
                </View>
            </View>
        </View>
    );
}