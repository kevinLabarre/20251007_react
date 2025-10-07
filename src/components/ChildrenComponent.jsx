function ChildrenComponent({ text, children, ...props }) {
  return (
    <div {...props}>
      <p>Je suis le composant enfant !</p>
      <p>Texte affiché chez l'enfant: {text}</p>
      <p>prop children: {children}</p>
    </div>
  );
}

export default ChildrenComponent;
