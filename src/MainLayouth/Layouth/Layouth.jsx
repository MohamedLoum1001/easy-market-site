import React from 'react'
import Header from '../../components/Header/Header'
import NavBar from '../../components/NavBar/NavBar'
// import Header from '../../components/Header/Header'
// import NavBar from '../../components/NavBar/NavBar'

const Layouth = () => {
    return (
        <div className='container'>
            <div className="row">
                <div className='fixed'>
                    <Header />
                </div>
                <div className='fixed'>
                    <NavBar />
                </div>
            </div>

        </div>
    )
}

export default Layouth
