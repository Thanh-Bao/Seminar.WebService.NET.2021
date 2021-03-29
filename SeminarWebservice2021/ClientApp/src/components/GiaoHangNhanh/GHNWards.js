import React, { Component } from 'react';
import { connect } from 'react-redux';
import giaoHangNhanhCallAPI from './../../API/GiaoHangNhanhCallAPI';

class GHNWards extends Component {
   componentDidMount(){
    giaoHangNhanhCallAPI("Address/wards","GET",{district_id:1566}).then(res=>{this.props.dispatch({type:"GET_WARDS",data:res.data.data})})
   }
    render() {
        return ( 
            <div>
               {console.log(this.props.Wards)}
            </div>
        );
    }
}
const mapStateToProps = state => ({
    Wards: state.Wards
})

export default connect(mapStateToProps)(GHNWards);