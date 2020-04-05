import React, {Component} from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import SingleImageUpload from '../src/components/SingleImageUpload'
class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-header">
                Single Image Upload Preview
              </div>
              <div className="card-body">
                <SingleImageUpload />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
