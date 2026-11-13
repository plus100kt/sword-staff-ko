import { spawn } from 'node:child_process';
import { createRequire } from 'node:module';

// Accept the preview runner's generic flags while retaining normal Next.js dev behavior.
const input = process.argv.slice(2);
const args = [];
for (let i = 0; i < input.length; i++) {
  if (input[i] === '--strictPort') continue;
  args.push(input[i] === '--host' ? '--hostname' : input[i]);
}
if (!args.includes('--hostname')) args.push('--hostname', '0.0.0.0');
const require = createRequire(import.meta.url);
const child = spawn(process.execPath, [require.resolve('next/dist/bin/next'), 'dev', ...args], { stdio: 'inherit' });
for (const signal of ['SIGINT', 'SIGTERM']) process.on(signal, () => child.kill(signal));
child.on('exit', code => process.exit(code ?? 1));
