const fs = require('fs');
const path = require('path');

const UI_DIR = path.resolve(process.cwd(), 'src', 'components', 'ui');

function stripTsGenerics(code) {
  // React.forwardRef<...>( -> React.forwardRef(
  code = code.replace(/React\.forwardRef<[^>]+>\(/g, 'React.forwardRef(');
  // Remove : React.ElementRef<...> and : React.ComponentPropsWithoutRef<...> in param type positions
  code = code.replace(/:\s*React\.[A-Za-z0-9_]+(?:<[^>]+>)?/g, '');
  // Remove ComponentProps/ElementRef generic annotations in variable declarations where applicable
  code = code.replace(/:\s*\{[^}]*\}/g, '');
  // Remove satisfies ...
  code = code.replace(/\s+satisfies\s+[A-Za-z0-9_.]+\s*;?/g, ';');
  return code;
}

function run() {
  const files = fs.readdirSync(UI_DIR).filter((f) => f.endsWith('.jsx'));
  for (const file of files) {
    const p = path.join(UI_DIR, file);
    const src = fs.readFileSync(p, 'utf8');
    const out = stripTsGenerics(src);
    if (out !== src) {
      fs.writeFileSync(p, out, 'utf8');
      console.log('Cleaned TS generics in', file);
    }
  }
}

run();



