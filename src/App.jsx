import './App.css'
import Banner from './components/Banner';
import BatchAnnounce from './components/BatchAnnounce';
// import CreatorFooter from './components/CreatorFooter';
import Download from './components/Download';
import Footer from './components/Footer';
import Main from './components/Main';
import Navbar from './components/Navbar';
import Program from './components/Program';
import Creator from './components/Creator';
import '@fortawesome/fontawesome-free/css/all.min.css';



function App() {
    return (
        <div>
            <Navbar />
            <Banner />
            <Main />
            <BatchAnnounce />
            <Program />
            <Download />
            <Footer />
            {/* <CreatorFooter /> */}
            <Creator />

        </div>
    );
}

export default App;