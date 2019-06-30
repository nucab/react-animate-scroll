import React from 'react';

import ReactAnimateScroll from 'react-animate-scroll';

function App() {
  return (
    <div class="container">
      <article className="media">
        <ReactAnimateScroll animateClasses="slideInLeft faster">
          <figure className="media-left">
            <p className="image is-64x64">
              <img
                src="https://bulma.io/images/placeholders/128x128.png"
                alt=""
              />
            </p>
          </figure>
        </ReactAnimateScroll>
        <div className="media-content">
          <ReactAnimateScroll animateClasses="zoomIn faster">
            <div className="content">
              <p>
                <strong>John Smith</strong> <small>@johnsmith</small>{' '}
                <small>31m</small>
                <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                ornare magna eros, eu pellentesque tortor vestibulum ut.
                Maecenas non massa sem. Etiam finibus odio quis feugiat
                facilisis.
              </p>
            </div>
          </ReactAnimateScroll>
          <nav className="level is-mobile">
            <div className="level-left">
              <a className="level-item">
                <span className="icon is-small">
                  <i className="fas fa-reply" />
                </span>
              </a>
              <a className="level-item">
                <span className="icon is-small">
                  <i className="fas fa-retweet" />
                </span>
              </a>
              <a className="level-item">
                <span className="icon is-small">
                  <i className="fas fa-heart" />
                </span>
              </a>
            </div>
          </nav>
          <article class="media">
            <ReactAnimateScroll animateClasses="slideInLeft faster">
              <figure class="media-left">
                <p class="image is-48x48">
                  <img
                    src="https://bulma.io/images/placeholders/96x96.png"
                    alt=""
                  />
                </p>
              </figure>
            </ReactAnimateScroll>
            <ReactAnimateScroll animateClasses="zoomIn faster">
              <div class="media-content">
                <div class="content">
                  <p>
                    <strong>Sean Brown</strong>
                    <br />
                    Donec sollicitudin urna eget eros malesuada sagittis.
                    Pellentesque habitant morbi tristique senectus et netus et
                    malesuada fames ac turpis egestas. Aliquam blandit nisl a
                    nulla sagittis, a lobortis leo feugiat.
                    <br />
                    <small>
                      <a>Like</a> · <a>Reply</a> · 2 hrs
                    </small>
                  </p>
                </div>
              </div>
            </ReactAnimateScroll>
          </article>
          <article class="media">
            <ReactAnimateScroll animateClasses="slideInLeft faster">
              <figure class="media-left">
                <p class="image is-48x48">
                  <img
                    src="https://bulma.io/images/placeholders/96x96.png"
                    alt=""
                  />
                </p>
              </figure>
            </ReactAnimateScroll>
            <ReactAnimateScroll animateClasses="zoomIn faster">
              <div class="media-content">
                <div class="content">
                  <p>
                    <strong>Kayli Eunice </strong>
                    <br />
                    Sed convallis scelerisque mauris, non pulvinar nunc mattis
                    vel. Maecenas varius felis sit amet magna vestibulum euismod
                    malesuada cursus libero. Vestibulum ante ipsum primis in
                    faucibus orci luctus et ultrices posuere cubilia Curae;
                    Phasellus lacinia non nisl id feugiat.
                    <br />
                    <small>
                      <a>Like</a> · <a>Reply</a> · 2 hrs
                    </small>
                  </p>
                </div>
              </div>
            </ReactAnimateScroll>
          </article>
        </div>
      </article>
    </div>
  );
}

export default App;
