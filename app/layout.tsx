// Pass-through kök layout. <html>/<body> app/[locale]/layout.tsx içinde;
// global app/not-found.tsx kendi html/body'sini render eder.
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children;
}
