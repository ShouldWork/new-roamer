import './new-roamer.css';
// import Layout from './components/layout/layout';
function NewRoamer() {
  return (
    <div className='layout'>
        <div className='sideBar_layout'>
            <div>
                <ul className='sidebar_list'>
                    <li>Roamer</li>
                    <li>Trailer</li>
                    <li>Upgrades</li>
                    <li>Media</li>
                </ul>
            </div>
        </div>
        <div className='content_layout'>
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
