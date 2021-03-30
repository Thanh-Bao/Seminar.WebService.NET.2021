import React, { Component } from 'react';
import { connect } from 'react-redux';
import GHNProvinces from './GHNProvinces'
import GHNDistricts from './GHNDistricts'
import GHNWards from './GHNWards';

import giaoHangNhanhCallAPI from './../../API/GiaoHangNhanhCallAPI';
import GHNFromAddress from './GHNFromAddress';
import GHNToAddress from './GHNToAddress';

class GNHMain extends Component {
    constructor(props) {
        super(props);
        this.state = {
            shift: [],
            stations: [{
                locationCode: 0,
                address: "Hãy chọn đúng địa chỉ/ Hoặc không có bưu cục ở vị trí này",
                locationName: "Hãy chọn đúng địa chỉ/ Hoặc không có bưu cục ở vị trí này"
            }],
            Fee: 0
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
                <td><a rel="noopener noreferrer" href={"https://www.google.com/maps/place/" + station.latitude + "," + station.longitude}>{station.latitude}<br></br> {station.longitude}</a></td>
            </tr>
        });


        let GetFee = () => {
            // let body =
            // {
            //     from_district_id: 1454,
            //     service_id: 53320,
            //     to_district_id: 1452,
            //     to_ward_code: 21012,
            //     height: 50,
            //     length: 20,
            //     weight: 200,
            //     width: 20,
            //     insurance_fee: 10000
            // }
            // giaoHangNhanhCallAPI("Fee", "GET",{},body ).then(response => {
            //    console.log(response)
            // });
        }



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
                    <div className="row justify-content-center text-center">
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

                <div className="container mt-5">
                    <div className="row justify-content-center text-center">
                        <h3>Tính phí vận chuyển</h3>
                        <GHNFromAddress />
                    </div>
                </div>

                <div className="container">
                    <div className="row justify-content-center text-center">
                        <GHNToAddress />
                    </div>
                </div>


                <div className="container my-5">
                    <div className="row justify-content-center text-center">
                        <div className="col-4">
                            <p>
                                <button onClick={() => { GetFee() }} className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseViewStation" aria-expanded="false" aria-controls="collapseExample">
                                    Xem báo giá phí vận chuyển
                                </button>
                            </p>
                        </div>
                        <div className="collapse" id="collapseViewStation">

                            <div className="row justify-content-center text-center">
                                <div className="col-4">
                                    <div className="row">
                                        <h6>Phí vận chuyển là :</h6> <span className="badge bg-warning text-dark"><h2>{this.state.Fee} VNĐ</h2></span> <h6>(đã bao gồm VAT 10%)</h6>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>


                {console.log("from district")}
                {console.log(this.props.from)}
                {console.log("to district")}
                {console.log(this.props.to1)}
                {console.log("to ward")}
                {console.log(this.props.to2)}
            </div>

        );
    }
}
const mapStateToProps = state => ({
    ProvinceID: state.SelectedProvinceID,
    DistrictID: state.SelectedDistrictID,
    WardID: state.SelectedWardID,

    to1: state.ToSelectedDistrictID,
    to2: state.ToSelectedWardID,
    from: state.FromSelectedDistrictID
})
export default connect(mapStateToProps)(GNHMain);