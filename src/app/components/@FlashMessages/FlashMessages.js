// @flow
import { connect } from 'react-redux'
import { Bem, cleanProps } from 'app/utils'
import { getMessages } from 'app/modules/flash/flash.selectors'
import type { Message } from 'app/modules/flash/flash.types'
import Msg from './Msg'

const bem = new Bem('FlashMessages')

type Props = {
  messages: Message[],
}

@connect(state => ({
  messages: getMessages(state),
}))
export default class FlashMessages extends React.Component<Props> {
  static defaultProps = {
    messages: [],
  };

  render() {
    const { messages, ...props } = this.props
    return (
      <div {...bem()} {...cleanProps(props)}>
        {messages.map(message => (
          <Msg key={message.id} msg={message} />
        ))}
      </div>
    )
  }
}
