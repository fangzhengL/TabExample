import React, { PureComponent } from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';
import HomeView from './src/HomeView'
import ImageView from './src/ImageView'
import SettingView from './src/SettingView'
import Feature from './src/Feature'

const TabbarNavigator = TabNavigator(
  {
    Home: { screen: HomeView },
    Setting: { screen: SettingView },
  },
  {
    initialRouteName: 'Home'
  }
);
const AppNavigator = StackNavigator(
  {
    TabBar: { screen: TabbarNavigator },
    Home: { screen: HomeView },
    Image: { screen: ImageView, mode: 'modal' },
    Setting: { screen: SettingView },
  },
  {
    mode: 'modal',
  }
);
export default class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      showFeature: true
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ showFeature: false })
    }, 3000)
  }
  render() {
    return this.state.showFeature ? <Feature/> : <AppNavigator/>
  }
}
















