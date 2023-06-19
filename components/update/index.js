import React, {useState, useEffect} from "react";
import {View, TouchableOpacity, Text, TextInput} from "react-native";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import SimpleLineIconsIcon from "react-native-vector-icons/SimpleLineIcons";
import styles from "./style";

export default function Update(props) {
    const [image, setImage] = useState()
    const [preview, setPreView] = useState()

    useEffect(() => {
        if (!image) {
            return
        }
        const objectUrl = URL.createObjectURL(image)

        setPreView(objectUrl)

        return() => URL.revokeObjectURL(objectUrl)
    }, [image])

    const upload = e => {
        e.preventDefault()

        const file = image

        if (!file) {
            console.log('Faltou imagem!')
            return
        }

        if (image == null) 
            return

        const storageRef = ref(
            storage,
            `images/${nome.replace(/ +/g, '') + '_' + image.name}`
        )
        const uploadTask = uploadBytesResumable(storageRef, file)

        uploadTask.on('state_changed', snapshot => {
            const progress = Math.round(
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            )
            setTimeout(() => {
                setProgressoPercent(progress),
                1000
            })
        })
        adicionar()
    }

    async function adicionar() {
        await addDoc(collection(db, 'Cliente'), {
            image: image.name
        })
        setPreView(undefined)
    }
    return (
        <View style={styles.container}>
            <View style={styles.icon1Stack}>
                <View>
                    <img src={preview} style={styles.icon1}/>
                </View>
                <TouchableOpacity style={styles.button}>
                    <MaterialCommunityIconsIcon name="tab-plus" style={styles.icon2}>
                        <input
                        style={styles.filePut}
                        type='file'
                        onChange={e => {
                        setImage(e.target.files[0])
                        }}/>
                </MaterialCommunityIconsIcon>
                </TouchableOpacity>
            </View>
            <View style={styles.rect3}>
                <View style={styles.loremIpsumStack}>
                    <Text style={styles.loremIpsum}></Text>
                    <TextInput placeholder="Nome Completo" style={styles.textInput}></TextInput>
                </View>
                <SimpleLineIconsIcon name="pencil" style={styles.icon4}></SimpleLineIconsIcon>
            </View>
            <View style={styles.rect2}>
                <SimpleLineIconsIcon name="pencil" style={styles.icon5}></SimpleLineIconsIcon>
                <TextInput placeholder="Email" style={styles.textInput1}></TextInput>
            </View>
            <View style={styles.rect4}>
                <SimpleLineIconsIcon name="pencil" style={styles.icon6}></SimpleLineIconsIcon>
                <TextInput placeholder="Telefone" style={styles.textInput2}></TextInput>
            </View>
            <TouchableOpacity
                onPress={() => props.navigation.navigate("Read")}
                style={styles.button1}>
                <Text style={styles.confirmar}>Confirmar</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => props.navigation.navigate("Home")}
                style={styles.button2}>
                <Text style={styles.sairDaConta}>Sair da Conta</Text>
            </TouchableOpacity>
        </View>
    );
}