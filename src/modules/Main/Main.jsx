import * as React from 'react';
import { withStyles } from '@material-ui/core';

import styles from './Main.styles';

class Main extends React.Component {
  get users() {
    return Array(10).fill('').map((x, i) => ({
      name: `Howard Web ${i}`,
      country: `USA`,
      contact: '+1 389 567 56 33',
      model: `A ${i}`
    }));
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <header className={classes.header}>
          <h1>Denzel</h1>
          <img className={classes.logo} src="https://www.freepnglogos.com/uploads/cleveland-auto-show-car-logo-png-25.png" alt="logo" />
          <a style={{ display: 'block' }} href="https://www.mercedes-benz.ua/" target="_blank" rel="noopener noreferrer">Feel free to join us!</a>
          <marquee behavior="scroll" direction="left" style={{ position: 'absolute', left: 0, top: 0, }}>Denzel</marquee>
        </header>
        <form>
          <label htmlFor="fname">First name:</label><br />
          <input type="text" id="fname" name="fname" /><br />
          <label htmlFor="lname">Last name:</label><br />
          <input type="text" id="lname" name="lname" />
        </form>
        <br />
        <table>
          <tbody>
            <tr>
              <th>Name</th>
              <th>Contact</th>
              <th>Country</th>
              <th>Model</th>
            </tr>
            {this.users.map((user) => (
              <tr key={user.name}>
                <td>{user.name}</td>
                <td>{user.contact}</td>
                <td>{user.country}</td>
                <td>{user.model}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <ul style={{ marginLeft: 12 }}>
          <li>Tesla</li>
          <li>Toyota
            <ul>
              <li>Jaguar</li>
              <li>Mercedes</li>
            </ul>
          </li>
        </ul>
      </div>
    );
  }
}

export default withStyles(styles)(Main);
