const fs = require('fs');

const filesToFix = [
  'src/data/reviews.ts',
  'src/app/maps/240/smolensk/house/novo_moskovskaya_ul_2_8_ofis_305/YEAYdA5oTEQHQFtpfxlxcnhgbQ==/page.tsx',
];

for (const file of filesToFix) {
  if (!fs.existsSync(file)) {
    console.log(`File not found: ${file}`);
    continue;
  }
  
  let content = fs.readFileSync(file, 'utf8');
  let lines = content.split('\n');
  let changed = false;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // Case 1: text inside double quotes, mostly reviews or JS strings like text: "..." or "..."
    // Specifically looking for JS/TS string literals, which might have extra spaces at the beginning, then a double quote.
    if (/^\s*".*ООО "СД-Сервис".*"/.test(line)) {
      // It's a string literal like  "Спасибо, что выбрали ООО "СД-Сервис"..."
      lines[i] = line.replace(/ООО "СД-Сервис"/g, 'ООО \\"СД-Сервис\\"');
      changed = true;
    } 
    else if (/^\s*text:\s*".*ООО "СД-Сервис".*"/.test(line)) {
      // It's a review text like text: "Замечательная компания ООО "СД-Сервис"..."
      lines[i] = line.replace(/ООО "СД-Сервис"/g, 'ООО \\"СД-Сервис\\"');
      changed = true;
    }
    // Case 2: HTML/JSX attributes like alt="ООО "СД-Сервис""
    else if (/alt="ООО "СД-Сервис""/.test(line)) {
      lines[i] = line.replace(/alt="ООО "СД-Сервис""/g, 'alt="ООО &quot;СД-Сервис&quot;"');
      changed = true;
    }
    // title="..." attributes
    else if (/title="ООО "СД-Сервис""/.test(line)) {
      lines[i] = line.replace(/title="ООО "СД-Сервис""/g, 'title="ООО &quot;СД-Сервис&quot;"');
      changed = true;
    }
    // Any other remaining unescaped quotes inside single-line strings?
    // Let's just catch any string that matches the pattern:
    // ... " ... ООО "СД-Сервис" ... " ...
    else if (line.indexOf('"') !== -1 && line.indexOf('ООО "СД-Сервис"') !== -1) {
        // Only if it seems to be inside double quotes where another double quote is at the start
        // To be safe, any description: "ООО "СД-Сервис""
        if (/:\s*".*ООО "СД-Сервис".*"/.test(line)) {
            lines[i] = line.replace(/ООО "СД-Сервис"/g, 'ООО \\"СД-Сервис\\"');
            changed = true;
        }
    }
  }

  if (changed) {
    fs.writeFileSync(file, lines.join('\n'));
    console.log(`Fixed quotes in ${file}`);
  } else {
    console.log(`No fixes needed for ${file}`);
  }
}
