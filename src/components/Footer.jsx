export default function Footer() {
  return (
    <footer className="bg-hover text-bg py-6">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Code Coffee. All rights reserved.
        </p>
        <p className="text-xs mt-2">
          Built by Kyaw Ko from the Spot Solutions
        </p>
      </div>
    </footer>
  );
}