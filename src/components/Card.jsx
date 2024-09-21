function Card({
  name,
  universe,
  alterego,
  occupation,
  friends,
  superpowers,
  url,
  info,
}) {
  return (
    <div className="card">
      <h2>{name}</h2>
      <p>Вселенная: {universe}</p>
      <p>Альтер эго: {alterego}</p>
      <p>Род деятельности: {occupation}</p>
      <p>Друзья: {friends}</p>
      <p>Суперсила: {superpowers}</p>
      <img src={url} alt={name} />
      <p className="info">{info}</p>
    </div>
  );
}

export default Card;
