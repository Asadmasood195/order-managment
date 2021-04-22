import Spinner from './tenor.gif'
import './Loading.scss'

const LoadingComponent = () => {
    return (
        <div className='animated_gif' >
            <div className="parent">
                <div class="child">
                    <img
                        // className='child'
                        width='100px'
                        height='100px'
                        src={Spinner}
                        alt="Loading..."

                    />
                </div>
            </div>
        </div>
    )
}

export default LoadingComponent
