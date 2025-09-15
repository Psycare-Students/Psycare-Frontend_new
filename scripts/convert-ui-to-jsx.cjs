const fs = require('fs');
const path = require('path');

const UI_DIR = path.resolve(process.cwd(), 'src', 'components', 'ui');

function transformContent(tsx) {
  let code = tsx;
  // Remove type-only imports: import type { ... } from "...";
  code = code.replace(/import\s+type\s+\{[^}]*\}\s+from\s+"[^"]+";?\n?/g, '');
  // Strip `, type Something` from import lists
  code = code.replace(/\,\s*type\s+\w+/g, '');
  // Remove React.forwardRef generics: React.forwardRef<...>( -> React.forwardRef(
  code = code.replace(/React\.forwardRef<[^>]+>\(/g, 'React.forwardRef(');
  // Remove ComponentPropsWithoutRef and ElementRef generic param usage in forwardRef parameter types
  code = code.replace(/:\s*React\.[A-Za-z0-9_<>.,\s\-\[\]\|]+(?=\)\s*=>)/g, '');
  // Remove param type annotations in arrow function params: ({...}: Something) =>
  code = code.replace(/(\([^)]*\))\s*:\s*[^=]+=>/g, '$1 =>');
  // Remove single param type annotations: (props: Something)
  code = code.replace(/(\w+)\s*:\s*[A-Za-z0-9_<>{}\[\]\|&?:.,\s]+/g, '$1');
  // Remove satisfies Config or other TS satisfies
  code = code.replace(/\s+satisfies\s+[A-Za-z0-9_.]+\s*;?/g, ';');
  // Remove type aliases and exported types entirely
  code = code.replace(/^\s*export\s+type\s+[^;]+;?\s*$/gm, '');
  code = code.replace(/^\s*type\s+[^;=]+=[^;]+;?\s*$/gm, '');
  // Remove interface declarations
  code = code.replace(/^\s*export?\s*interface\s+[\s\S]*?\n}\n/gm, '');
  // Clean leftover multiple blank lines
  code = code.replace(/\n{3,}/g, '\n\n');
  return code;
}

function run() {
  if (!fs.existsSync(UI_DIR)) {
    console.error('UI directory not found:', UI_DIR);
    process.exit(1);
  }
  const entries = fs.readdirSync(UI_DIR);
  entries.forEach((name) => {
    if (!name.endsWith('.tsx')) return;
    const tsxPath = path.join(UI_DIR, name);
    const jsxPath = tsxPath.replace(/\.tsx$/, '.jsx');
    const tsx = fs.readFileSync(tsxPath, 'utf8');
    const jsx = transformContent(tsx);
    fs.writeFileSync(jsxPath, jsx, 'utf8');
    fs.unlinkSync(tsxPath);
    console.log('Converted', name, '->', path.basename(jsxPath));
  });
}

run();


