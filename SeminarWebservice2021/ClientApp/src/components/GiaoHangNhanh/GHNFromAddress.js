import React, { Component } from 'react';
import { connect } from 'react-redux';
import giaoHangNhanhCallAPI from './../../API/GiaoHangNhanhCallAPI';
class GHNFromAddress extends Component {


    render() {
        let GetDistricts = (id) => {
            if (id > 0) {
                giaoHangNhanhCallAPI("Address/districts", "GET", { province_id: id }).then(res => { this.props.dispatch({ type: "GET_FROM_DISTRICTS", data: res.data.data })})
           
            }
        }
        let saveCurrentDistrictToStore = (id) => {
            this.props.dispatch({ type: "SAVE_FROM_DISTRICT_ID", data: id });
        }
        let listProvinces = this.props.Provinces.map(province => {
            return <option key={province.ProvinceID} value={province.ProvinceID}>{province.ProvinceName}</option>
        });
        let listDistricts = this.props.FromDistricts.map(district => {
            return <option key={district.DistrictID} value={district.DistrictID}>{district.DistrictName}</option>
        });
        return (
            <div>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-sm">
                            <h6>Vận chuyển từ :</h6>
                        </div>
                        <div className="col-sm">
                            <select onChange={(event) => { GetDistricts(event.target.value) }} className="form-select">
                                <option defaultValue>Chọn tỉnh/TP</option>
                                {listProvinces}
                            </select>
                        </div>
                        <div className="col-sm">
                            <select onChange={(event) => { saveCurrentDistrictToStore(event.target.value) }} className="form-select">
                                <option defaultValue>Chọn Quận/ huyện</option>
                                {listDistricts}
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = state => ({
    Provinces: state.Provinces,
    FromDistricts: state.FromDistricts
})
export default connect(mapStateToProps)(GHNFromAddress);