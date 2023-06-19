import React, {useState} from "react";
import {View,Image,ImageBackground,TouchableOpacity,Text} from "react-native";
import styles from './styles'

export default function Home(props) {
  const [apiData, setApiData] = useState([])
  const [saldo, setSaldo] = useState("")

  function getSaldo() {
    axios.get("http://127.0.0.1:8000/api_cliente/").then(resp => setApiData(resp.data))

    for (let i = 0; i < apiData.length; i++) {          //Pegando o saldo do usuario
        const apiItem = apiData[i]

        if (apiItem.cpf === localStorage.getItem("cpf")) {
            setSaldo(apiItem.saldo)
        }
        
    }
}
  return (
    <View style={styles.container}>
      <View style={styles.imageStack}>
        <ImageBackground
          source={require("../../assets/images/Cartão.png")}
          resizeMode="contain"
          style={styles.image}
          imageStyle={styles.image_imageStyle}
        >
          <ImageBackground
            source={require("../../assets/images/Cartão.png")}
            resizeMode="contain"
            style={styles.image1}
            imageStyle={styles.image1_imageStyle}
          >
            <View style={styles.image5Stack}>
            <Image
                source={require("../../assets/images/mdi_alpha-d-boxDias.png")}
                resizeMode="contain"
                style={styles.image5}>
            </Image>
            <Image
                source={require("../../assets/images/mdi_alpha-aDias.png")}
                resizeMode="contain"
                style={styles.image6}>
            </Image>
            <Image
                source={require("../../assets/images/VectorDias.png")}
                resizeMode="contain"
                style={styles.image7}>
            </Image>
            </View>
        </ImageBackground>
        </ImageBackground>
        <Image
          source={require("../../assets/images/Cartão.png")}
          resizeMode="contain"
          style={styles.image2}>
        </Image>
        <ImageBackground
          source={require("../../assets/images/Cartão.png")}
          resizeMode="contain"
          style={styles.image3}
          imageStyle={styles.image3_imageStyle}
        >
          <TouchableOpacity
            onPress={() => props.navigation.navigate("Login")}
            style={styles.button}
          >
            <Text style={styles.logIn}>Log In</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("Create")}
            style={styles.button2}
          >
            <Text style={styles.newRegister}>New? Register</Text>
          </TouchableOpacity>
        </ImageBackground>
        <Image
          source={require("../../assets/images/Cartão.png")}
          resizeMode="contain"
          style={styles.image4}>
        </Image>
        <Image
          source={require("../../assets/images/mdi_size-sDias.png")}
          resizeMode="contain"
          style={styles.image8}>
        </Image>
      </View>
    </View>
  );
}