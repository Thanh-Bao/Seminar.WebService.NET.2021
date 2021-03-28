import React, { Component } from 'react';
import { connect } from 'react-redux';
import giaoHangNhanhCallAPI from './../API/GiaoHangNhanhCallAPI';

class GiaoHangNhanh extends Component {
    render() {
        return ( 
            <div>
                {/* <h1 onClick={()=>{giaoHangNhanhCallAPI("Address/ward","GET",{district_id:1566}).then(res=>{this.props.dispatch({type:"GET_DISTRICTS",data:res.data.data})})}}>xxx</h1> */}
               {console.log(this.props.Districts)}
            </div>
        );
    }
}
const mapStateToProps = state => ({
    Districts: state.Districts
})

export default connect(mapStateToProps)(GiaoHangNhanh);