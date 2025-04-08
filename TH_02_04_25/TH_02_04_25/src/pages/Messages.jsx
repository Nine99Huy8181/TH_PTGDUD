import React from 'react'
import Menu from '../components/Menu'
import Header from '../components/Header'

export default function Messages() {
  return (
    <div id='main'>
            <div id='menu'>
                <Menu></Menu>
            </div>
            <div id='header'>
                <Header></Header>
            </div>
            <div id='content'>
                <h1>Messages</h1>
            </div>
        </div>
  )
}
