import React from 'react'
import './Newsletter.css';
import { AiOutlineSend } from "react-icons/ai";

const Newsletter = () => {
    return (
        <section className='newsletter p-2'>
            <div className="container my-5">
                <div className="row">
                    <div className='col-md-3'>
                        <h5 className='h5'>NEWSLETTER</h5>
                        <p>Stay upto date</p>
                    </div>
                    
                    <div className="col-md-9">
                        <div class="input-group mb-3">
                            <input type="text" className="form-control" placeholder="Enter yor email" aria-label="Username" aria-describedby="basic-addon2" />
                            <span className="input-group-text bg-transparent" id="basic-addon2"><AiOutlineSend className='icon' /></span>
                        </div>
                    </div>

                </div>
            </div>

        </section>
    )
}

export default Newsletter
