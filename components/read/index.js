import React, {useState} from "react";
import {View, TouchableOpacity, Text, Image} from "react-native";
import EntypoIcon from "react-native-vector-icons/Entypo";
import FeatherIcon from "react-native-vector-icons/Feather";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import styles from "./style"
import axios from "axios";


export default function Read(props) {
    const [apiData, setApiData] = useState([])
    const [saldo, setSaldo] = useState("")
    function getSaldo() {
        axios
            .get("http://127.0.0.1:8000/api_cliente/")
            .then(resp => setApiData(resp.data))

        for (let i = 0; i < apiData.length; i++) {          //Pegando o saldo do usuario
            const apiItem = apiData[i]

            if (apiItem.cpf === localStorage.getItem("cpf")) {
                setSaldo(apiItem.saldo)
            }
            
        }
    }
    return (
        <View style={styles.container}>
            <View style={styles.rect1Stack}>
                <View style={styles.rect1}>
                    <View style={styles.button11Row}>
                        <TouchableOpacity
                            onPress={() => props.navigation.navigate("Update")}
                            style={styles.button11}>
                        </TouchableOpacity>
                        <Text style={styles.saldoEmConta1}>
                            Bem-Vindo(a) de{"\n"}
                            volta Jennyfer!
                        </Text>
                        <EntypoIcon name="chevron-thin-right" style={styles.icon19}></EntypoIcon>
                        <FeatherIcon name="bell" style={styles.icon18}></FeatherIcon>
                        <EntypoIcon name="chat" style={styles.icon17}></EntypoIcon>
                    </View>
                    <View style={styles.saldoEmContaRow}>
                        <Text style={styles.saldoEmConta}>Saldo em conta.</Text>
                        <EntypoIcon name="eye" style={styles.icon} onPress={()=>getSaldo()}></EntypoIcon>
                        <TouchableOpacity style={styles.button2}>
                            <Text style={styles.rendimentos}>Rendimentos</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.r1004087Row}>
                        <Text style={styles.r1004087}>R$ {saldo}</Text>
                        <TouchableOpacity style={styles.button1} onPress={()=>props.navigation.navigate("Extrato")}>
                            <Text style={styles.extrato}>Extrato</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <TouchableOpacity style={styles.button3}>
                    <MaterialCommunityIconsIcon name="qrcode-scan" style={styles.icon2}></MaterialCommunityIconsIcon>
                    <Text style={styles.qrCode}>QR CODE</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button4}>
                    <Image
                        source={require("../../assets/images/logo-pix-png-icone-520x520.png")}
                        resizeMode="contain"
                        style={styles.image2}></Image>
                    <Text style={styles.pix}>PIX</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button5}>
                    <Text style={styles.boletos2}>BOLETOS</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button6}>
                    <MaterialCommunityIconsIcon name="cellphone" style={styles.icon12}></MaterialCommunityIconsIcon>
                    <Text style={styles.recargas}>RECARGAS</Text>
                </TouchableOpacity>
                <MaterialCommunityIconsIcon name="barcode" style={styles.icon11}></MaterialCommunityIconsIcon>
            </View>
            <View style={styles.button7Row}>
                <TouchableOpacity style={styles.button7}>
                    <View style={styles.icon13Stack}>
                        <MaterialCommunityIconsIcon name="cash" style={styles.icon13}></MaterialCommunityIconsIcon>
                        <Text style={styles.cashback}>CASHBACK</Text>
                    </View>
                </TouchableOpacity>
                <Text style={styles.transferencia}></Text>
                <TouchableOpacity style={styles.button8} onPress={()=>props.navigation.navigate("Transferir")}>
                    <MaterialCommunityIconsIcon
                        name="arrow-expand-horizontal"
                        style={styles.icon14}></MaterialCommunityIconsIcon>
                    <Text style={styles.transferir}>TRANSFERIR</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button9}>
                    <View style={styles.icon15Stack}>
                        <MaterialCommunityIconsIcon name="home-outline" style={styles.icon15}></MaterialCommunityIconsIcon>
                        <Text style={styles.iptu}>IPTU</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button10}>
                    <FontAwesomeIcon name="car" style={styles.icon16}></FontAwesomeIcon>
                    <Text style={styles.ipva}>IPVA</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.rect2}>
                <View style={styles.imageStackStack}>
                    <View style={styles.imageStack}>
                        <Image
                            source={require("../../assets/images/propaganda_banco-removebg-preview.png")}
                            resizeMode="contain"
                            style={styles.image}></Image>
                        <Text style={styles.r1004088}>
                            Não me diga que ainda não {"\n"}
                            solicitou seu DIAS?
                        </Text>
                    </View>
                    <Text style={styles.pecaAgoraMesmo}>Peça agora mesmo</Text>
                </View>
            </View>
            <View style={styles.rect3}>
                <View style={styles.parcelamentoPixRow}>
                    <Text style={styles.parcelamentoPix}>Parcelamento Pix</Text>
                    <FontAwesomeIcon name="circle" style={styles.icon7}></FontAwesomeIcon>
                    <Text style={styles.tags}>Tags</Text>
                    <FontAwesomeIcon name="circle" style={styles.icon6}></FontAwesomeIcon>
                    <Text style={styles.premios}>Prêmios</Text>
                    <FontAwesomeIcon name="circle" style={styles.icon4}></FontAwesomeIcon>
                    <Text style={styles.boletos}>Boletos</Text>
                    <FontAwesomeIcon name="circle" style={styles.icon8}></FontAwesomeIcon>
                </View>
                <View style={styles.icon10Row}>
                    <FontAwesomeIcon name="circle" style={styles.icon10}></FontAwesomeIcon>
                    <Text style={styles.comprasOnline}>Compras Online</Text>
                    <FontAwesomeIcon name="circle" style={styles.icon5}></FontAwesomeIcon>
                    <Text style={styles.cupons}>Cupons</Text>
                    <FontAwesomeIcon name="circle" style={styles.icon3}></FontAwesomeIcon>
                    <Text style={styles.lojas}>Lojas</Text>
                    <FontAwesomeIcon name="circle" style={styles.icon9}></FontAwesomeIcon>
                </View>
            </View>
        </View>
    );
}