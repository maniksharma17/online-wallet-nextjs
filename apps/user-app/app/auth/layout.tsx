export default function signinLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    
    <html lang="en" className="bg-blue-900">
        <body>{children}</body>
    </html>
  );
}
