import React, { useState, useEffect } from "react";
import { View, Text, ScrollView } from "react-native";
import axios from "axios";
import Buttonp from "@/components/Buttonp";
import { styles } from "@/styles/styles";

import Card from "@/components/Card";


const ListagemScreen = () => {
  const [paises, setPaises] = useState<any[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:8082/pais/")
      .then((response) => {
        setPaises(response.data);
      })
      .catch((error) => {
        console.error("Erro ao obter a lista de países:", error);
      });
  }, []);

  const handleEditar = (pais: any) => {
    // Implemente a lógica de edição do país aqui
    console.log("Editar:", pais);
  };

  const handleExcluir = (pais: any) => {
    // Implemente a lógica de exclusão do país aqui
    console.log("Excluir:", pais);
  };

  return (
    <View style={styles.View}>
      <ScrollView style={styles.scrollView}>
        {paises.map((pais) => (
          <View key={pais.nome} style={styles.card}>
            <Card>
				<Text style={styles.text}>Nome: {pais.nome}</Text>
				<Text style={styles.text}>Sigla: {pais.sigla}</Text>
				<Text style={styles.text}>População: {pais.populacao}</Text>
				<View style={styles.viewButtonCard}>
					<Buttonp className="w-50" label="Editar" onPress={() => handleEditar(pais)} />
					<Buttonp label="Excluir" onPress={() => handleExcluir(pais)} />
				</View>
            </Card>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default ListagemScreen;
