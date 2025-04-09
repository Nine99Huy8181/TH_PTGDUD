import React from 'react'
import './MainLayout.css'
import {Outlet} from 'react-router-dom'
import Header from '../components/Header';
import Menu from '../components/Menu';
import { useLabelContext } from '../hooks/LabelContex';

export default function MainLayout() {
  const {labelHeader} = useLabelContext();
  return (
    <div id='main'>
        <div id='menu'>
            <Menu></Menu>
        </div>
        <div id='header'>
            <Header label={labelHeader}></Header>
        </div>
        <div id='content'>
          <Outlet></Outlet>
        </div>
    </div>
  )
}
