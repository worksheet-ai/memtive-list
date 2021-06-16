import React from 'react'
import style from './index.module.scss'

import ListColor from '../ListColor'

class ListPill extends React.Component {
  getContainerStyle() {
    if (this.props.color == ListColor.BLUE) {
      return {
        background: ListColor.BLUE,
        border: '1px solid ' + ListColor.BLUE,
        color: '#FFFFFF'
      }
    } else if (this.props.color == ListColor.BROWN) {
      return {
        background: ListColor.BROWN,
        border: '1px solid ' + ListColor.BROWN,
        color: '#FFFFFF'
      }
    } else if (this.props.color == ListColor.CYAN) {
      return {
        background: ListColor.CYAN,
        border: '1px solid ' + ListColor.CYAN,
        color: '#FFFFFF'
      }
    } else if (this.props.color == ListColor.GREEN) {
      return {
        background: ListColor.GREEN,
        border: '1px solid ' + ListColor.GREEN,
        color: '#FFFFFF'
      }
    } else if (this.props.color == ListColor.INDIGO) {
      return {
        background: ListColor.INDIGO,
        border: '1px solid ' + ListColor.INDIGO,
        color: '#FFFFFF'
      }
    } else if (this.props.color == ListColor.MINT) {
      return {
        background: ListColor.MINT,
        border: '1px solid ' + ListColor.MINT,
        color: '#FFFFFF'
      }
    } else if (this.props.color == ListColor.ORANGE) {
      return {
        background: ListColor.ORANGE,
        border: '1px solid ' + ListColor.ORANGE,
        color: '#FFFFFF'
      }
    } else if (this.props.color == ListColor.PINK) {
      return {
        background: ListColor.PINK,
        border: '1px solid ' + ListColor.PINK,
        color: '#FFFFFF'
      }
    } else if (this.props.color == ListColor.PURPLE) {
      return {
        background: ListColor.PURPLE,
        border: '1px solid ' + ListColor.PURPLE,
        color: '#FFFFFF'
      }
    } else if (this.props.color == ListColor.RED) {
      return {
        background: ListColor.RED,
        border: '1px solid ' + ListColor.RED,
        color: '#FFFFFF'
      }
    } else if (this.props.color == ListColor.TEAL) {
      return {
        background: ListColor.TEAL,
        border: '1px solid ' + ListColor.TEAL,
        color: '#FFFFFF'
      }
    } else if (this.props.color == ListColor.YELLOW) {
      return {
        background: ListColor.YELLOW,
        border: '1px solid ' + ListColor.YELLOW,
        color: '#FFFFFF'
      }
    } else {
      return {
        border: '1px solid #D6D5D7',
        color: '#AAAAAA'
      }
    }
  }

  onClick() {
    if (this.props.onClick) {
      this.props.onClick()
    }
  }

  render() {
    if (this.props.color) {
      return (
        <div
          className={style.ListPill}
          style={this.getContainerStyle()}
          onClick={this.onClick.bind(this)}
        >
          {this.props.text}
        </div>
      )
    } else {
      return (
        <div
          className={style.ListPillUndefinded}
          style={this.getContainerStyle()}
          onClick={this.onClick.bind(this)}
        >
          {this.props.text}
        </div>
      )
    }
  }
}

export default ListPill
