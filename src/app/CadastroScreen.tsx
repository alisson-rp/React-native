import { useState } from "react"
import { View } from 'react-native';
import axios from 'axios';

import Buttonp from "@/components/Buttonp";
import { Inputp } from "@/components/Inputp";
import { styles } from "@/styles/styles";

const CadastroScreen = () => {
    const [nome, setNome] = useState('');
    const [sigla, setSigla] = useState('');
    const [populacao, setPopulacao] = useState('');

    const handleCadastro = () => {
        const novoPais = {
            nome: nome,
            sigla: sigla,
            populacao: populacao,
        };

        axios.post('http://localhost:8082/pais/', novoPais)
            .then(response => {
                console.log('Cadastro realizado com sucesso!', response.data);
                // Limpar os campos do formulário após o cadastro
                setNome('');
                setSigla('');
                setPopulacao('');
            })
            .catch(error => {
                console.error('Erro ao cadastrar:', error);
            });
    };

    return (
        <View style={styles.View}>
            <Inputp>
              <Inputp.Field 
                placeholder="Nome"
                value={nome}
                onChangeText={text => setNome(text)}/>
            </Inputp>
            <Inputp>
              <Inputp.Field 
                placeholder="Sigla"
                value={sigla}
                onChangeText={text => setSigla(text)}/>
            </Inputp>
            <Inputp>
              <Inputp.Field 
                 placeholder="População"
                 value={populacao}
                 onChangeText={text => setPopulacao(text)}/>
            </Inputp>
            <Buttonp label="salvar" onPress={() => handleCadastro()}/>
        </View>
    );
};

export default CadastroScreen;