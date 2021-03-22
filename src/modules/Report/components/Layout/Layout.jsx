import * as React from 'react';
import { withStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';

import Header from './components/Header';
import Sidebar from './components/Sidebar';

import { Lab1AppDescription, Lab1HostingAndIDE, Lab1Task, Lab1Look, Lab1Table, Lab1Form, Lab1Image, Lab1Heading, Lab1Summary } from './modules/Lab1';
import { Lab2List, Lab2Task, Lab2Id, Lab2Indent, Lab2Float, Lab2Selectors, Lab2SelectorsTagClass, Lab2SelectorsOther, Lab2SelectorsGrouping } from './modules/Lab2';
import { Lab3IDE, Lab3SiteScreen, Lab3Task, Lab3HTML, Lab3CSS, Lab3Flex, Lab3Summary, Lab3KorniienkoFlex, Lab3KudymenkoFlex, Lab3HytrykFlex, Lab3KudymenkoSite, Lab3HytrykSite, Lab3KorniienkoSite } from './modules/Lab3';

import styles from './Layout.styles';
import { Lab4Task } from './modules/Lab4';

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
      },
      [LAB_ID.second]: {
        navigation: [
          { name: 'Постановка задачі', component: Lab2Task, id: `${LAB_ID.second}_task` },
          { name: 'Списки', component: Lab2List, id: `${LAB_ID.second}_lists` },
          { name: 'Ідентифікатори', component: Lab2Id, id: `${LAB_ID.second}_id` },
          { name: 'Відступи', component: Lab2Indent, id: `${LAB_ID.second}_indent` },
          { name: 'Плаваючі елементі', component: Lab2Float, id: `${LAB_ID.second}_float` },
          { name: 'Селекторы', component: Lab2Selectors, id: `${LAB_ID.second}_selectors` },
          { name: 'Селекторы тегу, класу', component: Lab2SelectorsTagClass, id: `${LAB_ID.second}_selectors_tag` },
          { name: 'Інші селектори', component: Lab2SelectorsOther, id: `${LAB_ID.second}_selectors_other` },
          { name: 'Групування селекторів', component: Lab2SelectorsGrouping, id: `${LAB_ID.second}_selectors_group` },
        ]
      },
      [LAB_ID.third]: {
        navigation: [
          { name: 'Тема та мета лаб. роботи', component: Lab3Task, id: `${LAB_ID.third}_task` },
          { name: 'Середовище розробки, шлях до файлів', component: Lab3IDE, id: `${LAB_ID.third}_ide` },
          { name: 'Скріншот головної сторінки сайту', component: Lab3SiteScreen, id: `${LAB_ID.third}_main-page-screen` },
          { name: 'HTML сайту', component: Lab3HTML, id: `${LAB_ID.third}_html` },
          { name: 'CSS сайту', component: Lab3CSS, id: `${LAB_ID.third}_css` },
          { name: 'Flexbox. Скрін, HTML, CSS', component: Lab3Flex, id: `${LAB_ID.third}_flexbox` },
          { name: <>Розмітка за доп. блочних елементів. <b>Корнієнко</b></>, component: Lab3KorniienkoFlex, id: `${LAB_ID.third}_flex_Kornienko` },
          { name: <>Сайт. <b>Корнієнко</b></>, component: Lab3KorniienkoSite, id: `${LAB_ID.third}_site_Kornienko` },
          { name: <>Розмітка за доп. блочних елементів. <b>Кудименко</b></>, component: Lab3KudymenkoFlex, id: `${LAB_ID.third}_flex_Kudymenko` },
          { name: <>Сайт. <b>Кудименко</b></>, component: Lab3KudymenkoSite, id: `${LAB_ID.third}_site_Kudymenko` },
          { name: <>Розмітка за доп. блочних елементів. <b>Хитрик</b></>, component: Lab3HytrykFlex, id: `${LAB_ID.third}_flex_Hytryk` },
          { name: <>Сайт. <b>Хитрик</b></>, component: Lab3HytrykSite, id: `${LAB_ID.third}_site_Hytryk` },
          { name: 'Висновки', component: Lab3Summary, id: `${LAB_ID.third}_summary` },
        ]
      },
      [LAB_ID.fourth]: {
        navigation: [
          { name: 'Тема та мета лаб. роботи', component: Lab4Task, id: `${LAB_ID.fourth}_task` },
          { name: 'Середовище розробки, шлях до файлів', component: Lab3IDE, id: `${LAB_ID.fourth}_ide` },
          { name: 'Скріншот головної сторінки сайту', component: Lab3SiteScreen, id: `${LAB_ID.fourth}_main-page-screen` },
          { name: 'HTML сайту', component: Lab3HTML, id: `${LAB_ID.fourth}_html` },
          { name: 'CSS сайту', component: Lab3CSS, id: `${LAB_ID.fourth}_css` },
          { name: 'Flexbox. Скрін, HTML, CSS', component: Lab3Flex, id: `${LAB_ID.fourth}_flexbox` },
          { name: <>Розмітка за доп. блочних елементів. <b>Корнієнко</b></>, component: Lab3KorniienkoFlex, id: `${LAB_ID.fourth}_flex_Kornienko` },
          { name: <>Сайт. <b>Корнієнко</b></>, component: Lab3KorniienkoSite, id: `${LAB_ID.fourth}_site_Kornienko` },
          { name: <>Розмітка за доп. блочних елементів. <b>Кудименко</b></>, component: Lab3KudymenkoFlex, id: `${LAB_ID.fourth}_flex_Kudymenko` },
          { name: <>Сайт. <b>Кудименко</b></>, component: Lab3KudymenkoSite, id: `${LAB_ID.fourth}_site_Kudymenko` },
          { name: <>Розмітка за доп. блочних елементів. <b>Хитрик</b></>, component: Lab3HytrykFlex, id: `${LAB_ID.fourth}_flex_Hytryk` },
          { name: <>Сайт. <b>Хитрик</b></>, component: Lab3HytrykSite, id: `${LAB_ID.fourth}_site_Hytryk` },
          { name: 'Висновки', component: Lab3Summary, id: `${LAB_ID.fourth}_summary` },
        ]
      },
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
        <Link to="/app">Go to App</Link>
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