import React, { Component } from 'react';
import { connect } from 'react-redux';
import giaoHangNhanhCallAPI from './../../API/GiaoHangNhanhCallAPI';
import GHNProvinces from './GHNProvinces'

class GNHSelectedAddress extends Component {

    render() {
        return (
            <div>
                <GHNProvinces/>
            </div>
        );
    }
}
const mapStateToProps = state => ({
    AddressSelected: state.AddressSelected
})
export default connect(mapStateToProps)(GNHSelectedAddress);