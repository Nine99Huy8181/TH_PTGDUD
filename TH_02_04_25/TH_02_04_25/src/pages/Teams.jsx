import React from 'react'
import Menu from '../components/Menu'
import Header from '../components/Header'

export default function Teams() {
  return (
    <div id='main'>
            <div id='menu'>
                <Menu></Menu>
            </div>
            <div id='header'>
                <Header></Header>
            </div>
            <div id='content'>
                <h1>Teams</h1>
            </div>
        </div>
  )
}
