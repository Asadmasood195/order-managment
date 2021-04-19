import Spinner from './tenor.gif'
import './Loading.scss'

const LoadingComponent = () => {
    return (
        <div className='animated_gif' >
            <img
                width='100px'
                height='100px'
                src={Spinner}
                alt="Loading..."

            />
        </div>
    )
}

export default LoadingComponent
