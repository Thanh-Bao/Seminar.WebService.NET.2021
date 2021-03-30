import React, { Component } from 'react';
import { connect } from 'react-redux';
import GHNProvinces from './GHNProvinces'
import GHNDistricts from './GHNDistricts'
import GHNWards from './GHNWards';

import giaoHangNhanhCallAPI from './../../API/GiaoHangNhanhCallAPI'

class GNHMain extends Component {
    constructor(props) {
        super(props);
        this.state = {
            shift: []
        };
    }
    componentDidMount() {
        giaoHangNhanhCallAPI("PostOffices/workShift").then(response => {
            this.setState({
                shift: response.data.data
            })
        })
    }
    render() {
        let Shifts = this.state.shift.map(shift => {
            return <label key={shift.id} className="list-group-item">
                <input className="form-check-input me-1" type="checkbox" />
                {shift.title}
            </label>
        });
        return (
            <div>
                <div className="container mt-5">
                    <div className="row justify-content-center">
                        <h4>Chọn ca lấy hàng hôm nay</h4>
                        <div className="list-group">
                            {Shifts}
                        </div>
                    </div>
                </div>
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
export default connect(mapStateToProps)(GNHMain);