import React from 'react'
import { Link } from 'react-router-dom'
import {
    Input,
    Button,
    DatePicker,
    SelectPicker,
} from 'rsuite'
import Background from '../Background'
import FixedFooter from '../FixedFooter'
import FixedHeader from '../FixedHeader'

const kota = [
    {
        "label": "Jakarta",
        "value": "Jakarta",
    },
    {
        "label": "Bogor",
        "value": "Bogor",
    },
    {
        "label": "Depok",
        "value": "Depok",
    },
    {
        "label": "Tangerang",
        "value": "Tangerang",
    },
]

const province = [
    {
        "label": "Jakarta",
        "value": "Jakarta",
    },
    {
        "label": "Bogor",
        "value": "Bogor",
    },
]

const sector = [
    {
        "label": "Bogor",
        "value": "Bogor",
    },
    {
        "label": "Depok",
        "value": "Depok",
    },
    {
        "label": "Tangerang",
        "value": "Tangerang",
    },
]


function App({open, toogle_open}) {

    return (
        <div className="h-100vh w-100vw">
            <Background />

            <FixedHeader/>
        
            <div className="centering shift h-100" >
                <div className="mt-n5" style={{minWidth: '26rem'}}>
                    <div className="mb-4">
                        <h3>Register</h3>
                        <div>Lorem .....</div>
                    </div>
                    
                    <div className="form-group row">
                        <div className="col">
                            <Input placeholder="Alamat email"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <div className="col">
                            <Input placeholder="Kata sandi"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <div className="col">
                            <Input placeholder="Nama"/>
                        </div>
                    </div>

                    <div className="form-group row">
                        <div className="col-6 pr-2">
                            <SelectPicker placeholder="Tempat Lahir" data={kota} className="w-100"/>
                        </div>
                        <div className="col pl-2">
                            <DatePicker placeholder="Tanggal Lahir" className="w-100"/>
                        </div>
                    </div>

                    <div className="form-group row">
                        <div className="col">
                            <Input placeholder="Phone"/>
                        </div>
                    </div>

                    <div className="form-group row">
                        <div className="col pr-2">
                            <SelectPicker placeholder="Province" data={province} className="w-100"/>
                        </div>
                        <div className="col pl-2">
                            <SelectPicker placeholder="Sector" data={sector} className="w-100"/>
                        </div>
                    </div>

                    <div className="d-flex justify-content-between align-items-center">
                        <div>
                            <Link className="d-block" to="/login">
                                Sudah terdaftar?
                            </Link>
                        </div>
                        <Link className="d-block" to="/login">
                            <Button className="bg-warning text-dark">Register <i className="fas fa-arrow-right ml-2"></i></Button>
                        </Link>
                    </div>
                </div>
            </div>
            <FixedFooter/>
        </div>
    );
}

export default App;
