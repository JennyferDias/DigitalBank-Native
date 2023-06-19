import React, {useState, useEffect} from "react";
import {
    View,
    Image,
    ImageBackground,
    TouchableOpacity,
    Text,
    TextInput
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import styles from "./style";
import axios from "axios";
import { Alert } from "react-native";

export default function Login(props) {
    const[apiData, setApiData] = useState([])
    const[cpf, setcpf] = useState("")
      function logar(){
        axios.get("http://127.0.0.1:8000/api_cliente/").then(resp => setApiData(resp.data)) //Pegando os dados da api
        for(let i = 0; i < apiData.length; i++){ //Verificação linha por linha
          console.log(apiData[i]);
          if(cpf === apiData[i].cpf){
          localStorage.setItem("cpf", cpf)
          props.navigation.navigate("Read")
          }
        }
    
      }

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
                <TouchableOpacity style={styles.button1}>
                    <Text style={styles.precisaDeAjuda}>Precisa de{"\n"}
                        ajuda?</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.rect}>
                <TextInput
                    placeholder="Digite sua senha"
                    secureTextEntry={true}
                    placeholderTextColor="rgba(179,179,177,1)"
                    style={styles.textInput2}
                    ></TextInput>
            </View>
            <TouchableOpacity style={styles.button3}>
                <TextInput
                    onChange={(e) => setcpf(e.target.value)}
                    placeholder="Digite seu email"
                    placeholderTextColor="rgba(179,179,177,1)"
                    style={styles.textInput3}
                    ></TextInput>
            </TouchableOpacity>
            <Text style={styles.precisaDeAjuda1}></Text>
            <Text style={styles.suaConta}>Sua Conta/CPF/Telefone Cadastrado</Text>
            <Text style={styles.senha}>Senha</Text>
            <TouchableOpacity
                onPress={logar}
                style={styles.button4}
            >
                <Text style={styles.entrar}>Entrar</Text>
            </TouchableOpacity>
            <Text style={styles.esqueciMinhaSenha}>Esqueci minha senha</Text>
            <Text style={styles.precisaDeAjuda2}>Entre usando sua digital</Text>
            <Icon name="md-finger-print" style={styles.icon1}></Icon>
            <TouchableOpacity
                onPress={() => props.navigation.navigate("Create")}
                style={styles.button5}>
                <Text style={styles.text4}>
                    Não é cliente ainda? Faça agora seu cadastro DIAS gratuitamente.
                </Text>
            </TouchableOpacity>
        </View>
    );
    }