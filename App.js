import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

export default class Numbergame extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      rand: Math.floor(Math.random() * 10),
      actual: 0,
      turn: 0,
      score: 0,
      hint: '',
      round: 0,
      transition: 0,
      hintTaken: 0,
      disable:true,
    };
  }
  handle = (a) => {
    this.setState({ text: (this.state.text = a) });
  };
  guessNumber = () => {
    if (this.state.turn < 5) {
      if (this.state.rand == this.state.text) {
        alert('correct');
        this.setState({ turn: (this.state.turn = 0) });
        this.setState({
          score: (this.state.score = this.state.score + 10),
          rand: Math.floor(Math.random() * 10),
        });
        this.setState({ actual: this.state.rand });
      } else {
        alert('Not correct');
        this.setState({ score: (this.state.score = this.state.score + 0) });
        this.setState({ turn: (this.state.turn += 1) });
      }
    } else {
      alert('game stopped');
      this.setState({ text: (this.state.text = [0]) });
      this.setState({ turn: this.state.turn == 5 });
      this.setState({ turn: this.state.disable=false });
      
    }
    this.setState({ hint: (this.state.hint = '') });
  };
  hint = () => {
    if (this.state.rand < 5) {
      if (this.state.rand > this.state.text) {
        this.setState({
          hint: (this.state.hint = 'The number is between 0-5'),
        });
        alert('the number you are guessing is less then actual number ');
      } else {
        alert('the number you are guessing is greater then actual number ');
      }
    } else {
      this.setState({ hint: (this.state.hint = 'The number is between 5-10') });
      if (this.state.rand > this.state.text) {
        alert('the number you are guessing is less then actual number ');
      } else {
        alert('the number you are guessing is greater then actual number ');
      }
    }
    this.setState({ hintTaken: this.state.hintTaken + 1 });
    this.setState({ score: this.state.score - 2 });
  };
  reset(b) {
    if (b === 'reset') {
      this.setState({ text: (this.state.text = 0) });
      this.setState({ actual: (this.state.actual = 0) });
      this.setState({ score: (this.state.score = 0) });
      this.setState({ hint: (this.state.hint = '') });
      this.setState({ turn: (this.state.turn = 0) });
    } else if (b === 'bck') {
      this.setState({
        text: (this.state.text = 0),
      });
    }
  }
  updateTransition = (z) => {
    this.setState({ transition: this.state.transition + 1 });
    if(z==1){
      this.setState({ transition: this.state.transition = 0 });
      this.setState({ text: (this.state.text = 0) });
      this.setState({ actual: (this.state.actual = 0) });
      this.setState({ score: (this.state.score = 0) });
      this.setState({ hint: (this.state.hint = '') });
      this.setState({ turn: (this.state.turn = 0) });
    }

  };
  mainScreen = () => {
    return (
      <View style={{ backgroundColor: '#3A4655', flex: 1 }}>
        <View>
          <Text
              style={{
                width:"100%",
                color: '#fff',
                textAlign:"center",
                fontSize:18,
                marginTop: "8%",
                marginLeft: "3%",
                marginRight: "3%",
                fontFamily: 'Arial',
                fontWeight: 'bold',
                marginLeft: '7%',
              }}>
              Score: {this.state.score}
            </Text>
          </View >  
          <View style={{width:"33%",marginLeft: "7%"}}>
          <Button
              color="red"
              title="Statistic"
              disabled={this.state.disable}
              onPress={this.updateTransition.bind()}
          />  
          </View>                 
        </View>
        <View>
              <Text
                style={{
                  color: '#fff',
                  fontFamily: 'Arial',
                  fontWeight: 'bold',
                  marginTop: '5%',
                  marginLeft: '2%',
                  textAlign: 'left',
                }}>
                Hint: {this.state.hint}
              </Text>
            </View>            
              <Text
                style={{
                  color: '#fff',
                  fontFamily: 'Arial',
                  fontWeight: 'bold',
                  marginTop: '5%',
                  marginLeft: '2%',
                  textAlign: 'left',
                }}>
                Actual number:{this.state.actual}
              </Text>
            <View>
              <Text
                style={{
                  color: '#fff',
                  fontFamily: 'Arial',
                  fontWeight: 'bold',
                  marginTop: '5%',
                  marginLeft: '2%',
                  textAlign: 'left',
                }}>
                Your guess: {this.state.text}
              </Text>
            </View>
          </View>
          <View style={styles.calcButtonRow}>
            <View style={{ width: '20%', marginTop: '5%' }}>
              <Button
                color="#425062"
                title="Hint"
                onPress={this.hint.bind(this, 'hint')}
              />
            </View>
          </View>
          <View style={{ marginTop: '5%' }}>
            <View style={styles.calcButtonRow}>
              <View style={{ width: '33%' }}>
                <Button
                  color="#425062"
                  title="Reset"
                  onPress={this.reset.bind(this, 'reset')}
                />
              </View>
              <View style={{ width: '33%' }}>
                <Button
                  color="#425062"
                  title="Guess"
                  onPress={this.guessNumber.bind(this, 'guess')}
                />
              </View>
              <View style={{ width: '33%' }}>
                <Button
                  color="#425062"
                  title="Back"
                  onPress={this.reset.bind(this, 'bck')}
                />
              </View>
            </View>
            <View style={styles.calcButtonRow}>
              <View style={{ width: '33%' }}>
                <Button
                  color="#425062"
                  title="1"
                  onPress={this.handle.bind(this, 1)}
                />
              </View>
              <View style={{ width: '33%' }}>
                <Button
                  color="#425062"
                  title="2"
                  onPress={this.handle.bind(this, 2)}
                />
              </View>
              <View style={{ width: '33%' }}>
                <Button
                  color="#425062"
                  title="3"
                  onPress={this.handle.bind(this, 3)}
                />
              </View>
            </View>
            <View style={styles.calcButtonRow}>
              <View style={{ width: '33%' }}>
                <Button
                  color="#425062"
                  title="4"
                  onPress={this.handle.bind(this, 4)}
                />
              </View>
              <View style={{ width: '33%' }}>
                <Button
                  color="#425062"
                  title="5"
                  onPress={this.handle.bind(this, 5)}
                />
              </View>
              <View style={{ width: '33%' }}>
                <Button
                  color="#425062"
                  title="6"
                  onPress={this.handle.bind(this, 6)}
                />
              </View>
            </View>
            <View style={styles.calcButtonRow}>
              <View style={{ width: '33%' }}>
                <Button
                  color="#425062"
                  title="7"
                  onPress={this.handle.bind(this, 7)}
                />
              </View>
              <View style={{ width: '33%' }}>
                <Button
                  color="#425062"
                  title="8"
                  onPress={this.handle.bind(this, 8)}
                />
              </View>
              <View style={{ width: '33%' }}>
                <Button
                  color="#425062"
                  title="9"
                  onPress={this.handle.bind(this, 9)}
                />
              </View>
            </View>
            <View style={styles.calcButtonRow}>
              <View style={{ width: '99%' }}>
                <Button
                  color="#425062"
                  title="0"
                  onPress={this.handle.bind(this, 0)}
                />
              </View>
            </View>
          </View>
        </View>
      );
    } else if (this.state.transition == 2) {
      return (        
        <View style={{ backgroundColor: '#3A4655', flex: 1 }}>
          <View style={styles.heading}>
            <Text
              style={{
                color: 'red',
                fontFamily: 'Arial',
                fontWeight: 'bold',
                textAlign: 'center',
              }}>
              GUESS A NUMBER
            </Text>
          </View>
          <View style={styles.endGame}>
            <Text
              style={{
                color: 'red',
                fontFamily: 'Arial',
                fontWeight: 'bold',
                textAlign: 'center',
              }}>
              Game Finished
            </Text>
          </View>
          <View style={styles.startGame}>
             <View style={styles.body}>
            <View>
             <Text
              style={{
                  color: '#fff',
                  fontFamily: 'Arial',
                  fontWeight: 'bold',
                  marginTop: '5%',
                  marginLeft: '2%',
                  textAlign: 'left',
              }}>
              Score: {this.state.score}
            </Text>
              <Text
                style={{
                  color: '#fff',
                  fontFamily: 'Arial',
                  fontWeight: 'bold',
                  marginTop: '5%',
                  marginLeft: '2%',
                  textAlign: 'left',
                }}>
                you took hint: {this.state.hintTaken} times
              </Text>
            </View>            
              <Text
                style={{
                  color: '#fff',
                  fontFamily: 'Arial',
                  fontWeight: 'bold',
                  marginTop: '5%',
                  marginLeft: '2%',
                  textAlign: 'left',
                }}>
                Actual number: {this.state.rand}
              </Text>
            </View>
         
          </View>
          <View style={styles.finish}>
          <View style={{ width: '40%' }}>
                <Button
                  color="red"
                  title="Finish"
               />
              </View>
              <View style={{ width: '43%' }}>
                <Button
                  color="red"
              disabled={this.state.bb}
              title={'Calculate'}
              onPress={this.setValues.bind(this, 2)}
            />
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  body: {
    flex: 0.7,
    borderWidth: 5,
    borderColor: '#FAEBD7',
    margin: '3%',
    justifyContent: 'center',
  },
  calcButtonRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginLeft: '10%',
    marginRight: '10%',
    marginTop: '0%',
  },
  startGame: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginLeft: '10%',
    marginRight: '10%',
    marginTop: '35%',
  },
  finish:{
    flexDirection: 'row',
    justifyContent: 'center',
    marginLeft: '10%',
    marginRight: '10%',
  },
  heading: {
    flex: 0.155,
    justifyContent: 'center',
    marginTop: '15%',
    margin: '19%',
    borderWidth: 1,
    borderRadius: 0,
    borderColor: '#fff',
  },
});
