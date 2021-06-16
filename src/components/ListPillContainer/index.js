import React from 'react'
import style from './index.module.scss'

class ListPillContainer extends React.Component {
  render() {
    return (
      <div>
        <div className={style.ListPillContainerTitle}>
          {this.props.title.toUpperCase()}
        </div>
        <div className={style.ListPillContainer}>{this.props.children}</div>
      </div>
    )
  }
}

export default ListPillContainer
