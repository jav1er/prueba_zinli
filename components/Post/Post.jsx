import Image from "next/image";
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
        <Image
          src={
            "https://loremflickr.com/cache/resized/65535_52309465858_4c4842665e_z_540_400_nofilter.jpg"
          }
          alt="title"
          width={270}
          height={204}
          className="post-image"
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
