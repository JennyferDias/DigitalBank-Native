import React, { useState} from "react";
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Image,
    ImageBackground
} from "react-native";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import styles from "./style";
import axios from "axios";
import { Alert } from "react-native";

export default function RegisterName() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSuperUser] = useState(true);
  const [isStaff] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = () => {
    setIsSubmitting(true);

    const dados_usuario = {
      username: username,
      email: email,
      password: password,
      is_superuser: isSuperUser,
      is_staff: isStaff,
    };

    axios
      .post('http://127.0.0.1:8000/api_cad_user/', dados_usuario, {
        headers: { 'Content-Type': 'application/json; charset=UTF-8' },
      })
      .then((response) => {
        const resposta_servidor = response.data;
        console.log('Deu certo! Parabens')
        navigation.navigate('Login')
      })
      .catch((error) => {
        console.error(error);
        Alert.alert('Erro ao cadastrar usuário', 'Por favor, tente novamente.');
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

    return (
        <View style={styles.container}>
            <Text style={styles.estamosQuaseLa}>Estamos {"\n"}quase lá!</Text>
            <View style={styles.rect1}>
                <TextInput
                    value={username}
                    onChangeText={(text) => setUsername(text)}
                    placeholder="Digite seu nome sem espaços"
                    style={styles.textInput}></TextInput>
            </View>
            <View style={styles.rect2}>
                <TextInput
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                    placeholder="Digite seu email"
                    style={styles.textInput1}></TextInput>
            </View>
            <View style={styles.rect3}>
                <TextInput
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                    placeholder="Digite sua senha"
                    secureTextEntry={true}
                    style={styles.textInput2}></TextInput>
            </View>
            <Text style={styles.nomeCompleto}>Nome Completo</Text>
            <Text style={styles.emailParaContato}>Email para Contato</Text>
            <Text style={styles.suaSenha}>Sua senha</Text>
            <View style={styles.icon1StackStack}>
                <View style={styles.icon1Stack}>
                    <IoniconsIcon name="ios-arrow-forward" style={styles.icon1}></IoniconsIcon>
                    <TouchableOpacity
                        onPress={handleSubmit}
                        disabled={isSubmitting}
                        style={styles.button1}>
                        <View style={styles.continuar2Row}>
                            <Text style={styles.continuar2}>Continuar</Text>
                            <IoniconsIcon name="ios-arrow-forward" style={styles.icon2}></IoniconsIcon>
                        </View>
                    </TouchableOpacity>
                </View>

            </View>
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
        </View>
    );
}
