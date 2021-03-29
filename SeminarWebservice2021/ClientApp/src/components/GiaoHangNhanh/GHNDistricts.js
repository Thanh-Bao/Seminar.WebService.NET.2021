import React, { Component } from 'react';
import { connect } from 'react-redux';
import giaoHangNhanhCallAPI from './../../API/GiaoHangNhanhCallAPI';

class GHNDistricts extends Component {
   componentDidMount(){
    giaoHangNhanhCallAPI("Address/districts","GET",{province_id:202}).then(res=>{this.props.dispatch({type:"GET_DISTRICTS",data:res.data.data})})
   }
    render() {
        return ( 
            <div>
               {console.log(this.props.Districts)}
            </div>
        );
    }
}
const mapStateToProps = state => ({
    Districts: state.Districts
})

export default connect(mapStateToProps)(GHNDistricts);