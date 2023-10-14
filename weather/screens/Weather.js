import { useEffect, useState } from "react";
import { StyleSheet, Text, Image, View } from "react-native";

const API_URL = 'https://api.openweathermap.org/data/2.5/weather?';
const API_KEY = '';
const ICON_URL = 'https://openweathermap.org/img/wn/';

export default function Weather(props) {
    const [temp,setTemp] = useState(0);
    const [description, setDescription] = useState('');
    const [icon, setIcon] = useState('');


useEffect(() => {
    const url = API_URL +
    'lat=' + props.latitude +
    '&lon=' + props.longitude +
    '&units=metric' +
    '&appid=' + API_KEY;

    fetch(url)
    .then(res => res.json())
    .then((json) => {
       console.log(json) 
        setTemp(json.main.temp);
        setDescription(json.Weather[0].description);
        setIcon(ICON_URL + json.Weather[0].icon + '@2x.png');
        })
        .catch((error) => {
            setDescription('Error retrieving weather information.')
            console.log(error)
        })
    }, [])

    return (
      <View>
        <Text style={styles.temp}>{temp}</Text>
        { icon &&
            <Image source={{uri: icon}} style={{width: 100, height: 100}} />
        }
      </View>
    )
} 


    const styles = StyleSheet.create({
        label: {
            fontWeight: 'bold',
            marginTop: 10,
        },
    });