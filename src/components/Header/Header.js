import "./Header.scss";

export default function Header() {
  
  return (
      <div className="header">
        <section className="presentation">
          <div className="preOne">
            <h1>Mathis BOISSON</h1>
            <h2>développeur intégrateur web junior</h2>
          </div>
          <h3 className="preTwo centered">Intégration site/appli web</h3>
          <h3 className="preTree centered">Optimisation de référencement</h3>
          <h3 className="preFour centered">Débogage d'applications web</h3>
          <h3 className="preFive centered">Mise à jour d'appli/site web</h3>
        </section>
      </div>
  );
}
