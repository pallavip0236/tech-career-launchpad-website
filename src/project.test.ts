import { describe, it, expect } from 'vitest';
import fs from 'fs';
import path from 'path';

// Helper function to check if a file exists
const fileExists = (filePath: string) => {
  try {
    fs.accessSync(filePath, fs.constants.F_OK);
    return true;
  } catch (e) {
    return false;
  }
};

describe('Project Initialization (SCRUM-428)', () => {
  const projectRoot = path.resolve(__dirname, '..'); // Assuming tests are in src/

  it('should have index.html at the root', () => {
    const filePath = path.join(projectRoot, 'index.html');
    expect(fileExists(filePath)).toBe(true);
  });

  it('should have vite.config.ts at the root', () => {
    const filePath = path.join(projectRoot, 'vite.config.ts');
    expect(fileExists(filePath)).toBe(true);
  });

  it('should have src/main.tsx as the entry point', () => {
    const filePath = path.join(projectRoot, 'src', 'main.tsx');
    expect(fileExists(filePath)).toBe(true);
  });

  it('should have src/App.tsx as the root component', () => {
    const filePath = path.join(projectRoot, 'src', 'App.tsx');
    expect(fileExists(filePath)).toBe(true);
  });

  it('should have package.json with react and vite dependencies', () => {
    const filePath = path.join(projectRoot, 'package.json');
    expect(fileExists(filePath)).toBe(true);
    
    const packageJsonContent = fs.readFileSync(filePath, 'utf-8');
    expect(packageJsonContent).toContain('"react"');
    expect(packageJsonContent).toContain('"vite"');
  });
});
