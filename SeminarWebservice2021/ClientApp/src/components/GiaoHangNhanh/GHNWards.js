import React, { Component } from 'react';
import { connect } from 'react-redux';

class GHNWards extends Component {
    render() {
        let saveCurrentWardToStore = (id) => {
            this.props.dispatch({ type: "SAVE_WARD_ID", data: id });
        }
        let listWards = this.props.Wards.map(ward => {
            return <option key={ward.WardCode} value={ward.WardCode}>{ward.WardName}</option>
        });
        return (
            <div>
                <div>
                    <select onChange={(event) => { saveCurrentWardToStore(event.target.value) }} className="form-select">
                        <option defaultValue>Chọn phường/xã</option>
                        {listWards}
                    </select>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    Wards: state.Wards
})

export default connect(mapStateToProps)(GHNWards);