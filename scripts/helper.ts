import path from 'path';

export function getProjectPath(...filePath: string[]) {
  return path.join(process.cwd(), ...filePath);
}