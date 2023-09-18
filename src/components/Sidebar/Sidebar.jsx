import React from 'react'
import { MdOutlineCancel } from 'react-icons/md';

const Sidebar = () => {
    return (
        <div className='container  d-flex flex-column'>
            <div>
                <p className='fs-3 text-secondary'>Catégories</p>
            </div>
            <div className="row my-4">
                <div className="">
                    <div className='d-flex flex-row'>
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <p className='ms-3'>Gants</p>
                    </div>
                    <div className='d-flex flex-row'>
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <p className='ms-3'>Suédoise</p>
                    </div>
                    <div className='d-flex flex-row'>
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <p className='ms-3'>Suédoise</p>
                    </div>
                    <div className='d-flex flex-row'>
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <p className='ms-3'>Suédoise</p>
                    </div>
                </div>
            </div>
            <div>
                <p className='fs-3 text-secondary'>Marques</p>
            </div>
            <div className="row">
                <div className="col">
                    <div className='d-flex flex-row'>
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <p className='ms-3'>Gants</p>
                    </div>
                    <div className='d-flex flex-row'>
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <p className='ms-3'>Suédoise</p>
                    </div>
                    <div className='d-flex flex-row'>
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <p className='ms-3'>Suédoise</p>
                    </div>
                    <div className='d-flex flex-row'>
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <p className='ms-3'>Suédoise</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Sidebar
