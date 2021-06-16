import React from 'react'
import style from './index.module.scss'

import ListColor from '../ListColor'

class ListElement extends React.Component {
  renderFaviconTitleSpacer() {
    if (this.props.favicon) {
      return <div className={style.ListElementFaviconTitleSpacer}></div>
    }
  }

  renderTitleSubTitleSpace() {
    if (this.props.title) {
      return <div className={style.ListElementTitleSubTitleSpace}></div>
    }
  }

  renderFavicon() {
    if (this.props.favicon) {
      return (
        <div className={style.ListElementImage}>
          <img
            className={style.ListElementImageElement}
            src={this.props.favicon}
          />
        </div>
      )
    }
  }

  renderTitle() {
    if (this.props.title) {
      return (
        <div
          className={style.ListElementTitle}
          style={{ color: this.getTextColor() }}
        >
          {this.props.title}
        </div>
      )
    }
  }

  renderSubTitle() {
    if (this.props.subtitle) {
      return (
        <div
          className={style.ListElementSubTitle}
          style={{ color: this.getTextColor() }}
        >
          {this.props.subtitle}
        </div>
      )
    }
  }

  renderArrow() {
    if (this.props.onClick) {
      return (
        <div className={style.ListArrow}>
          <svg width='10px' height='17px' viewBox='0 0 10 17' version='1.1'>
            <g
              id='Page-1'
              stroke='none'
              strokeWidth='1'
              fill='none'
              fillRule='evenodd'
              strokeLinecap='round'
              strokeLinejoin='round'
            >
              <g
                id='Apple-TV'
                transform='translate(-1445.000000, -806.000000)'
                stroke={this.getTextColor()}
              >
                <g id='Group-4' transform='translate(451.000000, 793.000000)'>
                  <g id='Group-3' transform='translate(994.000000, 13.000000)'>
                    <line
                      x1='1.22222222'
                      y1='0.5'
                      x2='9.22222222'
                      y2='8.5'
                      id='Line-3'
                    ></line>
                    <line
                      x1='1.22222222'
                      y1='8.5'
                      x2='9.22222222'
                      y2='16.5'
                      id='Line-3'
                      transform='translate(5.222222, 12.500000) scale(1, -1) translate(-5.222222, -12.500000) '
                    ></line>
                  </g>
                </g>
              </g>
            </g>
          </svg>
        </div>
      )
    }
  }

  getContainerStyle() {
    if (this.props.color == ListColor.BLUE) {
      return {
        background: ListColor.BLUE,
        border: '1px solid ' + ListColor.BLUE
      }
    } else if (this.props.color == ListColor.BROWN) {
      return {
        background: ListColor.BROWN,
        border: '1px solid ' + ListColor.BROWN
      }
    } else if (this.props.color == ListColor.CYAN) {
      return {
        background: ListColor.CYAN,
        border: '1px solid ' + ListColor.CYAN
      }
    } else if (this.props.color == ListColor.GREEN) {
      return {
        background: ListColor.GREEN,
        border: '1px solid ' + ListColor.GREEN
      }
    } else if (this.props.color == ListColor.INDIGO) {
      return {
        background: ListColor.INDIGO,
        border: '1px solid ' + ListColor.INDIGO
      }
    } else if (this.props.color == ListColor.MINT) {
      return {
        background: ListColor.MINT,
        border: '1px solid ' + ListColor.MINT
      }
    } else if (this.props.color == ListColor.ORANGE) {
      return {
        background: ListColor.ORANGE,
        border: '1px solid ' + ListColor.ORANGE
      }
    } else if (this.props.color == ListColor.PINK) {
      return {
        background: ListColor.PINK,
        border: '1px solid ' + ListColor.PINK
      }
    } else if (this.props.color == ListColor.PURPLE) {
      return {
        background: ListColor.PURPLE,
        border: '1px solid ' + ListColor.PURPLE
      }
    } else if (this.props.color == ListColor.RED) {
      return {
        background: ListColor.RED,
        border: '1px solid ' + ListColor.RED
      }
    } else if (this.props.color == ListColor.TEAL) {
      return {
        background: ListColor.TEAL,
        border: '1px solid ' + ListColor.TEAL
      }
    } else if (this.props.color == ListColor.YELLOW) {
      return {
        background: ListColor.YELLOW,
        border: '1px solid ' + ListColor.YELLOW
      }
    } else {
      return {
        border: '1px solid #D6D5D7'
      }
    }
  }

  getTextColor() {
    if (
      this.props.color == ListColor.BLUE ||
      this.props.color == ListColor.BROWN ||
      this.props.color == ListColor.CYAN ||
      this.props.color == ListColor.GREEN ||
      this.props.color == ListColor.INDIGO ||
      this.props.color == ListColor.MINT ||
      this.props.color == ListColor.ORANGE ||
      this.props.color == ListColor.PINK ||
      this.props.color == ListColor.PURPLE ||
      this.props.color == ListColor.RED ||
      this.props.color == ListColor.TEAL ||
      this.props.color == ListColor.YELLOW
    ) {
      return '#FFFFFF'
    } else {
      return '#AAAAAA'
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
          className={style.ListElement}
          style={this.getContainerStyle()}
          onClick={this.onClick.bind(this)}
        >
          {this.renderFavicon()}
          {this.renderFaviconTitleSpacer()}
          {this.renderTitle()}
          {this.renderTitleSubTitleSpace()}
          {this.renderSubTitle()}
          {this.renderArrow()}
        </div>
      )
    } else {
      return (
        <div
          className={style.ListElementUndefined}
          style={this.getContainerStyle()}
          onClick={this.onClick.bind(this)}
        >
          {this.renderFavicon()}
          {this.renderFaviconTitleSpacer()}
          {this.renderTitle()}
          {this.renderTitleSubTitleSpace()}
          {this.renderSubTitle()}
          {this.renderArrow()}
        </div>
      )
    }
  }
}

export default ListElement
