import { Trophy } from "lucide-react";

const RankBadge = ({ rank }: { rank: number }) => {
  const colorClass =
    rank === 1
      ? "bg-gold/15 text-gold border-gold/30"
      : rank === 2
      ? "bg-silver/15 text-silver border-silver/30"
      : rank === 3
      ? "bg-bronze/15 text-bronze border-bronze/30"
      : "bg-muted text-muted-foreground border-border";

  return (
    <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-sm font-bold ${colorClass}`}>
      {rank <= 3 && <Trophy size={14} />}
      <span>#{rank}</span>
    </div>
  );
};

export default RankBadge;
