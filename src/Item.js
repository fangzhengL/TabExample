import React, { PureComponent } from 'react'
import { View, Text, TouchableHighlight } from 'react-native'
import styles from './styles'

export default class Item extends PureComponent {
  render() {
    const { data , onPress} = this.props;
    return (
      <View style={styles.container}>
        <TouchableHighlight onPress = {onPress}>
         <Text>{data}</Text>
        </TouchableHighlight>
      </View>
    )
  }
}


