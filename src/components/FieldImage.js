import React from 'react';
import { connect } from 'react-redux';

class FieldImage extends React.Component {

  renderField = () => {
    let field = this.props.bases;
    if(field[1] && field[2] && field[3]) {
      return <img style={{height: "30%", width: "80%"}} src={require('../img/bases_loaded.png')} alt="field"/>;
    } else if(field[1] && field[2] && !field[3]) {
      return <img style={{height: "30%", width: "80%"}} src={require('../img/on_first_second.png')} alt="field"/>;
    } else if(field[1] && !field[2] && !field[3]) {
      return <img style={{height: "30%", width: "80%"}} src={require('../img/on_first.png')} alt="field"/>;
    } else if(!field[1] && field[2] && !field[3]) {
      return <img style={{height: "30%", width: "80%"}} src={require('../img/on_second.png')} alt="field"/>;
    } else if(!field[1] && field[2] && field[3]) {
      return <img style={{height: "30%", width: "80%"}} src={require('../img/on_second_third.png')} alt="field"/>;
    } else if(!field[1] && !field[2] && field[3]) {
      return <img style={{height: "30%", width: "80%"}} src={require('../img/on_third.png')} alt="field"/>;
    } else if(field[1] && !field[2] && field[3]) {
      return <img style={{height: "30%", width: "80%"}} src={require('../img/on_first_third.png')} alt="field"/>;
    }
    return <img style={{height: "30%", width: "80%"}} src={require('../img/empty_bases.png')} alt="field"/>;;
  }

  render() {
    return <div style={{display: "flex", justifyContent: "center"}}>{this.renderField()}</div>
  }
}

const mapStateToProps = state => {
  return {bases: state.onBase}
}

export default connect(mapStateToProps)(FieldImage);
