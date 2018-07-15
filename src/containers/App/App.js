import React, { Component } from 'react';

import Content from '../../components/Content/Content';

import '../../assets/global.scss';

export default class App extends Component {

  render () {

    const styles = require('./scss/App.scss');
    const duck = require('./img/duck.jpg');

    return (
      <div className={styles.app}>

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="mainNav">
          <a className={`navbar-brand ${styles.brand}`} href="#">Basic App</a>
          <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-toggle="modal" data-target="#exampleModal">
                  <span className="fa fa-fw fa-sign-in"></span>Modal</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Link Somewhere</a>

              </li>
            </ul>
          </div>
        </nav>


        <div className={styles.appContent}>
          <Content />
        </div>


        <footer className={`py-5 ${styles.footer}`}>
          <div className="container">
            <p className={`m-0 text-center ${styles.colorCrimson}`}>Copyright &copy; 2018 · Footer</p>
          </div>
        </footer>


        <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">

              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Modal Test</h5>
                <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
              </div>

              <div className="modal-body">

                <div className="d-flex justify-content-center">
                  <p className={styles.colorLightblue}>This is the modal body.</p>

                  <p><img src={duck} /></p>
                </div>

              </div>

              <div className="modal-footer">
                <p className={styles.colorOlive}>This is the modal footer.</p>
              </div>

            </div>
          </div>
        </div>
      </div>
    )
  };
};
