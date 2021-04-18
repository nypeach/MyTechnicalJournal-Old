import React from 'react'
import hljs from 'highlight.js'
import javascript from 'highlight.js/lib/languages/javascript'
import 'highlight.js/styles/darcula.css'
hljs.registerLanguage('javascript', javascript)

export class Highlighter extends React.PureComponent {

  componentDidMount() {
    hljs.highlightBlock(this.node)
  }

  render() {
    let { children } = this.props
    return (
      <pre
        ref={(node) => this.node = node}
      >
        <code className="javascript">
          {children}
        </code>
      </pre>
    )
  }
}

export default Highlighter