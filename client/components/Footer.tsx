export default function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="max-w-7xl mx-auto px-8 text-sm text-muted-foreground text-center">
        © {new Date().getFullYear()} Digeto. All rights reserved.
      </div>
    </footer>
  );
}
