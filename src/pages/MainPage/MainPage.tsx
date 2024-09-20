import Header from '../../components/Header/Header';
import Poster from '../../components/Poster/Poster';
import './MainPage.css'

function MainPage() {
    return ( <>
    <div className='mainpage'>
        <Header></Header>
        <div className='container'>
            <Poster></Poster>
        </div>
    </div>
    </> );
}

export default MainPage;