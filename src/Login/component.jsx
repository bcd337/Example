import React, { useState } from 'react'
// import './style.css'
import classNames from 'classnames'
import { Link } from 'react-router-dom'
import {
    Sidenav,
    Nav,
    Dropdown,
    Navbar,
    Sidebar,
    Icon,
    Input,
    Button,
} from 'rsuite'
import Background from '../Background'
import FixedFooter from '../FixedFooter'
import FixedHeader from '../FixedHeader'

function App({
    email, 
    password, 
    on_login,
    change_email,
    change_password,
    message,
    loading,
}) {

    return (
        <div className="h-100vh w-100vw">
            <Background />

            <FixedHeader/>
        
            <div className="centering shift h-100" >
                <form className="mt-n5" style={{minWidth: '26rem'}} onSubmit={on_login}>
                    <div className="mb-4">
                        <h3>Masuk</h3>
                        <div>Silakan masuk untuk menikmati layanan yang tersedia di sembako</div>
                    </div>
                    
                    <div className="form-group row">
                        <div className="col">
                            <Input placeholder="Alamat email" type="email" value={email} onChange={change_email}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <div className="col">
                            <Input placeholder="Kata sandi" type="password" value={password} onChange={change_password}/>
                        </div>
                    </div>

                    {message && <div className="mb-2 mt-n2 text-danger">
                        {message}
                    </div>}

                    <div className="d-flex justify-content-between align-items-center">
                        <div>
                            <Link className="d-block text-decoration-none" to={"/forgot_password"}>
                                Lupa kata sandi?
                            </Link>
                            <Link className="d-block text-decoration-none mt-1" to={"/register"}>
                                Daftar Baru?
                            </Link>
                        </div>
                        <span className="d-block" to="/">
                            <Button loading={loading} className="bg-warning text-dark" type={"submit"}>Masuk <i className="fas fa-arrow-right ml-2"></i></Button>
                        </span>
                    </div>
                </form>
            </div>
            <FixedFooter/>
        </div>
    );
}

export default App;
