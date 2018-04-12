import React, { PureComponent } from 'react'
import { View, Button, Image } from 'react-native'
import styles from './styles'

const img = 'https://imgs.xkcd.com/comics/history.png';
export default class ImageView extends PureComponent {
  constructor() {
    super();
    this._dismiss = this._dismiss.bind(this);
  }
  static navigationOptions = {
    title: '这是首页',
  };
  _dismiss() {
    this.props.navigation.goBack();
    this.props.navigation.navigate('Setting')
  }
  render() {
    return (
      <View>
        <Button title="关闭" onPress={this._dismiss}/>
        <Image style={styles.img} source={{ uri: img }}/>
      </View>
    )
  }
}


