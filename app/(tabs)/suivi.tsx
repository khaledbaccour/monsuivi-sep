import { Image, StyleSheet, Platform, Text, TouchableOpacity, ScrollView } from 'react-native';
import { View } from 'react-native';
import { Slider } from '@miblanchard/react-native-slider';
import React from 'react';
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
  } from "react-native-chart-kit";

const calculateHealthCheckin = (fatigue: number, humeur: number, douleur: number, cognition: number, mobilite: number, sommeil: number, fonctionVesicale: number) => {
    const C1 = 0.25; // Fatigue coefficient
    const C2 = 0.15; // Humeur coefficient
    const C3 = 0.2;  // Douleur coefficient
    const C4 = 0.1;  // Fonction Cognitive coefficient
    const C5 = 0.15; // Mobilité coefficient
    const C6 = 0.1;  // Qualité du Sommeil coefficient
    const C7 = 0.05; // Fonction Vésicale et Intestinale coefficient

    const healthCheckin = 
        C1 * fatigue +
        C2 * humeur +
        C3 * douleur +
        C4 * cognition +
        C5 * mobilite +
        C6 * sommeil +
        C7 * fonctionVesicale;

    return healthCheckin;
};

export default function Suivi() {
    const [fatigue, setFatigue] = React.useState(0.5);
    const [humeur, setHumeur] = React.useState(0.6);
    const [douleur, setDouleur] = React.useState(0.25);
    const [cognition, setCognition] = React.useState(0.8);
    const [mobilite, setMobilite] = React.useState(0.3);
    const [sommeil, setSommeil] = React.useState(0.7);
    const [fonctionVesicale, setFonctionVesicale] = React.useState(0.2);

    const handleSubmit = () => {
        const bilanQuotidien = calculateHealthCheckin(
            fatigue,
            humeur,
            douleur,
            cognition,
            mobilite,
            sommeil,
            fonctionVesicale
        );
        alert(`Bilan quotidien : ${bilanQuotidien.toFixed(2)}`);
    };

    const critere = [
        { name: "Fatigue", value: fatigue, setValue: setFatigue },
        { name: "Humeur", value: humeur, setValue: setHumeur },
        { name: "Douleur", value: douleur, setValue: setDouleur },
        { name: "Fonction cognitive", value: cognition, setValue: setCognition },
        { name: "Mobilité", value: mobilite, setValue: setMobilite },
        { name: "Qualité du sommeil", value: sommeil, setValue: setSommeil },
        { name: "Fonction vésicale et intestinale", value: fonctionVesicale, setValue: setFonctionVesicale }
    ];

    return (
        <ScrollView style={styles.scrollCont}>
            <View style={styles.cont}>
                {
                    critere.map((crit, index) => {
                        return (
                            <View style={styles.minicont} key={index}>
                                <Text style={styles.txt}>{crit.name}</Text>
                                <Slider
                                    containerStyle={styles.slider}
                                    minimumValue={0}
                                    maximumValue={1}
                                    minimumTrackTintColor="dodgerblue"
                                    maximumTrackTintColor="blue"
                                    thumbTintColor="#f7ce4d"
                                    value={crit.value}
                                />
                            </View>
                        );
                    })
                }

                {/* Bouton de soumission */}
                <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                    <Text style={styles.buttonText}>Soumettre le bilan quotidien</Text>
                </TouchableOpacity>

                <Image
        source={require('@/assets/images/graph.png')}
        style={styles.img}
                />
            </View>
            
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    scrollCont: {
        backgroundColor: "#f0f0f0",
    },
    cont: {
        paddingTop: 40,
        backgroundColor: "#f0f0f0",
        height: "100%",
    },
    img: {
        marginTop: 10,
        width: 350,
        height: 350,
        borderRadius: 4,
        marginHorizontal: 20,
        marginBottom: 20,
    },
    slider: {
        width: "50%", // Set to 50% of the container's width
        height: 40,
    },
    minicont: {
        width: "100%",
        padding: 20,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    txt: {
        width: "50%", // Set to 50% of the container's width
        paddingTop: 5,
        fontSize: 16,
        fontFamily: 'Garet',
        color: "#000",
        paddingRight: 20,
    },
    button: {
        backgroundColor: "dodgerblue",
        padding: 15,
        margin: 20,
        alignItems: "center",
        borderRadius: 10,
    },
    buttonText: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold",
    },
});
