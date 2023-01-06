import Image from "next/image";
export default function Post({ product }) {
  //const { image, title, content, url } = product;


  {/* image?: string;
      message: string;
      likes?: Array<User>;
      author: User;
      create_at: Date;
      location: string;
      status: 'drafted' | 'deleted' | 'published';
      */}
  return (
    <article className="post">
      <div className="post-picture">
        <Image
          src={
            "https://loremflickr.com/cache/resized/65535_52116912043_0186366fc0_z_540_400_nofilter.jpg"
          }
          alt="title"
          width={270}
          height={204}
          className="post-image"
        />
      </div>
    </article>
  );
}
