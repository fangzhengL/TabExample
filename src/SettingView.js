import React, { PureComponent } from 'react'
import { View, Text, FlatList } from 'react-native'
import Item from './Item'
import styles from './styles'

const data = ['zhangsan', 'lisi', 'wangmazi', 'zhaoliu', 'marong', 'wangbaoqing', 'lixiaolu'];
export default class SettingView extends PureComponent {
  constructor() {
    super();
    this._onPress = this._onPress.bind(this);
    this._renderItem = this._renderItem.bind(this);
  }
  _onPress() {
    console.log('onClick')
  }
  _renderItem(data) {
    return <Item onPress={this._onPress} data={data.item}/>
  }
  render() {
    console.log(this.data);
    return (
      <View style={styles.container}>
        <FlatList data={data}
                  renderItem={this._renderItem}
        />
      </View>
    )
  }
}


