import { describe, expect, it } from 'vitest';
import { format, resolveOptions } from 'indentier';
import plugin from '../src/index.ts';

describe('@indentier/plugin-c', () => {
  it('registers .c / .h / .cpp / .hpp extensions', () => {
    expect(plugin.extensions).toContain('.c');
    expect(plugin.extensions).toContain('.h');
    expect(plugin.extensions).toContain('.cpp');
    expect(plugin.extensions).toContain('.hpp');
  });

  it('is ruby compatible', () => {
    expect(plugin.rubyCompatible).toBe(true);
  });

  it('formats a C file: void*end=0; at top, end statements injected', () => {
    const input = '#include <stdio.h>\nint main(void) {\n  printf("hello\\n");\n  return 0;\n}\n';
    const out = format(
      input,
      resolveOptions({ mode: 'ruby', minColumn: 60, offset: 4 }),
      '.c',
      plugin,
    );

    expect(out).toContain('void*end=0;');
    expect(out.split('\n').some((l) => l.trim() === 'end')).toBe(true);
    // Declaration is at the first line (before #include)
    expect(out.split('\n')[0]!.trim()).toBe('void*end=0;');
  });

  it('idempotent: formatting twice gives the same result', () => {
    const input = 'int main(void) {\n  return 0;\n}\n';
    const opts = resolveOptions({ mode: 'ruby', minColumn: 60, offset: 4 });
    const first = format(input, opts, '.c', plugin);
    const second = format(first, opts, '.c', plugin);
    expect(second).toBe(first);
  });
});
