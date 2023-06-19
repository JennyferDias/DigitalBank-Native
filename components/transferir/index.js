import React, {useState} from "react";
import {
    View,
    TouchableOpacity,
    Image,
    ImageBackground,
    TextInput,
    Text
} from "react-native";
import Icon from "react-native-vector-icons/Entypo";
import styles from "./style"
import axios from "axios"

export default function Transferir(props) {
    const [apiData, setApiData] = useState([])
    const [id, setId] = useState("")
    const [id2, setId2] = useState("")
    const [cpf, setCpf] = useState("")
    const [valor, setValor] = useState("")
    const [saldo, setSaldo] = useState("")
    const [saldo2, setSaldo2] = useState("")
    function transferir(){
        axios.get("http://127.0.0.1:8000/api_cliente/?format=json").then(resp => setApiData(resp.data))
        for(let i =0; i < apiData.length; i++){
          const apiItem = apiData[i]
          if(localStorage.getItem("cpf") === apiItem.cpf){            //Passando por todos os dados da api, pegando o id.
            setId(apiItem.id)                                         
            setSaldo(apiItem.saldo)
          }
          if(cpf === apiItem.cpf){
            setId2(apiItem.id)
            setSaldo2(apiItem.saldo)
          }
        axios.post("http://127.0.0.1:8000/api_transacoes/",{
          id_transacao:id,
          destinatario:id2,                                         //Fazendo a transação
          valor:valor
      
        }).then(resp => console.log(resp.status))
        }
        var result = parseFloat(saldo) - parseFloat(valor)
        var result2 = parseFloat(saldo2) + parseFloat(valor)
      
        axios.patch(`http://127.0.0.1:8000/api_cliente/${id}/?format=json`,{
          saldo:result
        }).then(resp => console.log(resp.status))                                 //Atualizando o saldo dos dois ids dos clientes
      
        axios.patch(`http://127.0.0.1:8000/api_cliente/${id2}/?format=json`,{
          saldo:result2
        }).then(resp => {
          if(resp.status === 200){
            alert("Transferência feita com sucesso!")
            props.navigation.navigate("Read")
          }
        })
      }
    return (
        <View style={styles.container}>
            <View style={styles.button2Row}>
                <TouchableOpacity
                    onPress={() => props.navigation.navigate("Menu")}
                    style={styles.button2}>
                    <TouchableOpacity
                        onPress={() => props.navigation.navigate("Menu")}
                        style={styles.button}>
                        <Icon name="chevron-thin-left" style={styles.icon}></Icon>
                    </TouchableOpacity>
                </TouchableOpacity>
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
            <View style={styles.group2}>
                <View style={styles.rect}>
                    <TextInput placeholder="Cpf" style={styles.textInput2} onChange={(e)=> setCpf(e.target.value)}></TextInput>
                </View>
            </View>
            <View style={styles.group}>
                <View style={styles.rect2}>
                    <TextInput placeholder="Valor" style={styles.textInput1} onChange={(e)=> setValor(e.target.value)}></TextInput>
                </View>
            </View>
            <TouchableOpacity
                onPress={() => transferir()}
                style={styles.button1}>
                <Text style={styles.pagar}>Pagar</Text>
            </TouchableOpacity>
            <Text style={styles.transferencia}>Transferência</Text>
        </View>
    );
}