import React from 'react';
import { StyleSheet, Text, View, ScrollView,Button} from 'react-native';
import Constants from 'expo';

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  font: {
    fontSize: 40,
  },
});

// class CountEvenNumbers extends React.Component {
//   shouldComponentUpdate(nextState)
//   {
//     return !(nextState.count%2);
//   }
//   componentDidUpdate(){
//     console.log(this.props.count)
//   }
//   render() {
//     return(
//     <Text style={styles.font}>{this.props.count}</Text>
//   )}
// }

class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    this.interval = setInterval(this.inc, 1000);
  }

  componentWillUnmount(){
    clearInterval(this.interval)
  }

  inc = () => {
    this.setState(prevState => ({ count: this.state.count + 1 }));
  };

  render() {
    return (
      <View style={styles.appContainer}>
        <Text style={styles.font}>{this.state.count}</Text>
      </View>
    );
  }
}

export default class Apps extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      showCounter : true,
    };
  }

  toggleCounter = () => this.setState(prevState =>({
    showCounter : !prevState.showCounter,
  }))

  render(){
    if(this.state.showCounter)
    {
    return(
      <View style={styles.appContainer}>
       <Button title="toggle" onPress={this.toggleCounter}/>
      <Counter/>
      </View>
    )
    }
    else{
     return  <Button title="toggle" onPress={this.toggleCounter}/>
    }
  }
}
