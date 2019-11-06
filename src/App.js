import React, { Component } from 'react';
import img from './Icon.png';
import '../node_modules/antd/dist/antd.css';
import './App.css';
import './Responsiv.css';
import { Drawer, Button, Checkbox , Icon , Progress , Menu ,  Dropdown , message , Modal , Radio } from 'antd';
import Snackbar from './snackbar';


class App extends Component {
  state = { visible: false , percent: 2 , number : 1 , loading: false , visiblemodal: false};

  snackbarRef = React.createRef();

   handleButtonClick(e) {
    message.info('Click on left button.');
    console.log('click left button', e);
  }
  
   handleMenuClick(e) {
    message.info('Click on menu item.');
    console.log('click', e);
  }

  _showSnackbarHandler = () => {
    this.snackbarRef.current.openSnackBar('Ayo coba! Kamu belum jawab soal.');
  }

  doublepressincrease = () => {
    this._showSnackbarHandler();
    this.increase();
    this.increasenumber();
  }

  doublepressdecline = () =>{
    this.declinenumber();
    this.decline();
  }

  increase = () => {
    let percent = (this.state.percent + 2);
    if(percent > 100) {
      percent = 100;
    }
    this.setState({ percent });
  };

  increasenumber = () => {
    let number = (this.state.number + 1);
    if(number >= 50){
      number = 50;
    }
    this.setState({ number });
  };

  decline = () => {
    let percent = (this.state.percent - 2);
    if (percent < 1) {
      percent = 2;
    }
    this.setState({ percent });
  };

  declinenumber = () => {
    let number = (this.state.number - 1);
    if (number < 1) {
      number = 1;
    }
    this.setState({ number });
  };

  onChange(ragu) {
    console.log(`checked = ${ragu.target.checked}`);
  }

  onChangeOption(option) {
    console.log(`radio checked:${option.target.value}`);
  }

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  showModal = () => {
    this.setState({
      visiblemodal: true,
    });
  };

  handleOk = () => {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false, visiblemodal: false });
    }, 3000);
  };

  handleCancel = () => {
    this.setState({ visiblemodal: false });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  
  render() {
    const menu = (
      <Menu onClick={this.handleMenuClick}>
        <Menu.Item key="1">
          <div className="flex align-center">
            <i className="kejar-icon-v2 icon-Eror font-18 icn-lapor"></i>
            <div>Laporkan Soal</div>        
          </div>
        </Menu.Item>
      </Menu>
    );
    const { visiblemodal, loading } = this.state;
    return (
      <div className="App">
        <div className="container-full-exam">
          <div className="Headexam">
            <div className="Body-headexam flex flex-between">
              <img className="Headlogo" src={img} alt="Logo Kejar" />
              <div className="lato-medium font-15">
                Latihan TO
              </div>
              <Button className="btn-keluarexam flex color-grey" onClick={this.showModal}>
                <span className="duration-exam color-navy lato-medium font-13">00:10:80</span><i className="kejar-icon-v2 icon-Log-Out font-15 color-grey"></i><span id="text-logout">Keluar</span>
              </Button>
              
            </div>
            <Modal visible={visiblemodal} title="Keluar" onOk={this.handleOk} onCancel={this.handleCancel} mask = {true}
            footer={[
            <Button key="submit" loading={loading} onClick={this.handleOk}>
              Ya
            </Button>,
            <Button key="back" onClick={this.handleCancel}>
              Tidak
            </Button>,
          ]}
        >
          <p className="font-17 lato-medium color-grey">Apakah kamu yakin ingin keluar? Jika keluar, jawaban yang kamu pilih tidak tersimpan dan kamu harus mengulang kembali.</p>

        </Modal>
          </div>
          <div className="Contentexam">
            <div>
              <Drawer
                title="DAFTAR SOAL"
                placement="right"
                onClose={this.onClose}
                visible={this.state.visible}
                width={352}
                closable={true}
              >
                <div className="flex-direction">
                  <div className="body-drawersoal flex">
                    <div className="drawer-daftarsoal font-17 color-grey lato-medium">1</div>
                    <div className="drawer-daftarsoal font-17 color-grey lato-medium">2</div>
                    <div className="drawer-daftarsoal font-17 color-grey lato-medium">3</div>
                    <div className="drawer-daftarsoal font-17 color-grey lato-medium">4</div>
                    <div className="drawer-daftarsoal font-17 color-grey lato-medium">5</div>
                  </div>
                  <div className="body-drawersoal flex">
                    <div className="drawer-daftarsoal font-17 color-grey lato-medium">6</div>
                    <div className="drawer-daftarsoal font-17 color-grey lato-medium">7</div>
                    <div className="drawer-daftarsoal font-17 color-grey lato-medium">8</div>
                    <div className="drawer-daftarsoal font-17 color-grey lato-medium">9</div>
                    <div className="drawer-daftarsoal font-17 color-grey lato-medium">10</div>
                  </div>
                  <div className="body-drawersoal flex">
                    <div className="drawer-daftarsoal font-17 color-grey lato-medium">11</div>
                    <div className="drawer-daftarsoal font-17 color-grey lato-medium">12</div>
                    <div className="drawer-daftarsoal font-17 color-grey lato-medium">13</div>
                    <div className="drawer-daftarsoal font-17 color-grey lato-medium">14</div>
                    <div className="drawer-daftarsoal font-17 color-grey lato-medium">15</div>
                  </div>
                  <div className="body-drawersoal flex">
                    <div className="drawer-daftarsoal font-17 color-grey lato-medium">16</div>
                    <div className="drawer-daftarsoal font-17 color-grey lato-medium">17</div>
                    <div className="drawer-daftarsoal font-17 color-grey lato-medium">18</div>
                    <div className="drawer-daftarsoal font-17 color-grey lato-medium">19</div>
                    <div className="drawer-daftarsoal font-17 color-grey lato-medium">20</div>
                  </div>
                  <div className="body-drawersoal flex">
                    <div className="drawer-daftarsoal font-17 color-grey lato-medium">21</div>
                    <div className="drawer-daftarsoal font-17 color-grey lato-medium">22</div>
                    <div className="drawer-daftarsoal font-17 color-grey lato-medium">23</div>
                    <div className="drawer-daftarsoal font-17 color-grey lato-medium">24</div>
                    <div className="drawer-daftarsoal font-17 color-grey lato-medium">25</div>
                  </div>
                  <div className="body-drawersoal flex">
                    <div className="drawer-daftarsoal font-17 color-grey lato-medium">26</div>
                    <div className="drawer-daftarsoal font-17 color-grey lato-medium">27</div>
                    <div className="drawer-daftarsoal font-17 color-grey lato-medium">28</div>
                    <div className="drawer-daftarsoal font-17 color-grey lato-medium">29</div>
                    <div className="drawer-daftarsoal font-17 color-grey lato-medium">30</div>
                  </div>
                </div>
              </Drawer>
            </div>
            <div className="Container-soalexam">
              <div className="Ket-soalexam flex-column">
                <div className="font-15 color-grey1">Materi Pokok</div>
                <div className="font-19 color-grey">Unsur-Unsur Paragraf</div>
                <div className="flex align-center"><i className="kejar-icon-v2 icon-Materi-Pokok font-22 color-grey icn-materi"></i>Materi Pokok</div>
                <div className="flex align-center"><i className="kejar-icon-v2 icon-Mapel font-22 color-grey icn-mapel"></i>Bahasa Indonesia</div>
              </div>
              <hr color="#EBEBEB"/>
              <div className="Range-soalexam flex">
                <div><span className="font-17 color-navy">Soal {this.state.number}</span> <span className="font-17 color-grey1">dari 50</span></div>
                <Dropdown overlay={menu}>
                  <Button><i className="kejar-icon-v2 icon-More font-22 color-grey"></i></Button>
                </Dropdown>
              </div>
              <div>
                <Progress percent={this.state.percent} strokeColor={'#3CB5B5'} size="small" />
              </div>
              <div className="body-examsoal">
                <p className="font-15 lato-medium">Sarah, sorry, I have to cancel an appointment. I can't accompany you to the computer exhibition because I've diarrhea. We can go there tomorrow. The exhibition will last for seven days, won't it?  Della

Why does Della cancel her appointment?</p>

                <Radio.Group className="flex-column" onChange={this.onChangeOption} defaultValue="a">
                  <Radio.Button className="bodysoal-option" value="A"><div className="flex align-center"><i className="kejar-icon-v2 icon-A-Default font-22 color-white"></i><span className="text-option-jawaban"> She is busy.</span></div></Radio.Button>
                  <Radio.Button className="bodysoal-option" value="B"><div className="flex align-center"><i className="kejar-icon-v2 icon-B-Default font-22 color-white"></i><span className="text-option-jawaban"> She has no free time.</span></div></Radio.Button>
                  <Radio.Button className="bodysoal-option" value="C"><div className="flex align-center"><i className="kejar-icon-v2 icon-C-Default font-22 color-white"></i><span className="text-option-jawaban"> She has something to do. She has something to do. She has something to do. She has something to do. She has something to do. She has something to do. She has something to do.</span></div></Radio.Button>
                  <Radio.Button className="bodysoal-option" value="D"><div className="flex align-center"><i className="kejar-icon-v2 icon-D-Default font-22 color-white"></i><span className="text-option-jawaban"> Her mother is sick.</span></div></Radio.Button>
                  <Radio.Button className="bodysoal-option" value="E"><div className="flex align-center"><i className="kejar-icon-v2 icon-E-Default font-22 color-white"></i><span className="text-option-jawaban"> She is sick.</span></div></Radio.Button>
                </Radio.Group>

                {/* <div className="bodysoal-option flex align-center">
                  <i className="kejar-icon-v2 icon-A-Default font-22 color-white"></i>
                  <div className="text-option-jawaban font-15">She is busy.</div>
                </div>
                <div className="bodysoal-option flex align-center">
                  <i className="kejar-icon-v2 icon-B-Default font-22 color-white"></i>
                  <div className="text-option-jawaban font-15">She has no free time.</div>
                </div>
                <div className="bodysoal-option flex align-center">
                  <i className="kejar-icon-v2 icon-C-Default font-22 color-white"></i>
                  <div className="text-option-jawaban font-15">She has something to do.</div>
                </div>
                <div className="bodysoal-option flex align-center">
                  <i className="kejar-icon-v2 icon-D-Default font-22 color-white"></i>
                  <div className="text-option-jawaban font-15">Her mother is sick.</div>
                </div>
                <div className="bodysoal-option flex align-center">
                  <i className="kejar-icon-v2 icon-E-Default font-22 color-white"></i>
                  <div className="text-option-jawaban font-15">She is sick.</div>
                </div> */}
              </div>
            </div>
          </div>
          <div className="Footerexam">
            <div className="Content-footer flex">
              <div className="Grup-btnexam flex">
                <Button className="btn-exam" type="primary" onClick={this.doublepressdecline}>
                  <i className="kejar-icon-v2 icon-Arrow-Left font-22 color-white"></i>
                </Button>

                <Checkbox className="Check-ragu" onChange={this.onChange}>RAGU-RAGU</Checkbox>

                <Button className="btn-exam" type="primary"  onClick={this.doublepressincrease}>
                  <i className="kejar-icon-v2 icon-Arrow-Right font-22 color-white"></i>
                </Button>
              </div>
              <Button className="flex btn-daftarsoal" onClick={this.showDrawer}>
                <i className="kejar-icon-v2 icon-Daftar-Soal font-22 color-grey"></i><span id="text-daftarsoal">DAFTAR SOAL</span>
              </Button>
              <Snackbar ref= {this.snackbarRef} />
            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default App;
