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
            shift: [],
            stations: [{
                locationCode: 0,
                address: "Hãy chọn đúng địa chỉ/ Hoặc không có bưu cục ở vị trí này",
                locationName: "Hãy chọn đúng địa chỉ/ Hoặc không có bưu cục ở vị trí này"
            }]
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

        let getStation = () => {
            let QueryParam = {
                district_id: this.props.DistrictID,
                ward_code: this.props.WardID
            };
            giaoHangNhanhCallAPI("PostOffices/station", "GET", QueryParam).then(response => {
                this.setState({
                    stations: response.data.data
                })
                console.log(this.state.stations)
            }).catch(
                () => {
                    this.setState({
                        stations: [{
                            locationCode: 0,
                            address: "Hãy chọn đúng địa chỉ/ Hoặc không có bưu cục ở vị trí này",
                            locationName: "Hãy chọn đúng địa chỉ/Hoặc không có bưu cục ở vị trí này"
                        }]
                    })
                }
            );
        }
        let Stations = this.state.stations.map(station => {
            return <tr key={station.locationCode}>
                <td>{station.locationCode}</td>
                <td>{station.locationName}</td>
                <td>{station.address}</td>
                <td><a target="_blank" href={"https://www.google.com/maps/place/"+station.latitude+","+station.longitude}>{station.latitude}<br></br> {station.longitude}</a></td>
            </tr>
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

                <div className="container mt-5">
                    <div className="row justify-content-center">
                        <div className="col-4">
                            <p>
                                <button onClick={() => { getStation() }} className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseViewStation" aria-expanded="false" aria-controls="collapseExample">
                                    Xem địa chỉ bưu cục
                                </button>
                            </p>
                        </div>
                        <div className="collapse" id="collapseViewStation">
                            <div className="card card-body">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">Mã Bưu cục</th>
                                            <th scope="col">Tên Bưu Cục</th>
                                            <th scope="col">Địa Chỉ</th>
                                            <th scope="col">Link Google map</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {Stations}
                                    </tbody>
                                </table>

                            </div>
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