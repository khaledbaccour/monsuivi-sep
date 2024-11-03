import { useEffect, useState } from "react";
import { View,
    StyleSheet,
    Image,
    Text,
    FlatList
} from "react-native";

export default function Jeux() {

    const [iconUrls, setIconUrls] = useState<string[]>([]);

    useEffect(() => {
        const options = {
          method: 'GET',
          headers: {
            'x-freepik-api-key': 'FPSX5bbb87c3d945496a87a9ca77e489ad87',
            'Accept-Language': 'en-US'
          }
        };
    
        const query = "brain games icon";
        const perPage = 20;
        const page = 1;
    
        const url = `https://api.freepik.com/v1/resources?page=${page}&order=relevance&term=${query}&limit=${perPage}&filters%5Bvector%5D%5Btype%5D=jpg`;
    
        fetch(url, options)
          .then((response) => response.json())
          .then((data) => {
            console.log("data data",data.data[0].image.source.url)
            const newDataList: string[] = [];
            data.data.forEach((icon: any) => {
              const thumbnailUrl = icon.image.source.url;
              newDataList.push(thumbnailUrl);
              
            });
            setIconUrls(newDataList);
          })
          .catch((error) => console.error(error));
      }, []);

      const renderIcon = ({ item }: { item: string }) => (
        <View style={styles.iconWrapper}>
          <Image source={{ uri: item }} style={styles.iconImage} />
        </View>
      );
    
  return (
   <View style={styles.cont}>
    <Text style={{
        paddingTop: 20,
        fontSize: 24,
        fontFamily: 'Garet',
    }}>Stimulateurs cognitifs</Text>
      <FlatList
          data={iconUrls}
          renderItem={renderIcon}
          keyExtractor={(item, index) => index.toString()}
          numColumns={2}
          contentContainerStyle={styles.iconGrid}
        />
   
   </View>
  );
}

const styles = StyleSheet.create({
    cont : {
        backgroundColor: '#fff',
        flex: 1,
        padding: 16,
        alignItems: 'center',
    },
    img: {
        marginTop: 10,
        width: 350,
        height: 350,
        borderRadius: 4,
        marginHorizontal: 20,
    },
    iconWrapper: {
        margin: 10,
        justifyContent: "center",
        alignItems: "center"
      },
      iconImage: {
        width: 120,
        height: 120,
        resizeMode: "cover"
      },
      iconGrid: {
        marginTop: 30,
        padding: 20,
        width: "100%"
      }
});
