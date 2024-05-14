import { Suspense } from "react";
import Loading from "./loading";


export default function transactionsLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    
    <Suspense fallback={<Loading></Loading>}>
        {children}
    </Suspense>
  );
}
