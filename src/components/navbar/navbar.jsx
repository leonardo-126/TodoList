import "./navbar.scss"
import { useState } from 'react';
import { AiFillCheckCircle, AiOutlineSetting} from 'react-icons/ai';
import { HiOutlineDocumentReport } from 'react-icons/hi';
import { IoMdContact } from 'react-icons/io';
import { Settings } from "../setings/settings/settings";
import { Login } from "../login/login";

export const Navbar = () => {
    const [modalSetting, setModalSetting] = useState(false)
    const [modalLogin, setModalLogin] = useState(false)

    const modalTongleLogin = () => {
        setModalLogin(!modalLogin)
    }
    
    const modalTongle = () => {
        setModalSetting(!modalSetting)
    }
    return (
        <>
            <div className='header-container'>
                <div className="header-content">
                    <div className='header-content-logo'>
                        <a href="#"><AiFillCheckCircle/>MeuFoco</a>
                    </div>
                    <nav className="header-content-navbar">
                        <ul>
                            <li>
                                <a href="#" id="report"><HiOutlineDocumentReport/>Report</a>
                            </li>
                            <li>
                                <a href="#" onClick={modalTongle} id="setting"><AiOutlineSetting/>Setting</a>
                            </li>
                            <li>
                                <a href="#" onClick={modalTongleLogin} id="login"><IoMdContact/>Login</a>
                            </li>
                        </ul>
                    </nav>

                </div>
                <div className='header-content-border'></div>
                
            </div>
            
            {modalSetting ? <Settings setModalProps={modalTongle} /> : <></>} {/*modal of settings*/}
            {modalLogin ? <Login setModalProps={modalTongleLogin}/> : <></>}
        </>
    )
}