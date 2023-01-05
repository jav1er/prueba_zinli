import Image from "next/image";
export default function Post({ product }) {
  const { image, title, content, url } = product;
  return (
    <article className="post">
      <div className="post-picture">
        <Image
          src={image}
          alt="title"
          width={270}
          height={204}
          className="post-image"
        />
      </div>
      <div className="post-content">
        <h3 className="post-title">
          <a href={url} target="_blank" rel="noopener noreferrer">
            {title}
          </a>
        </h3>
        <p className="post-description">{content}</p>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="post-link"
        >
          Ver más
        </a>
      </div>
    </article>
  );
}
