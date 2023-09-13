type SwiperItemProps = {
  imageSrc: string;
  title: string;
  price: number;
};

export const WhyOrganicSwiperItem: React.FC<SwiperItemProps> = ({
  imageSrc,
  title,
  price,
}) => {
  return (
    <div className="why-organic__swiper-item">
      <div className="why-organic__swiper-image">
        <img src={imageSrc} alt={title} />
      </div>
      <h3 className="why-organic__swiper-title">{title}</h3>
      <span className="why-organic__swiper-price">{price}</span>
    </div>
  );
};
