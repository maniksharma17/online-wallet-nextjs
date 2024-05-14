export const Center = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex w-full justify-center h-full">
      {children}
    </div>
  );
};
