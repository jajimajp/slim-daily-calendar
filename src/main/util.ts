/* eslint import/prefer-default-export: off */
import { URL } from 'url';
import path from 'path';

export function resolveHtmlPath(htmlFileName: string) {
  if (process.env.NODE_ENV === 'development') {
    const port = process.env.PORT || 1212;
    const url = new URL(`http://localhost:${port}`);
    url.pathname = htmlFileName;
    return url.href;
  }
  return `file://${path.resolve(__dirname, '../renderer/', htmlFileName)}`;
}

/**
 * ランタイムのロケールで、実行した日の開始日時の１秒前のDateオブジェクトを返す。
 * 例: 4/13 12:33に実行 -> 日本時間 4/13 0:00 のDateオブジェクト
 */
export function startDate() {
  const d = new Date();
  d.setHours(0);
  d.setMinutes(0);
  d.setSeconds(0);
  d.setMilliseconds(0);
  return new Date(d.getTime() - 1000);
}

/**
 * ランタイムのロケールで、実行した日の終了日時の１秒前のDateオブジェクトを返す。
 * 例: 4/13 12:33に実行 -> 日本時間 4/13 23:59:59 のDateオブジェクト
 */
export function endDate() {
  const d = new Date();
  d.setHours(23);
  d.setMinutes(59);
  d.setSeconds(59);
  d.setMilliseconds(0);
  return d;
}
