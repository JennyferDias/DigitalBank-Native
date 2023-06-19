import React, {} from "react";
import {View, Text, Image, ImageBackground, TouchableOpacity} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import styles from "./style"

export default function Create(props) {
    return (
        <View style={styles.container}>
            <View style={styles.precisaDeAjuda1StackStack}>
                <View style={styles.precisaDeAjuda1Stack}>
                    <Text style={styles.precisaDeAjuda1}>
                        O seu controle financeiro agora{"\n"}
                        na palma de sua mão
                    </Text>
                    <Image
                        source={require(
                            "../../assets/images/Bancos_digitais_funcionam_de_maneira_totalmente_on-line_-_shut" +
                            "terstock-removebg-preview.png"
                        )}
                        resizeMode="contain"
                        style={styles.image6}></Image>
                </View>
                <View style={styles.image2Stack}>
                    <ImageBackground
                        source={require("../../assets/images/mdi_size-sDias.png")}
                        resizeMode="contain"
                        style={styles.image2}
                        imageStyle={styles.image2_imageStyle}>
                        <Image
                            source={require("../../assets/images/VectorDias.png")}
                            resizeMode="contain"
                            style={styles.image3}></Image>
                    </ImageBackground>
                    <Image
                        source={require("../../assets/images/mdi_alpha-aDias.png")}
                        resizeMode="contain"
                        style={styles.image4}></Image>
                </View>
                <Image
                    source={require("../../assets/images/mdi_alpha-d-boxDias.png")}
                    resizeMode="contain"
                    style={styles.image5}></Image>
            </View>
            <TouchableOpacity
                onPress={() => props.navigation.navigate("Fone")}
                style={styles.button1}>
                <Icon name="ios-arrow-forward" style={styles.icon}></Icon>
                <Text style={styles.comecarAgora}>Começar agora</Text>
            </TouchableOpacity>
        </View>
    );
}