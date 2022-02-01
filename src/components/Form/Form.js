import "./Form.scss";
import { useState } from "react";
import { useDispatch } from "react-redux";

export default function Form() {
  const [article, setArticle] = useState({
    title: "",
    body: "",
  });

  const dispatch = useDispatch();

  const handleForm = (e) => {
    e.preventDefault();
  };

  const handleInput = (e) => {
    if (e.target.classList.contains("inp-title")) {
      const newObjState = { ...article, title: e.target.value };
      setArticle(newObjState);
    }
    if (e.target.classList.contains("inp-body")) {
      const newObjState = { ...article, body: e.target.value };
      setArticle(newObjState);
    }
  };

  return (
    <div>
      <h1 className="title-form">Écrivez un article</h1>

      <form className="container-form" onSubmit={handleForm}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          className="inp-title"
          id="title"
          placeholder="Entrez un titre"
          onChange={handleInput}
          value={article.title}
        />

        <label htmlFor="article">Votre article</label>
        <textarea
          className="inp-body"
          id="article"
          placeholder="Texte de l'article"
          onChange={handleInput}
          value={article.body}
        ></textarea>

        <button type="submit">Envoyer l'article</button>
      </form>
    </div>
  );
}
