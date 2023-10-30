import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <>
      <nav className='navBar'>
        <div className="myBrandLogo">
            Logo
        </div>
        <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link>Sobre mi</Link></li>
            <li><Link>Experiencia</Link></li>
            <li><Link>Skills</Link></li>
            <li><Link>Proyectos</Link></li>
            <li><Link>Galeria</Link></li>
            <li><Link to='/contacto' >Contacto</Link></li>
           
        </ul>
        <button>Cotizar proyecto</button>
      </nav>
    </>
  )
}

export default Navbar
