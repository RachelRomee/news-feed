// to use later in the col function
import _ from 'lodash';

//  12 columns
const cols = 12;
//  1 percent gutter (13 including outside)
const gutter = 2;
// used below in function col(n)
const baseColWidth = (100 - (cols+1) * gutter) / cols;

export const row = {
  display: 'block',
  clear: 'both',
};

export const colBase = {
  float: 'left',
  margin: `0 $(gutter/2)%`
};

export function col(n) {
  // width of each column, last part: if you take 3 columns for 1 item it will also have the gutter wirdt
  let guttersWidth = (n - 1) * gutter;
  let colWidth = baseColWidth * n + guttersWidth;
  // extend the styles from colBase
  return _.extend({
    // use string interpolation for percentage (here divide 100% in 12 columns and 11xgutter)
    width: `${colWidth}%`
  }, colBase);
}
