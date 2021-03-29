import React, { Component } from 'react';
import { connect } from 'react-redux';
import giaoHangNhanhCallAPI from './../../API/GiaoHangNhanhCallAPI';

class GHNDistricts extends Component {
    render() {
        let saveCurrentDistrictToStore = (id) => {
            this.props.dispatch({ type: "SAVE_DISTRICT_ID", data: id });
            // giaoHangNhanhCallAPI("Address/wards", "GET", { province_id: id }).then(res => { this.props.dispatch({ type: "GET_DISTRICTS", data: res.data.data }) })
        }
         let listDistricts = this.props.Districts.map(district => {
            return <option key={district.DistrictID} value={district.DistrictID}>{district.DistrictName}</option>
        });
            return (
                <div>
                    <div>
                        <select onChange={(event) => {saveCurrentDistrictToStore(event.target.value) }} className="form-select">
                            <option defaultValue>Chọn huyện</option>
                            {listDistricts}
                        </select>
                    </div>
                </div>
            );
        }
    }

    const mapStateToProps = state => ({
        Districts: state.Districts
    })

    export default connect(mapStateToProps)(GHNDistricts);