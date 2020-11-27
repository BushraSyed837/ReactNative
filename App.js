import React from 'react';
import { StyleSheet,ScrollView, Modal, View, Text, Button, TextInput } from 'react-native';

export default class Numbergame extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      finalPrice: 0.0,
      save: 0,
      discount: 0.0,
      price: 0.0,
      history: ["History\n"],
      transition: 2,
      value: 0,
    };
  }
  setValues = (e) => {
    this.setState({ finalPrice: 0 })
    this.setState({ discount: this.state.discount = (this.state.discount / 100) })
    this.setState({ finalPrice: this.state.finalPrice = (this.state.price - (this.state.discount * this.state.price)) })
    this.setState({ save: this.state.save = (this.state.discount * this.state.price) })
    this.setState({ finalPrice: (this.state.finalPrice -= (this.state.finalPrice % .01)) })
    this.setState({ save: (this.state.save -= (this.state.save % .01)) })
    this.setState({ history: this.state.history += ("Original Price " + this.state.price + "\n") })
    this.setState({ history: this.state.history += (("You Pay: " + (this.state.finalPrice) + "\n")) })
    this.setState({ history: this.state.history += ("You Save: " + this.state.save + "\n") })
    //alert(this.state.history)
  }
  display = () => {
    if (this.state.transition == 1) {
      return (
        <View style={{ backgroundColor: '#3A4655', flex: 1 }}>
          <Modal animationType="slide" transparent={true} visible={this.state.modal} onRequestClose={() => { this.setState({ transition: (this.state.transition = 2) }) }}>
            <View style={styles.centeredView}>
            <ScrollView>
              <Text style={{ fontSize: 13, color: "black" }}>{this.state.history}</Text>
              </ScrollView>
              <View style={styles.btn}>
                <View>
                  <Button
                    color="red"
                    title={'close'}
                    onPress={() => { this.setState({ transition: (this.state.transition = 2) }) }}
                  />
                </View>
              </View>
            </View>
          </Modal>
        </View>
      )
    }
    else if (this.state.transition == 2) {
      return (
        <View style={{ backgroundColor: '#3A4655', flex: 1 }}>
          <View style={styles.heading}>
            <Text style={{ color: "red", fontSize: 18, textAlign: "center" }}>Discount Calculator</Text>
          </View>
          <View style={{ borderWidth: 1, marginLeft: "8%", marginRight: "8%", borderColor: '#fff', }}>
            <View style={styles.text}>
              <Text style={{ color: '#fff', fontSize: 17, marginBottom: "3%" }}>You Pay: {this.state.finalPrice}</Text>
              <Text style={{ color: '#fff', fontSize: 17, marginBottom: "3%" }}>You Save: {this.state.save}</Text>
            </View>
            <View>
              <Button
                color="red"
                title={"history"}
                onPress={() => { this.setState({ transition: (this.state.transition = 1) }) }}
              />
            </View>
          </View>
          <View>
            <TextInput
              style={styles.textInput}
              color="#fff"
              placeholder="Original Price"
              keyboardType="number-pad"
              onChangeText={(value) => {
                this.setState({ price: (this.state.price = value) })
              }
              }
              placeholderTextColor="grey"
            ></TextInput>
          </View>
          <View>
            <TextInput
              style={styles.textInput}
              color="#fff"
              placeholder="Discount Price"
              keyboardType="number-pad"
              onChangeText={(value) => {
                if (value <= 100) {
                  this.setState({ discount: (this.state.discount = value) })
                }
                else {
                  this.setState({ discount: (this.state.discount = 0) })
                  alert("The range of discount is too much")
                }
              }

              }
              placeholderTextColor="grey"
            ></TextInput>
          </View>
          <View style={styles.btn}>
            <View>
              <Button
                color="red"
                disabled={this.state.bb}
                title={'Calculate'}
                onPress={this.setValues.bind()}
              />
            </View>
          </View>
        </View>
      )
    }
  }
  render() {
    return (
      <View style={{ backgroundColor: '#3A4655', flex: 1 }}>
        {this.display()}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  body: {
    flex: 0.2,
    borderWidth: 5,
    borderColor: '#fff',
    margin: '5%',
    justifyContent: 'center',
  },
  btn: {
    flexDirection: 'row',
    width: '33%',
    marginLeft: '19%',
    marginRight: '15%',
    alignSelf: 'center',
    marginTop: '5%',
  },
  text: {
    borderColor: '#fff',
    borderWidth: 0,
    marginTop: '3%',
    marginBottom: '3%',
  },
  centeredView: {
    height: "50%",
    width: "50%",
    justifyContent: "center",
    alignItems: "center",
    margin: "25%",
    color: "black",
    backgroundColor: "white"

  },
  textInput: {
    borderBottomColor: '#fff',
    borderBottomWidth: 2,
    marginTop: '3%',
    flexDirection: 'row',
    marginLeft: "10%",
    marginRight: "10%",
    justifyContent: "space-between",
  },
  calcBody: {
    margin: 'auto',
    minHeight: '400px',
  },
  calcButtonRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginLeft: '10%',
    marginRight: '10%',
  },
  heading: {
    flex: 0.29,
    fontSize: 18,
    color: 'red',
    textAlign: 'center',
    justifyContent: 'center',
    marginTop: '20%',
    margin: '25%',
    borderWidth: 1,
    borderRadius: 0,
    borderColor: '#fff',
  },
});
