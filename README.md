# leonardosuarez08.gitbhub.io
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>LeonardoSuarez08 | Portafolio</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <header>
    <h1 class="logo">LS.</h1>
    <nav>
      <a href="#sobre-mi">Sobre mí</a>
      <a href="#proyectos">Proyectos</a>
      <a href="#contacto">Contacto</a>
    </nav>
  </header>

  <section class="hero">
    <p class="tag">DESARROLLADOR WEB — CHICLAYO, PE</p>
    <h2>Ideas claras.<br><span>Sistemas que avanzan.</span></h2>
    <p class="desc">Diseño y desarrollo aplicaciones web escalables combinando PHP, MySQL y Bootstrap con una mirada obsesiva por la experiencia del usuario.</p>
  </section>

  <section id="sobre-mi" class="sobre-mi">
    <h3>Sobre mí</h3>
    <p>Soy Leonardo, desarrollador web apasionado por crear sistemas funcionales y bien estructurados. Me especializo en PHP con arquitectura MVC, MySQL y Bootstrap.</p>
  </section>

  <section id="proyectos" class="proyectos">
    <h3>Proyectos</h3>
    <div class="cards">
      <div class="card">
        <h4>Sistema Web de Gestión</h4>
        <p>CRUD completo con PHP, MySQL y Bootstrap.</p>
        <a href="https://github.com/LeonardoSuarez08/LeonardoSuarez08" target="_blank">Ver proyecto</a>
      </div>
      <div class="card">
        <h4>Portafolio Personal</h4>
        <p>Diseño moderno y minimalista con HTML y CSS.</p>
        <a href="https://leonardosuarez08.github.io" target="_blank">Ver sitio</a>
      </div>
    </div>
  </section>

  <section id="contacto" class="contacto">
    <h3>Hablemos</h3>
    <p>¿Tienes un proyecto o idea? Escríbeme:</p>
    <ul>
      <li>📧 leonardosuarez08@gmail.com</li>
      <li>🌐 <a href="https://linkedin.com/in/leonardosuarez08" target="_blank">LinkedIn</a></li>
      <li>💻 <a href="https://github.com/LeonardoSuarez08" target="_blank">GitHub</a></li>
    </ul>
  </section>

  <footer>
    <p>© 2026 LeonardoSuarez08 — Hecho con 💻 y ☕</p>
  </footer>
</body>
</html>


body {
  background-color: #0a0a0a;
  color: #f5f5f5;
  font-family: 'Poppins', sans-serif;
  margin: 0;
  padding: 0;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 60px;
}

.logo {
  font-size: 1.8rem;
  font-weight: 700;
}

nav a {
  color: #aaa;
  margin-left: 20px;
  text-decoration: none;
  transition: color 0.3s;
}

nav a:hover {
  color: #b4ff00;
}

.hero {
  padding: 120px 60px;
}

.hero .tag {
  color: #b4ff00;
  font-weight: 600;
}

.hero h2 {
  font-size: 4rem;
  line-height: 1.2;
}

.hero h2 span {
  color: #b4ff00;
}

.hero .desc {
  max-width: 600px;
  color: #ccc;
  margin-top: 20px;
}

.sobre-mi, .proyectos, .contacto {
  padding: 80px 60px;
}

.cards {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}

.card {
  background-color: #141414;
  padding: 20px;
  border-radius: 10px;
  width: 300px;
  transition: transform 0.3s;
}

.card:hover {
  transform: translateY(-5px);
}

.card a {
  color: #b4ff00;
  text-decoration: none;
}

footer {
  text-align: center;
  padding: 40px;
  color: #777;
}
