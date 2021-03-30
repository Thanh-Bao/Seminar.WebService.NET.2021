import React, { Component } from 'react';
import MoMoCallAPI from './../API/MoMoCallAPI';
import { connect } from 'react-redux';

class MoMo extends Component {

    componentDidMount() {
        this.loadData();
    }

    loadData = () => {
        MoMoCallAPI("Momo").then(res => {
            function unixTimeToDate(timeStamp) {
                const milliseconds = timeStamp * 1000 // 1575909015000
                const dateObject = new Date(milliseconds)
                const humanDateFormat = dateObject.toLocaleString() //2019-12-9 10:30:15
                return humanDateFormat;
            }
            let arr = []
            let result = res.data.transactions;
            for (let x in result) {
                let transaction = result[x];
                transaction.time = unixTimeToDate(transaction.time);
                arr.push(transaction)
            }
            this.props.dispatch({ type: "GET_MOMOS", data: arr })
        })
    }


    render() {

        let listMoMo = this.props.MoMos.map(MoMo => {
            return <tr key={MoMo.TransactionId}>
                <td><span className="badge bg-warning text-dark">{MoMo.partner}</span></td>
                <td><span className="badge bg-success">{MoMo.partnerId}</span></td>
                <td><span className="badge bg-primary">{MoMo.amount}</span> VNĐ</td>
                <td><span className="badge bg-light text-dark">{MoMo.content}</span></td>
                <td><span className={(MoMo.type > 0) ? "badge bg-success" : "badge bg-danger"}>{(MoMo.type > 0) ? "nhận" : "chuyển"}</span></td>
                <td><span className="badge bg-info text-dark">{MoMo.time}</span></td>
            </tr>
        });
        return (
            <div>
                <div className="row text-center">
                <h2>Thanh Toán bằng cách chuyển số tiền bất kỳ vào SĐT </h2>
                <h2><span className="badge bg-success">0943417917</span> hoặc quét mã QR bên dưới</h2>
                </div>
                <div style={{ width: 300 }} className="container justify-content-center text-center">
                    <img src="/momoQR.jpg" className="img-fluid" alt="..." />
                </div>

                <div className="container">
                    <button onClick={() => { this.loadData() }} type="button" className="btn btn-primary my-2">Cập nhật lại danh sách</button>
                    <table className="table">

                        <thead>
                            <tr>
                                <th scope="col">Tên</th>
                                <th scope="col">Số điện thoại</th>
                                <th scope="col">Số tiền</th>
                                <th scope="col">Lời nhắn</th>
                                <th scope="col">Hình thức</th>
                                <th scope="col">Thời gian</th>
                            </tr>
                        </thead>
                        <tbody>
                            {listMoMo}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    MoMos: state.MoMos
});
export default connect(mapStateToProps)(MoMo);