
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Helper for ESM directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Import tailwind config (we'll need to read it as a module or parse it)
// Since it's a JS file using module.exports, we'll try to read strictly the theme part
// or simpler: just stick to the CSS variables we know we defined in index.css + Tailwind defaults.

const CSS_PATH = path.join(__dirname, '../src/index.css');
const OUTPUT_PATH = path.join(__dirname, '../design-tokens.json');

function extractVariables(cssContent) {
    const tokens = {
        colors: {},
        spacing: {},
        borderRadius: {},
        fontFamily: {}
    };

    // Regex to find --variable: value;
    const regex = /--([a-zA-Z0-9-]+):\s*([^;]+);/g;
    let match;

    while ((match = regex.exec(cssContent)) !== null) {
        const [_, name, value] = match;
        const cleanValue = value.trim();

        if (name.startsWith('color-') || name.startsWith('bg-') || name.startsWith('text-') || name.startsWith('border-') || name.startsWith('action-') || name.startsWith('status-')) {
            // Colors
            // Structure: colors.bg.page
            if (name.includes('color-')) {
                // e.g. --color-slate-900
                tokens.colors[name.replace('color-', '')] = { value: cleanValue, type: 'color' };
            } else {
                tokens.colors[name] = { value: cleanValue, type: 'color' };
            }
        } else if (name.startsWith('spacing-')) {
            tokens.spacing[name.replace('spacing-', '')] = { value: cleanValue, type: 'spacing' };
        } else if (name.startsWith('radius-')) {
            tokens.borderRadius[name.replace('radius-', '')] = { value: cleanValue, type: 'borderRadius' };
        }
    }

    return tokens;
}

try {
    const cssContent = fs.readFileSync(CSS_PATH, 'utf8');
    const tokens = extractVariables(cssContent);

    // Structure for Token Studio (W3C formatish)
    const finalJson = {
        "global": {
            "color": tokens.colors,
            "spacing": tokens.spacing,
            "borderRadius": tokens.borderRadius
        }
    };

    fs.writeFileSync(OUTPUT_PATH, JSON.stringify(finalJson, null, 2));
    console.log(`✅ Design tokens generated at: ${OUTPUT_PATH}`);
    console.log(`Found ${Object.keys(tokens.colors).length} colors`);
} catch (error) {
    console.error('Error generating tokens:', error);
}
