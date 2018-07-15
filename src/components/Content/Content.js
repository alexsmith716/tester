import React from 'react';

const Content = () => {

  const styles = require('./scss/Content.scss');
  const duck = require('./img/duck.jpg');
  const android = require('./img/android.svg');

  return (

    <div>

        <header className={`super-special-global-color-orangered ${styles.masthead}`}>

          <div className="container">

            <h1>Basic App H1</h1>

            <h2 className={styles.colorLavender}>Basic App H2</h2>

            <div className={styles.blurbElipsis}>... join the conversation.</div>

            <div>

              <a className={`btn btn-primary btn-lg ${styles.colorTurquoise}`} role="button" href="#">Sign Up Now »</a>

            </div>

          </div>

        </header>



        <div className="container">

          <div className="row my-4">

            <div className="col-lg-4 mb-4">
              <div className="card h-100">
                <h4 className="card-header">Card Title 1</h4>
                <div className="card-body">
                  <p className="card-text">Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.</p>
                </div>
                <div className="card-footer">
                  <a href="#" className="btn btn-secondary">View details »</a>
                </div>
              </div>
            </div>

            <div className={`col-lg-4 mb-4 ${styles.colorPurple}`}>
              <div className="card h-100">
                <h4 className="card-header">Card Title 2</h4>
                <div className="card-body">
                  <p className="card-text">Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.</p>
                </div>
                <div className="card-footer">
                  <a href="#" className="btn btn-secondary">View details »</a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 mb-4">
              <div className="card h-100">
                <h4 className="card-header">Card Title 3</h4>
                <div className="card-body">
                  <p className={`card-text ${styles.colorSpringgreen}`}>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper.Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Quos quisquam, error quod sed cumque, odio distinctio velit nostrum temporibus necessitatibus</p>
                </div>
                <div className="card-footer">
                  <a href="#" className="btn btn-secondary">View details »</a>
                </div>
              </div>
            </div>

          </div>

        </div>

        <div className="row my-4 d-flex justify-content-center">
          <p><img src={duck} /></p>
          <p><img src={android} /></p>
        </div>

    </div>

  )
};

export default Content;
