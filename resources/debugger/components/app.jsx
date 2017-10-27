import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { NavLink } from 'react-router-dom'
import { css } from 'emotion'
import styled from 'react-emotion'
import bridgeHandler from '../handler'

const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
`

const TabBar = styled.div`
  width: 80px;
  padding-top: 20px;
`

const Tab = styled(NavLink)`
  height: 80px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: black;
  text-decoration: none;
  font-size: 1.5rem;
  opacity: 0.5;
  transition: all 0.2s;
  font-weight: 900;
  letter-spacing: -0.45px;

  &:hover {
    opacity: 1;
  }

  &[disabled],
  &[disabled]:hover {
    opacity: 0.5;
    text-decoration: line-through;
  }
`

const TabContent = styled.div`
  flex: 1;
  background: white;
  overflow: auto;
  display: flex;
`

const Label = styled.span`
  font-size: 12px;
  text-transform: uppercase;
  padding-top: 3px;
`

const selectedTab = css`
  opacity: 1 !important;

  &:after {
    content: ' ';
    position: absolute;
    border-top: 15px solid transparent;
    border-bottom: 15px solid transparent;
    border-right: 15px solid white;
    z-index: 1;
    right: 0;
    top: 20px;
  }
`

class App extends Component {
  constructor(props) {
    super(props)
    bridgeHandler(props.dispatch)
  }

  render() {
    return (
      <Container>
        <TabBar>
          <ul>
            <li>
              <Tab to="/console" activeClassName={selectedTab}>
                <span>🗄</span>
                <Label>Console</Label>
              </Tab>
            </li>
            <li>
              <Tab to="/elements" activeClassName={selectedTab}>
                <span>💎</span>
                <Label>State</Label>
              </Tab>
            </li>
            <li>
              <Tab to="/network" activeClassName={selectedTab}>
                <span>🌐</span>
                <Label>Network</Label>
              </Tab>
            </li>
            <li>
              <Tab to="/actions" activeClassName={selectedTab}>
                <span>🛎</span>
                <Label>Actions</Label>
              </Tab>
            </li>
          </ul>
        </TabBar>
        <TabContent>{this.props.children}</TabContent>
      </Container>
    )
  }
}

export default withRouter(connect()(App))
