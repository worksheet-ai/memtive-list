import React from 'react'
import style from './index.module.scss'

class ListHeader extends React.Component {
  triggerEdit() {
    if(this.props.triggerEdit) {
      this.props.triggerEdit()
    }
  }

  triggerFilter() {
    if(this.props.triggerFilter) {
      this.props.triggerFilter()
    }
  }

  renderEdit() {
    if (this.props.edit) {
      return (
        <div
          className={style.ListHeaderIcon}
          onClick={this.triggerEdit.bind(this)}>
          <svg
            width='17px'
            height='17px'
            viewBox='0 0 17 17'
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
                transform='translate(-1555.000000, -324.000000)'
                stroke='#8E8E93'
                strokeWidth='2'
              >
                <g id='edit' transform='translate(1556.000000, 325.000000)'>
                  <path
                    d='M7,1 L1.55555556,1 C0.696445945,1 0,1.69644594 0,2.55555556 L0,13.4444444 C0,14.3035541 0.696445945,15 1.55555556,15 L12.4444444,15 C13.3035541,15 14,14.3035541 14,13.4444444 L14,8'
                    id='Path'
                  ></path>
                  <path
                    d='M12.1791219,0.483986149 C12.8244368,-0.161328726 13.8706989,-0.161328715 14.5160138,0.483986173 C15.1613287,1.12930106 15.1613287,2.17556321 14.5160139,2.82087812 L7.11585596,10.221036 L4,11 L4.77896399,7.88414404 L12.1791219,0.483986149 Z'
                    id='Path'
                  ></path>
                </g>
              </g>
            </g>
          </svg>
        </div>
      )
    } else {
      return (
        <div
          className={style.ListHeaderIconDisabled}>
          <svg
            width='17px'
            height='17px'
            viewBox='0 0 17 17'
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
                transform='translate(-1555.000000, -324.000000)'
                stroke='#8E8E93'
                strokeWidth='2'
              >
                <g id='edit' transform='translate(1556.000000, 325.000000)'>
                  <path
                    d='M7,1 L1.55555556,1 C0.696445945,1 0,1.69644594 0,2.55555556 L0,13.4444444 C0,14.3035541 0.696445945,15 1.55555556,15 L12.4444444,15 C13.3035541,15 14,14.3035541 14,13.4444444 L14,8'
                    id='Path'
                  ></path>
                  <path
                    d='M12.1791219,0.483986149 C12.8244368,-0.161328726 13.8706989,-0.161328715 14.5160138,0.483986173 C15.1613287,1.12930106 15.1613287,2.17556321 14.5160139,2.82087812 L7.11585596,10.221036 L4,11 L4.77896399,7.88414404 L12.1791219,0.483986149 Z'
                    id='Path'
                  ></path>
                </g>
              </g>
            </g>
          </svg>
        </div>
      )
    }
  }

  renderFilter() {
    if (this.props.filter) {
      return (
        <div
          className={style.ListHeaderIcon}
          onClick={this.triggerFilter.bind(this)}>
          <svg
            width='18px'
            height='16px'
            viewBox='0 0 18 16'
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
                transform='translate(-1448.000000, -236.000000)'
                stroke='#8E8E93'
                strokeWidth='2'
              >
                <g id='filter' transform='translate(1449.000000, 237.000000)'>
                  <polygon
                    id='Path'
                    points='16 0 0 0 6.4 7.35777778 6.4 12.4444444 9.6 14 9.6 7.35777778'
                  ></polygon>
                </g>
              </g>
            </g>
          </svg>
        </div>
      )
    } else {
      return (
        <div
          className={style.ListHeaderIconDisabled}>
          <svg
            width='18px'
            height='16px'
            viewBox='0 0 18 16'
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
                transform='translate(-1448.000000, -236.000000)'
                stroke='#8E8E93'
                strokeWidth='2'
              >
                <g id='filter' transform='translate(1449.000000, 237.000000)'>
                  <polygon
                    id='Path'
                    points='16 0 0 0 6.4 7.35777778 6.4 12.4444444 9.6 14 9.6 7.35777778'
                  ></polygon>
                </g>
              </g>
            </g>
          </svg>
        </div>
      )
    }
  }

  render() {
    return (
      <div className={style.ListHeader}>
        <div className={style.ListHeaderText}>
          {this.props.text.toUpperCase()}
        </div>
        <div className={style.ListHeaderSpacer}></div>
        <div className={style.ListHeaderIconContainer}>
          {this.renderEdit()}
          {this.renderFilter()}
        </div>
      </div>
    )
  }
}

export default ListHeader
