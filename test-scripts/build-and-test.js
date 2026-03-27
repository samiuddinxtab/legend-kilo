import { execSync } from 'child_process';
import { existsSync, readFileSync } from 'fs';
import { join } from 'path';

const rootDir = process.cwd();

// Check if dependencies are installed
const nodeModulesExists = existsSync(join(rootDir, 'node_modules'));
console.log('Node modules exist:', nodeModulesExists);

// Install dependencies if needed
if (!nodeModulesExists) {
  console.log('Installing dependencies...');
  try {
    execSync('bun install', { 
      cwd: rootDir, 
      stdio: 'inherit',
      env: { ...process.env, HIDE_BUN_ANALYTICS: '1' }
    });
    console.log('Dependencies installed successfully');
  } catch (error) {
    console.error('Failed to install dependencies:', error.message);
    process.exit(1);
  }
}

// Build the project
console.log('\nBuilding Astro project...');
try {
  execSync('bun run build', { 
    cwd: rootDir, 
    stdio: 'inherit',
    env: { ...process.env, HIDE_BUN_ANALYTICS: '1' }
  });
  console.log('Build completed successfully');
} catch (error) {
  console.error('Build failed:', error.message);
  process.exit(1);
}

console.log('\n✅ Build successful! Dist folder created.');
console.log('Run "bun run preview" to preview the production build.');