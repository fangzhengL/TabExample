import React, { PureComponent } from 'react'
import { View, Text } from 'react-native'
import styles from './styles'

export default class Feature extends PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>梁方峥</Text>
      </View>
    )
  }
}
