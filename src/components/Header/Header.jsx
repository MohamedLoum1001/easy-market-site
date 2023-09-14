import React from 'react'
import { headerImg } from '../../data/Data'
import './Header.css';

const Header = () => {

    return (
        <section className='header'>
            <div className='container'>
                <div className="row">
                    {headerImg.map((image) => (
                        <div className="col-4 p-3">
                            <div className="d-flex flex-row mb-0">
                                <div className='mb-0'>
                                    <p>{image.img}</p>
                                </div>
                                <div className='ms-2'>
                                    <p>{image.title}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Header
