// import main from '../../assets/main-removebg-preview.png'
import main from '../../assets/main.JPG'
import './About.css'
const About = () => {
    return (
        <>
            <section className="hero">
                <div className="hero-text">
                    <p>Helping you stand out online—with style and strategy.</p>
                </div>
                <div className="hero-image">
                    <img src={main} alt="Profile" />
                </div>
            </section>
        </>
    )
}

export default About