import "./Form.scss";

export default function Form() {
  return (
    <div>
      <h1 className="title-form">Écrivez un article</h1>

      <form className="container-form">
        <label htmlFor="title">Title</label>
        <input type="text" id="title" placeholder="Entrez un titre" />

        <label htmlFor="article">Votre article</label>
        <textarea id="article" placeholder="Texte de l'article"></textarea>

        <button type="submit">Envoyer l'article</button>
      </form>
    </div>
  );
}
