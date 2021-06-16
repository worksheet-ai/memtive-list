import React from 'react'
import style from './index.module.scss'

class ListContainer extends React.Component {
  render() {
    return (
      <div className={style.ListContainer}>
        <div className={style.ListContainerTitle}>
          {this.props.title.toUpperCase()}
        </div>
        <div>{this.props.children}</div>
      </div>
    )
  }
}

export default ListContainer
