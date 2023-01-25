import { format } from "date-fns";
import { useCallback } from "react";
import "./Card.scss";

interface ICardProps {
  title: string;
  url: string;
  urlToImage: string;
  description: string;
  publishedAt: string;
}

export const Card = ({
  title,
  url,
  urlToImage,
  description,
  publishedAt,
}: ICardProps) => {
  console.log({ title, url, urlToImage, description, publishedAt });
  const formatDescription = useCallback(() => {
    let trimmedDescription = description.substring(0, 60);

    trimmedDescription = trimmedDescription.substring(
      0,
      Math.min(trimmedDescription.length, trimmedDescription.lastIndexOf(" ")),
    );
    return trimmedDescription + "...";
  }, [description]);
  return (
    <div
      className="card"
      onClick={() => window.open(url, "_blank", "noreferrer")}
    >
      <div className="card__image-container">
        {urlToImage ? <img src={urlToImage} /> : "Missing image"}
      </div>
      <div className="card__content">
        <p className="card__title">{title}</p>
        <p>{`Opublikowano: ${format(new Date(publishedAt), "dd-MM-yyyy")}`}</p>
        <p>{description ? formatDescription() : "missisng description"}</p>
      </div>
    </div>
  );
};
