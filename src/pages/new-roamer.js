import './new-roamer.css';
import * as Logos from "../components/assests/logos";

const LogosA = Object.keys(Logos);
console.log(LogosA);
// import Layout from './components/layout/layout';
function NewRoamer() {
  return (
    <div className='layout'>
        <div className='sideBar_layout'>
            <div>
            </div>
        </div>
        <div className='content_layout'>
                <img src={Logos.MDCLOGO} alt="MDCLOGO"></img>
                <img src={Logos.RebootLogo} alt="Reboot Logo"></img>
            <div className='content-container'>
                <label>Test
                    <input />
                </label>
            </div>
        </div>
    </div>
  );
}

export default NewRoamer;
