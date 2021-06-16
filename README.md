# memtive-list

> Made with create-react-library

[![NPM](https://img.shields.io/npm/v/memtive-list.svg)](https://www.npmjs.com/package/memtive-list) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Example

Here's an [example](https://worksheet-ai.github.io/memtive-list/) of the library

## Install

```bash
npm install --save memtive-list
```

## Usage

```jsx
import React from 'react'

import {
  ListColor,
  ListContainer,
  ListElement,
  ListHeader,
  ListPill,
  ListPillContainer,
  ListSearch
} from 'memtive-list'

import 'memtive-list/dist/index.css'

import google from './assets/google.png';

class App extends React.Component {
  someClick() {
    alert("Clicked");
  }
  
  onChange(value) {
    console.log(value);
  }
  
  render() {
    return (
      <div className="App">
        <ListHeader
          text={"HISTORY"}
          filter={true}
          edit={true} />
        <ListContainer title={"SEARCH"}>
          <ListSearch onChange={this.onChange.bind(this)}/>
        </ListContainer>
        <ListPillContainer title={"SUBJECTS"}>
          <ListPill text={"Uncharacterized"}
                    onClick={this.someClick.bind(this)}/>
          <ListPill text={"Calculus"}
                    color={ListColor.BLUE}
                    onClick={this.someClick.bind(this)}/>
        </ListPillContainer>
        <ListContainer title={"TODAY"}>
          <ListElement
            favicon={google}
            title={"Roam Research"}
            subtitle={"Pricing Design Work & Creativity"}
            onClick={this.someClick.bind(this)}/>
          <ListElement
            favicon={google}
            title={"Roam Research"}
            subtitle={"Pricing Design Work & Creativity"}
            onClick={this.someClick.bind(this)}
            color={ListColor.BLUE}/>
        </ListContainer>
      </div>
    );
  }
}

export default App
```

## Enums

#### ListColor

Here are the color types supported in the ListColor Enum

| Values |
| --- |
| BLUE |
| BROWN |
| CYAN |
| GREEN |
| INDIGO |
| MINT |
| ORANGE |
| PINK |
| PURPLE |
| RED |
| TEAL |
| YELLOW |

## Components

#### ListContainer

| Props | Required | Type | Default Value | Description |
| --- | --- | --- | --- | --- |
| title | :white_check_mark: | `String` | `<none>` | The title of the list container  |

#### ListElement

| Props | Required | Type | Default Value | Description |
| --- | --- | --- | --- | --- |
| favicon |  | `String` | `<none>` |  A source url for a favicon style image for the node |
| title | :white_check_mark: | `String` | `<none>` | The title of the list element  |
| subtitle |  | `String` | `<none>` |  The subtitle of the list element |
| onClick |  | `Function` | `<none>` |  The onClickHandler |
| color |  | `ListColor` | `<none>` |  The background color |

#### ListHeader

| Props | Required | Type | Default Value | Description |
| --- | --- | --- | --- | --- |
| edit |  | `Boolean` | `false` | Enable edit button |
| filter |  | `Boolean` | `false` | Enable filter button |
| triggerEdit |  | `Function` | `<none>` | The onClick handler for edit |
| triggerFilter |  | `Function` | `<none>` | The onClick handler for filter |
| text | :white_check_mark: | `String` | `<none>` | The text of the list header  |

#### ListPill

| Props | Required | Type | Default Value | Description |
| --- | --- | --- | --- | --- |
| text | :white_check_mark: | `String` | `<none>` | The text of the list pill  |
| color |  | `ListColor` | `<none>` |  The background color of the pill |

#### ListPillContainer

| Props | Required | Type | Default Value | Description |
| --- | --- | --- | --- | --- |
| title | :white_check_mark: | `String` | `<none>` | The title of the list container  |

#### ListSearch

| Props | Required | Type | Default Value | Description |
| --- | --- | --- | --- | --- |
| onChange |  | `Function` | `<none>` |  The onChange handler for the text |


## License

MIT © [abhishekpratapa](https://github.com/abhishekpratapa)
