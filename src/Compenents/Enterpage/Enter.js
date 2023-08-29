import './Enter.css'
import {useNavigate} from 'react-router-dom'
const Enter=()=>{
   const navigate=useNavigate()
   const handleNavigate=()=>{
        navigate('/home')
   }
    return (
      <div className='main' >
        {/* <img src='https://i.gifer.com/origin/48/48b104295655cf0908ea58ba723232ac_w200.gif' alt='' /> */}
        <img className='logo-1' src='https://media1.giphy.com/media/nQASPLzc7zbJpqjZDX/200w.gif?cid=82a1493b6g4h0fye1k1tzg2vmlbc3hk774bawfccoczbf501&ep=v1_gifs_related&rid=200w.gif&ct=s' alt=''/>
        <div className='aside'>
           <div className='typewriter'>
           <h1 className='title'>A full Stack Web Developer</h1>
           <h1 className='name'>Rakesh Kirlampalli</h1>
           </div>
           <button className='home-button' onClick={handleNavigate}>Navigate</button>
        </div>
      </div>
    )
   }
   export default Enter