interface CardType {
  children: React.ReactNode;
  className?: string;
}
const Card: React.FC<CardType> = ({ children, className }) => {
  return (
    <div
      className={`bg-white shadow-2xl border border-slate-100 rounded-xl ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
