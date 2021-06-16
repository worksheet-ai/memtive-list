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
