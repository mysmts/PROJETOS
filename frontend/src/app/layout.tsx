import React from 'react';
import './Layout.css'; // External CSS for styles

const Layout: React.FC = () => {
    return (
        <div>
            <header style={headerStyle}>
                <h1>UaiPassei</h1>
            </header>

            <nav style={navStyle}>
                <a href="#" style={navLinkStyle}>Home</a>
                <a href="#" style={navLinkStyle}>Cursos</a>
                <a href="#" style={navLinkStyle}>Sobre</a>
                <a href="#" style={navLinkStyle}>Contato</a>
            </nav>

            <div style={heroStyle}>
                <h1>Aprenda com os Melhores Cursos!</h1>
            </div>

            <div style={contentStyle}>
                <h2 style={h2Style}>Nossos Cursos</h2>
                <div style={cardsStyle}>
                    {Array.from({ length: 3 }).map((_, index) => (
                        <div key={index} style={cardStyle}>
                            <img src={`https://via.placeholder.com/300x200`} alt={`Curso ${index + 1}`} />
                            <h3>{`Curso ${index + 1}`}</h3>
                            <p>Descrição breve do curso.</p>
                        </div>
                    ))}
                </div>
            </div>

            <footer style={footerStyle}>
                <p>&copy; 2024 UaiPassei - Todos os direitos reservados.</p>
            </footer>
        </div>
    );
};

const headerStyle: React.CSSProperties = {
    backgroundColor: '#4CAF50',
    color: 'white',
    padding: '20px',
    textAlign: 'center',
};

const navStyle: React.CSSProperties = {
    backgroundColor: '#333',
    overflow: 'hidden',
    display: 'flex',
    justifyContent: 'space-around',
    padding: '10px 0',
};

const navLinkStyle: React.CSSProperties = {
    color: 'white',
    textDecoration: 'none',
    padding: '14px 20px',
    textAlign: 'center',
};

const heroStyle: React.CSSProperties = {
    background: "url('https://www.uaipassei.com.br/images/banner.jpg') no-repeat center center/cover",
    height: '400px',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
};

const contentStyle: React.CSSProperties = {
    padding: '20px',
};

const h2Style: React.CSSProperties = {
    textAlign: 'center',
    color: '#4CAF50',
};

const cardsStyle: React.CSSProperties = {
    display: 'flex',
    gap: '20px',
    flexWrap: 'wrap',
    justifyContent: 'center',
};

const cardStyle: React.CSSProperties = {
    border: '1px solid #ddd',
    borderRadius: '8px',
    width: '300px',
    padding: '20px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
};

const footerStyle: React.CSSProperties = {
    backgroundColor: '#333',
    color: 'white',
    textAlign: 'center',
    padding: '10px 0',
    position: 'relative',
    bottom: '0',
    width: '100%',
};

export default Layout;
