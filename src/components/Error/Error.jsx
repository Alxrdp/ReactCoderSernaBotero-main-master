import Error from '../Error/error-404.png'


function ErrorPage() {
    return (
        <div className='div-error'>
            <img src={Error} alt="error-404" />
            <div className='div-texto'>
               <p>Página no Encontrada</p>
            </div>
        </div>
    )
}

export default ErrorPage;