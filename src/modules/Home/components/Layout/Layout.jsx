import * as React from 'react';
import { withStyles } from '@material-ui/core';

import Header from './components/Header';
import Sidebar from './components/Sidebar';

import { Lab1AppDescription, Lab1HostingAndIDE, Lab1Task, Lab1Look, Lab1Table, Lab1Form, Lab1Image, Lab1Heading, Lab1Summary } from './modules/Lab1';

import styles from './Layout.styles';

const LAB_ID = {
  first: 0,
  second: 1,
  third: 2,
  fourth: 3,
  fifth: 4,
  sixth: 5,
  seventh: 6,
  eighth: 7,
  ninth: 8,
};

class Layout extends React.Component {
  state = {
    selectedLabContentId: undefined,
    activeTabId: LAB_ID.first,
    Component: () => <div style={{ textAlign: 'center', paddingTop: '10%' }}>Будь-ласка, оберіть щось збоку :)</div>
  };

  handleLabSelect = (activeTabId) => {
    this.setState((state) => ({ ...state, activeTabId }));
  }

  handleLabComponentSelect = (selectedLabContentId, Component) => {
    this.setState((state) => ({ ...state, selectedLabContentId, Component }));
  }

  get sidebarConfig() {
    const config = {
      [LAB_ID.first]: {
        navigation: [
          { name: 'Постановка задачі', component: Lab1Task, id: `${LAB_ID.first}_task` },
          { name: 'Середовище розробки, хостинг', component: Lab1HostingAndIDE, id: `${LAB_ID.first}_hosting-ide` },
          { name: 'Опис предметного середовища', component: Lab1AppDescription, id: `${LAB_ID.first}_description` },
          { name: 'Зовнішний вигляд сайту', component: Lab1Look, id: `${LAB_ID.first}_view` },
          { name: 'HTML таблиць', component: Lab1Table, id: `${LAB_ID.first}_tables` },
          { name: 'HTML форми', component: Lab1Form, id: `${LAB_ID.first}_forms` },
          { name: 'HTML зображення', component: Lab1Image, id: `${LAB_ID.first}_img` },
          { name: 'HTML заголовків', component: Lab1Heading, id: `${LAB_ID.first}_heading` },
          { name: 'Висновки', component: Lab1Summary, id: `${LAB_ID.first}_summary` },
        ]
      }
    };

    return config[this.state.activeTabId];
  }

  render() {
    const { classes, labsAmount } = this.props;
    const { Component, activeTabId, selectedLabContentId } = this.state;

    return (
      <div className={classes.root}>
        <Header 
          selectedLabId={activeTabId}
          labsAmount={labsAmount}
          onLabSelect={this.handleLabSelect}
        />
        <div className={classes.content}>
          <Sidebar 
            classes={{
              root: classes.sidebar
            }}
            selectedLabContentId={selectedLabContentId}
            navigation={this.sidebarConfig.navigation}
            onSelect={this.handleLabComponentSelect}
          />
          <div className={classes.labContent}>
            <Component />
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Layout);