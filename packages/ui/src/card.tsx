
export function Card({
  title,
  children,
  height
}: {
  title: string,
  children?: React.ReactNode,
  height?: string | ""
}): JSX.Element {
  return (
    <div
      className={`border p-2 pb-4 relative rounded h-[${(height!='')? height: ""}] overflow-scroll`}
    >
      <h1 className="text-xl absolute z-50 right-1 left-1 top-1 text-center pb-2 mb-4 bg-blue-900 text-white p-2 font-thin rounded">
        {title}
      </h1>
      <div className="mt-12">
      {children}
      </div>
      
    </div>
  );
}