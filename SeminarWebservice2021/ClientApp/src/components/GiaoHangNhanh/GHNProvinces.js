import React, { Component } from 'react';
import { connect } from 'react-redux';
import giaoHangNhanhCallAPI from './../../API/GiaoHangNhanhCallAPI';
class GHNProvinces extends Component {
    componentDidMount() {
        giaoHangNhanhCallAPI("Address/provinces", "GET").then(res => { this.props.dispatch({ type: "GET_PROVINCES", data: res.data.data }) })
    }
       
    render() {
        let saveCurrentProvinceToStore = (id) => {
             this.props.dispatch({ type: "SAVE_PROVINCE_ID", data: id })
        }
        let listProvinces = this.props.Provinces.map(province => {
            return <option key={province.ProvinceID} value={province.ProvinceID}>{province.ProvinceName}</option>
        });
        return (
            <div>
                <select onChange={(event)=>{saveCurrentProvinceToStore(event.target.value)}} className="form-select">
                    <option defaultValue>Chọn tỉnh</option>
                    {listProvinces}
                    {console.log("tinh"+this.props.abc)}
                </select>

            </div>
        );
    }
}
const mapStateToProps = state => ({
    Provinces: state.Provinces,
    abc : state.SelectedProvinceID
})
export default connect(mapStateToProps)(GHNProvinces);