// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

const Hello = props => {
  const { name } = props
  return <div className="bg-blue-100 border border-blue-400 text-blue-700 px-4 py-3 rounded relative mt-20" role="alert">
    <strong className="font-bold">Hello {name}!</strong>
    <span className="block sm:inline">I am rendered from React.</span>
  </div>
}

Hello.defaultProps = {
  name: 'Everybody'
}

Hello.propTypes = {
  name: PropTypes.string
}


const attachReact = (el, cb) => {
  const node = document.getElementById(el)
  if (node) { cb(node) }
}

document.addEventListener('DOMContentLoaded', () => {
  attachReact('react-helloworld', function (node) { ReactDOM.render(<Hello {...JSON.parse(node.getAttribute('data'))} />, node) })
})
