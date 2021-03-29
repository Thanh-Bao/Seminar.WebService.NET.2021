import React, { Component } from 'react';
import { connect } from 'react-redux';
import GHNProvinces from './GHNProvinces'
import GHNDistricts from './GHNDistricts'
import GHNWards from './GHNWards';

class GNHSelectedAddress extends Component {

    render() {
        return (
            <div>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-sm">
                            <GHNProvinces />
                        </div>
                        <div className="col-sm">
                            <GHNDistricts />
                        </div>
                        <div className="col-sm">
                            <GHNWards />
                        </div>
                    </div>
                </div>
                {console.log(this.props.ProvinceID)}
                {console.log(this.props.DistrictID)}
                {console.log(this.props.WardID)}
            </div>

        );
    }
}
const mapStateToProps = state => ({
    ProvinceID: state.SelectedProvinceID,
    DistrictID: state.SelectedDistrictID,
    WardID: state.SelectedWardID
})
export default connect(mapStateToProps)(GNHSelectedAddress);