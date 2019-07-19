import React from 'react';
import { connect } from 'react-redux';
import empty from '../img/empty_bases.png';
import firstSecond from '../img/on_first_second.png';
import firstThird from '../img/on_first_third.png';
import secondThird from '../img/on_second_third.png';


class FieldImage extends React.Component {

  renderField = () => {
    let field = this.props.bases;
    if(field[1] && field[2] && field[3]) {
      return <img style={{height: "30%", width: "80%"}} src={require('../img/bases_loaded.png')} />;
    } else if(field[1] && field[2] && !field[3]) {
      return <img style={{height: "30%", width: "80%"}} src={require('../img/on_first_second.png')} />;
    } else if(field[1] && !field[2] && !field[3]) {
      return <img style={{height: "30%", width: "80%"}} src={require('../img/on_first.png')} />;
    } else if(!field[1] && field[2] && !field[3]) {
      return <img style={{height: "30%", width: "80%"}} src={require('../img/on_second.png')} />;
    } else if(!field[1] && field[2] && field[3]) {
      return <img style={{height: "30%", width: "80%"}} src={require('../img/on_second_third.png')} />;
    } else if(!field[1] && !field[2] && field[3]) {
      return <img style={{height: "30%", width: "80%"}} src={require('../img/on_third.png')} />;
    } else if(field[1] && !field[2] && field[3]) {
      return <img style={{height: "30%", width: "80%"}} src={require('../img/on_first_third.png')} />;
    }
    return <img style={{height: "30%", width: "80%"}} src={require('../img/empty_bases.png')} />;;
  }

  render() {
    return <div style={{display: "flex", justifyContent: "center"}}>{this.renderField()}</div>
  }
}

const mapStateToProps = state => {
  return {bases: state.onBase}
}

export default connect(mapStateToProps)(FieldImage);
