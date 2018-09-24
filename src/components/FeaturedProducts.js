import React, { Component } from 'react';
import { View, Text, ScrollView, Image } from 'react-native'

class Toolbar extends Component {
  render() {
    return (
      <View>
        <Text style={{ fontSize: 18, marginVertical: 10, fontWeight: '700'}}>
          Featured Products
        </Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={{ height: 150, borderWidth: 0.5, borderColor: '#ddd', width: 150, marginRight: 10 }}>
            <View style={{ height: 150, width: 150, flex: 2}}>
              <Image source={{ uri: 'https://bk-ca-prd.s3.amazonaws.com/sites/burgerking.ca/files/Roadhouse-King-Silo-300x270_CR.jpg'}} style={{flex: 1, width: null, height:null, resizeMode: 'cover'}}></Image>
            </View>
            <View style={{ height: 150, width: 150, flex: 1 }}>
              <Text style={{paddingLeft: 10, paddingTop: 10}}>Double Decker Ham Burger</Text>
            </View>
          </View>
          <View style={{ height: 150, borderWidth: 0.5, borderColor: '#ddd', width: 150, marginRight: 10  }}>
            <View style={{ height: 150, width: 150, flex: 2 }}>
              <Image source={{ uri: 'https://bk-ca-prd.s3.amazonaws.com/sites/burgerking.ca/files/Roadhouse-King-Silo-300x270_CR.jpg' }} style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}></Image>
            </View>
            <View style={{ height: 150, width: 150, flex: 1 }}>
              <Text style={{ paddingLeft: 10, paddingTop: 10 }}>Double Decker Ham Burger</Text>
            </View>
          </View><View style={{ height: 150, borderWidth: 0.5, borderColor: '#ddd', width: 150, marginRight: 10  }}>
            <View style={{ height: 150, width: 150, flex: 2 }}>
              <Image source={{ uri: 'https://bk-ca-prd.s3.amazonaws.com/sites/burgerking.ca/files/Roadhouse-King-Silo-300x270_CR.jpg' }} style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}></Image>
            </View>
            <View style={{ height: 150, width: 150, flex: 1 }}>
              <Text style={{ paddingLeft: 10, paddingTop: 10 }}>Double Decker Ham Burger</Text>
            </View>
          </View><View style={{ height: 150, borderWidth: 0.5, borderColor: '#ddd', width: 150, marginRight: 10  }}>
            <View style={{ height: 150, width: 150, flex: 2 }}>
              <Image source={{ uri: 'https://bk-ca-prd.s3.amazonaws.com/sites/burgerking.ca/files/Roadhouse-King-Silo-300x270_CR.jpg' }} style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}></Image>
            </View>
            <View style={{ height: 150, width: 150, flex: 1 }}>
              <Text style={{ paddingLeft: 10, paddingTop: 10 }}>Double Decker Ham Burger</Text>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default Toolbar