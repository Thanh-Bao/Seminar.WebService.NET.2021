import React, { Component } from 'react';
import { connect } from 'react-redux';
import giaoHangNhanhCallAPI from './../../API/GiaoHangNhanhCallAPI';
class GHNToAddress extends Component {


    render() {
        let GetDistricts = (id) => {
            if (id > 0) {
                giaoHangNhanhCallAPI("Address/districts", "GET", { province_id: id }).then(res => { this.props.dispatch({ type: "GET_TO_DISTRICTS", data: res.data.data })})           
            }
        }
        let saveCurrentDistrictToStore = (id) => {
            this.props.dispatch({ type: "SAVE_TO_DISTRICT_ID", data: id });
            if(id>0){
                giaoHangNhanhCallAPI("Address/wards", "GET", { district_id: id }).then(res => { this.props.dispatch({ type: "GET_TO_WARDS", data: res.data.data }) })
               }
        }
        let saveCurrentWardToStore = (id) => {
            this.props.dispatch({ type: "SAVE_TO_WARD_ID", data: id });
        }
        let listProvinces = this.props.Provinces.map(province => {
            return <option key={province.ProvinceID} value={province.ProvinceID}>{province.ProvinceName}</option>
        });
        let listDistricts = this.props.ToDistricts.map(district => {
            return <option key={district.DistrictID} value={district.DistrictID}>{district.DistrictName}</option>
        });
        let listWards = this.props.ToWards.map(ward => {
            return <option key={ward.WardCode} value={ward.WardCode}>{ward.WardName}</option>
        });
        return (
            <div>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-sm">
                            <h6>Vận chuyển đến :</h6>
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
                        <div className="col-sm">
                            <select onChange={(event) => { saveCurrentWardToStore(event.target.value) }} className="form-select">
                                <option defaultValue>Chọn xã/ phường</option>
                                {listWards}
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
    ToDistricts: state.ToDistricts,
    ToWards : state.ToWards
})
export default connect(mapStateToProps)(GHNToAddress);