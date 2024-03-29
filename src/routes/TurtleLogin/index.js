import React from 'react';
import { connect } from 'react-redux';
import Login from '@/components/Login';
import logo from '@/assets/logo.png';
import styles from './index.less';

class TurtleLogin extends React.PureComponent {
  constructor(props) {
    super(props);
    localStorage.clear();
  }

  handleLogin = values => {
    this.props.dispatch({ type: 'login/login', payload: { ...values } });
  }

  render() {
    return (
      <div className={styles.loginBox}>
        <div className={styles.top}>
          <img src={logo} alt='logo' />
          <h1>turtle admin</h1>
        </div>
        <div className={styles.logo}>
          <Login
            username={{
              id: 'username',
            }}
            password={{
              id: 'password',
            }}
            onLogin={this.handleLogin}
          />
        </div>
      </div>
    );
  }
}

export default connect()(TurtleLogin);