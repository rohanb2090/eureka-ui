import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const OUTPUT_FILE = 'EUREKA_AI_CONTEXT.md';
const IGNORE_DIRS = ['node_modules', '.git', 'dist', 'storybook-static'];

function readFile(filePath) {
    try {
        return fs.readFileSync(filePath, 'utf8');
    } catch (error) {
        console.error(`Error reading ${filePath}:`, error.message);
        return '';
    }
}

function generateContext() {
    let content = '# Eureka UI - AI Context\n\n';
    content += '> This file is auto-generated. Paste this entire file into AI tools like Lovable, Bolt, or ChatGPT to give them context about the design system.\n\n';

    // 1. Design Tokens (Minified)
    console.log('Adding Design Tokens...');
    const tokensPath = path.join(__dirname, '..', 'design-tokens.json');
    const tokens = readFile(tokensPath);
    if (tokens) {
        try {
            const minifiedTokens = JSON.stringify(JSON.parse(tokens));
            content += '## 1. Design Tokens (design-tokens.json)\n';
            content += '```json\n' + minifiedTokens + '\n```\n\n';
        } catch (e) {
            console.error('Error minifying tokens:', e);
        }
    }

    // 2. Tailwind Config
    console.log('Adding Tailwind Config...');
    const tailwindPath = path.join(__dirname, '..', 'tailwind.config.js');
    const tailwindConfig = readFile(tailwindPath);
    if (tailwindConfig) {
        // Remove comments and whitespace from config
        const cleanConfig = tailwindConfig.replace(/\/\*[\s\S]*?\*\/|\/\/.*/g, '').replace(/^\s*[\r\n]/gm, '');
        content += '## 2. Tailwind Configuration (tailwind.config.js)\n';
        content += '```javascript\n' + cleanConfig + '\n```\n\n';
    }

    // 3. Component Blueprints (Optimized)
    console.log('Adding Component Blueprints...');
    const rootDir = path.join(__dirname, '..');
    const files = fs.readdirSync(rootDir);

    files.forEach(file => {
        if (file.endsWith('_blueprint.md')) {
            console.log(`  - ${file}`);
            let blueprintContent = readFile(path.join(rootDir, file));

            // Extract only critical sections
            const relevantSections = [
                '## 3. Variants & Intent',
                '## 6. Token Consumption Rules',
                '## Token Consumption Rules',
                '## 5. Accessibility Contract',
                '## Accessibility Contract',
                '## Example Usage',
                '## Props',
                '## Interface'
            ];

            let optimizedContent = '';

            // Always keep the title
            const titleMatch = blueprintContent.match(/^# .+$/m);
            if (titleMatch) optimizedContent += titleMatch[0] + '\n\n';

            // Extract table for Variants if present
            const variantsMatch = blueprintContent.match(/\| Variant \|.+?(\n\n|$)/s);
            if (variantsMatch) {
                optimizedContent += '### Variants\n' + variantsMatch[0] + '\n';
            }

            // Extract specific sections
            relevantSections.forEach(header => {
                const regex = new RegExp(`${header.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}[\\s\\S]*?(?=^## |$)`, 'm');
                const match = blueprintContent.match(regex);
                if (match) {
                    optimizedContent += match[0] + '\n';
                }
            });

            // Fallback: If no relevant sections found (structure might differ), take the first 1000 chars
            if (optimizedContent.length < 50) {
                optimizedContent = blueprintContent.substring(0, 1000) + '\n... (truncated)';
            }

            content += `## Component: ${file}\n\n`;
            content += optimizedContent + '\n\n';
        }
    });

    fs.writeFileSync(path.join(rootDir, OUTPUT_FILE), content);
    console.log(`\nSuccessfully generated ${OUTPUT_FILE}`);
}

generateContext();
