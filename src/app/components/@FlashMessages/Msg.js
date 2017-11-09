// @flow
import { connect } from 'react-redux'
import { Bem, noop, cleanProps } from 'app/utils'
import { removeMessage } from 'app/modules/flash/flash.actions'
import type { Message } from 'app/modules/flash/flash.types'
import './Msg.scss'

const bem = new Bem('Msg')

type Props = {
  msg: Message,
  onClickClose: Function,
  className?: string,
}

@connect(null, { onClickClose: removeMessage })
export default class Msg extends React.Component<Props> {
  static defaultProps = {
    onClickClose: noop,
  };

  clickMessage = () => {
    this.props.onClickClose(this.props.msg.id)
  }

  render() {
    const { msg, className, ...props } = this.props
    return (
      <span {...bem(null, msg.type, className)} {...cleanProps(props)}>
        {msg.message}
        <button {...bem('close')} onClick={this.clickMessage}>
          &times;
        </button>
      </span>
    )
  }
}
