import main from '../../assets/main.JPG'
import './About.css'
const About = () => {
    return (
        <>
            <div className="container">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col">
                          Helping you stand out online—with style and strategy.
                        </div>
                        <div className="col">
                            <img src={main} alt="" className='profileImg'/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About