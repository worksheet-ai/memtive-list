import React from 'react'
import style from './index.module.scss'

class ListSearch extends React.Component {
  constructor(props) {
    super(props)
    this.input = React.createRef()
    this.state = {
      value: ''
    }
  }

  handleChange(e) {
    this.setState(
      {
        value: e.target.value
      },
      () => {
        if (this.props.onChange) {
          this.props.onChange(this.state.value)
        }
      }
    )
  }

  render() {
    return (
      <div className={style.ListSearchContainer}>
        <input
          className={style.ListSearch}
          value={this.state.value}
          onChange={(e) => {
            this.handleChange(e)
          }}
          ref={this.input}
        />
        <div className={style.ListSearchContainerIcon}>
          <svg
            width='16px'
            height='16px'
            viewBox='0 0 16 16'
            version='1.1'
            xmlns='http://www.w3.org/2000/svg'
          >
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
                transform='translate(-1437.000000, -393.000000)'
                stroke='#C7C7CC'
                strokeWidth='2'
              >
                <g id='Group-13' transform='translate(451.000000, 381.000000)'>
                  <g
                    id='search-(1)'
                    transform='translate(987.000000, 13.000000)'
                  >
                    <circle id='Oval' cx='6' cy='6' r='6'></circle>
                    <line x1='14' y1='14' x2='11' y2='11' id='Path'></line>
                  </g>
                </g>
              </g>
            </g>
          </svg>
        </div>
      </div>
    )
  }
}

export default ListSearch
