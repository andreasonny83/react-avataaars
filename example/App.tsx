import * as React from 'react';
import { Avatar, Options } from '../src/index';
import './App.css';

export default class App extends React.Component {
  public render() {
    const hash = 'type-anything-here';
    const options: Options = {
      accessories: 'wayfarers',
      accessoriesChance: 100,
      clothesColor: 'heather',
      eyes: 'happy',
      hairColor: 'blonde',
      mouth: 'twinkle',
      style: 'circle',
      top: 'hat',
      topChance: 100,
    };

    return (
      <div>
        <Avatar className="Avatar" options={options} hash={hash} size="300" />
      </div>
    );
  }
}
