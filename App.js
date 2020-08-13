import * as React from 'react';
import { Button, View, Text , Image, TouchableOpacity, StyleSheet,     ScrollView 
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//Pagina Inicial
function HomeScreen({ navigation }) {
  return (
    <ScrollView> 
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

      <Image
        style={styles.Logo}
        source={require('./assets/images/home.png')}
      />
      <View style={{backgroundColor:'black', height:224, width:344}}>

      /*Botoes */

      /*Botao 1 - Cardapio*/
      <TouchableOpacity
        onPress={() => navigation.navigate('Cardapio')
        } style={styles.Botao}>
        
        <Text style={styles.TextoMenu}> Cardapio </Text>
        
         </TouchableOpacity>

         /*Botao 2 - Faca seu pedido*/
      <TouchableOpacity
        onPress={() => navigation.navigate('Cardapio')
        } style={styles.Botao}>
        
        <Text style={styles.TextoMenu}> Faça seu pedido </Text>
        
         </TouchableOpacity>

         /*Botao 3 - Mapa*/
      <TouchableOpacity
        onPress={() => navigation.navigate('Mapa')
        } style={styles.Botao}>
        
        <Text style={styles.TextoMenu}> Mapa </Text>
        
         </TouchableOpacity>
      
      </View>
    </View>
    </ScrollView>
  );
}

/*Pagina do Cardapio */
function PaginaCardapio({ navigation }) {
  return (
    <View style={styles.Container}>

   <View style={{flex: 1, flexDirection: 'row', justifyContent:              'center'}}> 


      <View style= {styles.bloco}> 
      <Image
        style={styles.Hamburguer}
        source={require('./assets/images/hamburguer.png')}/> 
        <Text style={styles.Nome}>X  bacon salada</Text>
        <Text style={styles.Ingredientes}> com salada e bacon</Text>
        <Text style={styles.Valor}> R$7,99</Text>

        </View> 



        <View style ={styles.bloco}> 
              <Image
        style={styles.Hamburguer}
        source={require('./assets/images/hamburguer2.png')}/> 
        <Text style={styles.Nome}>X triplo burguer</Text>
        <Text style={styles.Ingredientes}> com salada e bacon</Text>
        <Text style={styles.Valor}> R$9,99</Text>
        </View>

        </View>

        <View style={{flex: 1, flexDirection: 'row', justifyContent:              'center'}}> 


      <View style= {styles.bloco}> 
      <Image
        style={styles.Hamburguer}
        source={require('./assets/images/hamburguer4.png')}/> 
        <Text style={styles.Nome}> Chicken egg</Text>
        <Text style={styles.Ingredientes}> com salada e bacon</Text>
        <Text style={styles.Valor}> R$11,99</Text>

        </View> 



        <View style ={styles.bloco}> 
              <Image
        style={styles.Hamburguer}
        source={require('./assets/images/hamburguer3.png')}/> 
        <Text style={styles.Nome}>X salada</Text>
        <Text style={styles.Ingredientes}> com salada e bacon</Text>
        <Text style={styles.Valor}> R$13,99</Text>
        </View>


      </View> 
      <View style={{flex: 1, flexDirection: 'row', justifyContent:              'center'}}> 


      <View style= {styles.bloco}> 
      <Image
        style={styles.Hamburguer}
        source={require('./assets/images/hamburguer.png')}/> 
        <Text style={styles.Nome}>X salada</Text>
        <Text style={styles.Ingredientes}> com salada e bacon</Text>
        <Text style={styles.Valor}> R$12,99</Text>

        </View> 



        <View style ={styles.bloco}> 
              <Image
        style={styles.Hamburguer}
        source={require('./assets/images/hamburguer4.png')}/> 
        <Text style={styles.Nome}>X salada</Text>
        <Text style={styles.Ingredientes}> com salada e bacon</Text>
        <Text style={styles.Valor}> R$12,99</Text>
        </View>

        </View>
      <TouchableOpacity  onPress={() => navigation.goBack()} 
       style={styles.Voltar} > Voltar</TouchableOpacity>

    </View>
  );
}

function Mapa({ navigation }) {
  return (
    <View style={styles.Container}>
      <Text style={styles.Titulo}>Endereço </Text>
      <Text style = {styles.Texto}> Av. Carlos Hunter 432
        Bloco C</Text>
 <Text style={styles.Texto}>Bairro das Orquideas </Text>

      <Text style={styles.Titulo}>Horario </Text>
      <Text style={styles.Texto}> Seg a Sex  das 18:00h23:00h</Text>
        <Text style={styles.Texto}>Sab a Dom  das 18:00h- 00:00h </Text>
      <Button 
      title = 'Voltar'
        onPress={() => navigation.navigate('Home')} //vou para a outra pagina
      styles = {{background: '#FFC107'}}
      >
      </Button>
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Cardapio" component={PaginaCardapio} />
        <Stack.Screen name="Mapa" component={Mapa} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

//Estilos

const styles = StyleSheet.create({
  /* Estilos pagina inicial*/
Logo:{
  width: 364,
  height:385
},
Botao:{
  width: 220,
height: 48,
background: '#FEA828',
borderRadius: 20,
left: 62,
marginBottom: 2
},
TextoMenu:{
  color: 'white',
  textAlign: 'center',
  position: 'relative',
  top: 13,
  fontWeight:500
}, /* Estilos Pagina Inicial */
Container : {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
background: 'linear-gradient(180deg, #000000 5.21%, #FEA828 97.4%)'},

//Pagina cardapio
bloco: {
margin: 10,
justifyContent: 'center',
alignItems: 'center',
width: 125,
height: 172,
background: 'rgba(37, 37, 37, 0.67)',
borderRadius: 15,
  },
Hamburguer: {
    justifyContent: 'center',
alignItems: 'center',
width: 109, 
height: 93,
position: 'relative',
top: 0
  },
Nome : {
  textAlign: 'center',
  color: 'white',
  fontSize: 12,
  fontWeight: 'bold'
},
Ingredientes : {
  textAlign: 'center',
  color: '#9D9B9B',
  fontSize: 11

},
Valor: {
   textAlign: 'center',
  color: '#FFC107',
  fontSize: 18,
  fontWeight: 'bold'
}, //Pagina Mapa
Titulo : {
  fontSize: 14,
  fontWeight: 'bold',
  color: '#FEA828',
  textAlign: 'center',
  margin: 5
},
Texto: {
  fontSize: 12,
 color: 'white',
 textAlign: 'center',
 padding: '5'
},
Voltar:{
  color: 'black',
  width: 90,
  height: 40,
  padding: 10,
  textAlign: 'center',
background: '#FEA828',

}
})

 /*
    <Button title="Voltar para Home" onPress={() => navigation.navigate('Home')} />*/
