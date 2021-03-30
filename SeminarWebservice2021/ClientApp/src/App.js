import React, { Component } from 'react';
import GNHMain from './components/GiaoHangNhanh/GNHMain';
import MoMo from './components/Momo';


class App extends Component {
    render() {
        return (
            <div>
                <GNHMain />
                <MoMo/>
            </div>
        );
    }
}
export default App;