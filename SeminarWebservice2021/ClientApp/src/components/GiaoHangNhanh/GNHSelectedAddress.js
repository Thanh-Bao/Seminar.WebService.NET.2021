import React, { Component } from 'react';
import { connect } from 'react-redux';
import GHNProvinces from './GHNProvinces'
import GHNDistricts from './GHNDistricts'

class GNHSelectedAddress extends Component {

    render() {
        return (
            <div>
                <GHNProvinces/>
                <GHNDistricts/>
            </div>
        );
    }
}
const mapStateToProps = state => ({
    AddressSelected: state.AddressSelected
})
export default connect(mapStateToProps)(GNHSelectedAddress);