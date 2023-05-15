import { default as NextImage } from "next/image";
export default function Post({ product }) {
  //const { image, title, content, url } = product;

  {
    /* image?: string;
      message: string;
      likes?: Array<User>;
      author: User;
      create_at: Date;
      location: string;
      status: 'drafted' | 'deleted' | 'published';
      */
  }
  return (
    <article className="post">
      <div className="head-post">
        <div className="img-avatar">imagen avatar</div>

        <span>@neytirl </span>
      </div>

      <div className="post-picture">
        <NextImage
          src={
            "https://loremflickr.com/cache/resized/65535_52893558487_b5dcac7206_n_320_240_nofilter.jpg"
          }
          alt="title"
          width={270}
          height={204}
          className="post-image"
          priority
        />
      </div>

      <div className="description-post">
        <div> corazon</div>

        <div> imagen </div>

        <div> texto </div>
      </div>
    </article>
  );
}
