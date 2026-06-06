export function Contact() {
  return (
    <main className="page">
      <section className="contact-layout">
        <div className="contact-info">
          <h1>Contact</h1>
          <p>
            Proyecto desarrollado como SPA con React 19, Vite, TypeScript y
            Fake Store API.
          </p>

          <div className="contact-details">
            <div>
              <span>Email</span>
              <strong>contacto@fakestore-react.dev</strong>
            </div>

            <div>
              <span>Repositorio</span>
              <strong>https://github.com/juniorcueva-star/fakestore-react</strong>
            </div>

            <div>
              <span>Deploy</span>
              <strong>https://fakestore-react-beta.vercel.app</strong>
            </div>
          </div>
        </div>

        <form className="contact-form">
          <label>
            Nombre
            <input type="text" placeholder="Tu nombre" />
          </label>

          <label>
            Email
            <input type="email" placeholder="tu@email.com" />
          </label>

          <label>
            Mensaje
            <textarea placeholder="Escribe tu mensaje" rows={5} />
          </label>

          <button type="button">Enviar mensaje</button>
        </form>
      </section>
    </main>
  );
}
