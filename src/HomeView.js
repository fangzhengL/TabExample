import React, { PureComponent } from 'react'
import { Button } from 'react-native'

export default class HomeView extends PureComponent {
  constructor() {
    super();
    this._showImage = this._showImage.bind(this)
  }
  _showImage() {
    this.props.navigation.navigate('Image')
  }
  render() {
    return (
      <Button title="图片" onPress={this._showImage}/>
    )
  }
}

