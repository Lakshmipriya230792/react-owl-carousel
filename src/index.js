import React from "react";
import ReactDOM from "react-dom";
import OwlCarousel from "react-owl-carousel";


class App extends React.Component {
  render() {
    return (
      <OwlCarousel className="owl-theme" loop margin={10} nav>
        <div class="item">
          <img src="1.png" />
        </div>
        <div class="item">
          <img src="2.png" />
        </div>
        <div class="item">
          <img src="3.png" />
        </div>
        <div class="item">
          <img src="4.png" />
        </div>
        <div class="item">
          <img src="5.png" />
        </div>
      </OwlCarousel>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
