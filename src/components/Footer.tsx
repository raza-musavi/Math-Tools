import { Calculator, Github, Twitter, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="w-full border-t bg-muted/50">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 font-bold text-lg">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Calculator className="h-5 w-5" />
              </div>
              <span>MathTools</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Simple, powerful mathematical tools for everyone. Calculate HCF, read math blogs, and more.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h3 className="font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="/" className="hover:text-foreground transition-colors">
                  HCF Calculator
                </a>
              </li>
              <li>
                <a href="/blogs" className="hover:text-foreground transition-colors">
                  Math Blogs
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-3">
            <h3 className="font-semibold">Connect</h3>
            <div className="flex gap-3">
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-background border hover:bg-muted transition-colors"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-background border hover:bg-muted transition-colors"
              >
                <Twitter className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-background border hover:bg-muted transition-colors"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} MathTools. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
