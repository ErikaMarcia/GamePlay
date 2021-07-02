import React from 'react';
import {
    View,
    Text,
    Image,
    StatusBar,
} from 'react-native';

import IllustrationImg from '../../assets/illustration.png';
import { styles } from './styles';
import { ButtonIcon } from '../../components/ButtonIcon';

export function SingIn() {


    return (
        <View style={styles.container}>
            <StatusBar
                barStyle="light-content"
                backgroundColor="transparent"
                translucent //meio que cola o resto na tela em cima da barra de status
            />
            <Image
                source={IllustrationImg}
                style={styles.image}
                resizeMode="stretch"
            />

            <View style={styles.content}>
                <Text style={styles.title}>
                    Organize {`\n`}
                    suas jogatinas {`\n`}
                    facilmente
                </Text>
                <Text style={styles.subTitle}>
                    Crie grupos para jogar seus games {`\n`}
                    favoritos com seus amigos
                </Text>
                <ButtonIcon title="Entrar com Discord" />
            </View>

        </View>
    );





    //text = nome do estado e setText é a função que att esse estado, expo splash mostra a documentação
    // const [text, setText] = useState('...');

    // return(
    //     <View style={styles.container} >
    //         <Text>oloo</Text>
    //         <TextInput style={styles.input} onChangeText={(value) => setText(value) } />
    //         {/* ou onChangeText={setText} */}
    //         <Text>Você digitou  {text} </Text>
    //     </View>
    // );

}