interface WhiteCardProps {
  children: React.ReactNode;
}

export const WhiteCard = ({ children }: WhiteCardProps) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center w-64">
      {children}
    </div>
  );
};
