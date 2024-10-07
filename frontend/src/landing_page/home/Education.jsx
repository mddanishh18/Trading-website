function Education() {
    return ( 
        <div className='container p-5 mt-5'>
            <div className='row'>
                <div className='col-6'>
                    <img src='Media/images/education.svg' style={{width:"75%"}}/>
                </div>
                <div className='col-6'>
                    <h3 className='mb-3'>Free and open market education</h3>
                    
                    <p>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                    
                    <a href='' style={{textDecoration:"none"}}>Versity<i class="fa-solid fa-arrow-right"></i></a>

                    <p className='mt-5'>TradingQ&A, the most active trading and investment community in India for all you rmarket related queries.</p>

                    <a href='' style={{textDecoration:"none"}}>TradingQ&A<i class="fa-solid fa-arrow-right"></i></a>


                </div>
            </div>
        </div>
     );
}

export default Education;