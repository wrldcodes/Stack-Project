import Hero from '../components/Hero';
import { Link } from 'react-router-dom';
import { Header } from '../components/Header';
import { TestPage } from './TestPage';


function Homepage(){
    return(
       <div>
        <Hero/>
        <Header/>
        <TestPage/>
       </div>
    )
}
export default Homepage;