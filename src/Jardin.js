import '../stylesheets/jardin.css'
import { icons } from './data'

const Jardin = () => {
    return(
    <div className='page-container'>

        <figure className='logo'><img src='' alt=''></img>LOGO</figure>
        <nav>Shop    Our Story   Blog   Contact</nav>
        <div className='icon-container'>{ icons }</div>

        <section className='info-container'>
            Welcome to my website
        </section>
        <main className='content-container'>
            Your Content here...
        </main>
        <footer>
            <p>
            all art copy rights reserved to Rilo DeAnn <br/>
            website design and code copy right Web Dev Wade <br/>
            2023
            </p>
        </footer>
        <figure className='bottom-image'><img src='' alt=''></img></figure>

    </div>)
}

export default Jardin