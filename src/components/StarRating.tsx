import { Star } from "lucide-react";

interface StarRatingProps {
  rating: number;
  size?: number;
}

const StarRating = ({ rating, size = 18 }: StarRatingProps) => {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          size={size}
          className={
            star <= Math.floor(rating)
              ? "fill-accent text-accent"
              : star <= rating
              ? "fill-accent/50 text-accent"
              : "text-border"
          }
        />
      ))}
      <span className="ml-2 font-semibold text-foreground">{rating}</span>
    </div>
  );
};

export default StarRating;
