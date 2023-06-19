import React, {} from "react";
import {View, Image, ImageBackground, Text, TouchableOpacity} from "react-native";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import styles from "./style";

export default function Done(props) {
    return (
        <View style={styles.container}>
            <View style={styles.image1Row}>
                <Image
                    source={require("../../assets/images/mdi_alpha-d-boxDias.png")}
                    resizeMode="contain"
                    style={styles.image1}></Image>
                <View style={styles.image2Stack}>
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
            <Text style={styles.feito}>Feito!</Text>
            <Text style={styles.precisaDeAjuda1}>
                Seu cadastro foi realizado, e agora um mundo de economia te espera.
            </Text>
            <View style={styles.icon1StackStack}>
                <View style={styles.icon1Stack}>
                    <TouchableOpacity
                        onPress={() => props.navigation.navigate("Read")}
                        style={styles.button1}>
                        <View style={styles.comecarAEconomizarRow}>
                            <Text style={styles.comecarAEconomizar}>
                                Começar a economizar
                            </Text>
                            <IoniconsIcon name="ios-arrow-forward" style={styles.icon2}></IoniconsIcon>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            <Image
                source={require("../../assets/images/unhacartao-removebg-preview.png")}
                resizeMode="contain"
                style={styles.image6}></Image>
        </View>
    );
}