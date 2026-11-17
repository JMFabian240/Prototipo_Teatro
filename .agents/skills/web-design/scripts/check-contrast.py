#!/usr/bin/env python3
"""
Contrast Checker - Verifica ratios de contraste WCAG

Usage:
    python check-contrast.py --foreground "#1a1a1a" --background "#ffffff"
    python check-contrast.py --pairs "#1a1a1a:#ffffff" "#666666:#f5f5f5"

Output:
    Ratio de contraste y si pasa WCAG AA/AAA
"""

import argparse
import re
import sys
from typing import Tuple


def hex_to_rgb(hex_color: str) -> Tuple[int, int, int]:
    """Convierte color hex a RGB."""
    hex_color = hex_color.lstrip('#')
    if len(hex_color) == 3:
        hex_color = ''.join([c * 2 for c in hex_color])
    return tuple(int(hex_color[i:i+2], 16) for i in (0, 2, 4))


def get_luminance(r: int, g: int, b: int) -> float:
    """Calcula luminancia relativa según WCAG 2.1."""
    def linearize(c):
        c = c / 255.0
        return c / 12.92 if c <= 0.03928 else ((c + 0.055) / 1.055) ** 2.4

    return 0.2126 * linearize(r) + 0.7152 * linearize(g) + 0.0722 * linearize(b)


def get_contrast_ratio(color1: str, color2: str) -> float:
    """Calcula el ratio de contraste entre dos colores."""
    rgb1 = hex_to_rgb(color1)
    rgb2 = hex_to_rgb(color2)

    l1 = get_luminance(*rgb1)
    l2 = get_luminance(*rgb2)

    lighter = max(l1, l2)
    darker = min(l1, l2)

    return (lighter + 0.05) / (darker + 0.05)


def check_wcag(ratio: float) -> dict:
    """Verifica si el ratio pasa WCAG AA y AAA."""
    return {
        'aa_normal': ratio >= 4.5,
        'aa_large': ratio >= 3.0,
        'aaa_normal': ratio >= 7.0,
        'aaa_large': ratio >= 4.5,
    }


def format_result(fg: str, bg: str, ratio: float) -> str:
    """Formatea el resultado del análisis."""
    wcag = check_wcag(ratio)

    result = f"""
{'=' * 50}
Foreground: {fg}
Background: {bg}
Contrast Ratio: {ratio:.2f}:1

WCAG Compliance:
  AA Normal Text (<18px):    {'✓ PASS' if wcag['aa_normal'] else '✗ FAIL'}
  AA Large Text (≥18px):     {'✓ PASS' if wcag['aa_large'] else '✗ FAIL'}
  AAA Normal Text:          {'✓ PASS' if wcag['aaa_normal'] else '✗ FAIL'}
  AAA Large Text:           {'✓ PASS' if wcag['aaa_large'] else '✗ FAIL'}
{'=' * 50}
"""
    return result


def parse_color(color: str) -> str:
    """Valida y normaliza el formato de color."""
    color = color.strip()
    if not color.startswith('#'):
        color = '#' + color

    if not re.match(r'^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$', color):
        raise ValueError(f"Invalid hex color: {color}")

    return color


def main():
    parser = argparse.ArgumentParser(
        description='Check WCAG contrast ratios between colors'
    )
    parser.add_argument(
        '--foreground', '-f',
        help='Foreground color (hex)',
    )
    parser.add_argument(
        '--background', '-b',
        help='Background color (hex)',
    )
    parser.add_argument(
        '--pairs', '-p',
        nargs='+',
        help='Color pairs in format "fg:bg"',
    )
    parser.add_argument(
        '--json', '-j',
        action='store_true',
        help='Output as JSON',
    )

    args = parser.parse_args()

    results = []

    if args.pairs:
        for pair in args.pairs:
            if ':' not in pair:
                print(f"Invalid pair format: {pair}. Use 'fg:bg'")
                sys.exit(1)

            fg, bg = pair.split(':')
            fg = parse_color(fg)
            bg = parse_color(bg)
            ratio = get_contrast_ratio(fg, bg)
            wcag = check_wcag(ratio)

            results.append({
                'foreground': fg,
                'background': bg,
                'ratio': round(ratio, 2),
                'wcag': wcag,
            })

            if not args.json:
                print(format_result(fg, bg, ratio))

    elif args.foreground and args.background:
        fg = parse_color(args.foreground)
        bg = parse_color(args.background)
        ratio = get_contrast_ratio(fg, bg)
        wcag = check_wcag(ratio)

        results.append({
            'foreground': fg,
            'background': bg,
            'ratio': round(ratio, 2),
            'wcag': wcag,
        })

        if not args.json:
            print(format_result(fg, bg, ratio))

    else:
        parser.print_help()
        sys.exit(1)

    if args.json:
        import json
        print(json.dumps(results, indent=2))


if __name__ == '__main__':
    main()