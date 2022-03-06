import './styles.scss'

type Props = {
  title: string;
  text: string;
  image: string;
};
export function ManagementCard({ title, text, image }: Props) {
  return (
    <article className="carousel-item-pdv">
      <div className="top-icon">
        <img src={image} alt={title}/>
      </div>
      <h3>{title}</h3>
      <p>{text}</p>
    </article>
  );
}
