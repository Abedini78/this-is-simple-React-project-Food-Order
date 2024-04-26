import style from './Discribtion.module.css'


export const Discribtion=()=>{
    return(
        <div className='row'>
            <div className='col-xs-10 col-sm-10 col-md-7 col-lg-7 mx-auto'>
                  <div className={`shadow ${style.Box}`}>
                          <h3 className='text-white text-center'>Dlicious Food,Dlivered To You</h3>
                          <h5 className='text-white p-2'>
                          In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available
                          </h5>
                       
                          
                  </div>
            </div>
        </div>
    )
}