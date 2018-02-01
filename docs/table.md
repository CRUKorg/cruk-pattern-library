---
layout: page
title: Table
---

This pattern is to use to display table with tabular data arrangement with rows and columns.

The table design with 2px borders.

* Numbers, percentages and currency should always align right
* Text should align left
* Text with numbers align left
* Titles at the top with option to be pinned
* All cells vertically aligned to the middle


{% example html %}
<table class="cr-table cr-table--colrow-header">
  <caption class="cr-table__caption">Statistical overview</caption>
  <thead class="cr-table__header">
    <tr class="cr-table__row">
     <th class="cr-table__cell" scope="col"></th>
     <th class="cr-table__cell cr-table__cell--heading" scope="col">England</th>
     <th class="cr-table__cell cr-table__cell--heading" scope="col">Wales</th>
     <th class="cr-table__cell cr-table__cell--heading" scope="col">Scotland</th>
     <th class="cr-table__cell cr-table__cell--heading" scope="col">Northern Ireland</th>
     <th class="cr-table__cell cr-table__cell--heading" scope="col">UK</th>
   </tr>
 </thead>
  <tbody class="cr-table__body">
    <tr class="cr-table__row">
      <td class="cr-table__cell cr-table__cell--heading" scope="row">Cases</td>
      <td class="cr-table__cell cr-table__cell--number">150,832</td>
      <td class="cr-table__cell cr-table__cell--number">9,850</td>
      <td class="cr-table__cell cr-table__cell--number">15,668</td>
      <td class="cr-table__cell cr-table__cell--number">4,486</td>
      <td class="cr-table__cell cr-table__cell--number">180,836</td>
    </tr>
    <tr class="cr-table__row">
      <td class="cr-table__cell cr-table__cell--heading" scope="row">Crude Rate</td>
      <td class="cr-table__cell cr-table__cell--number">563.4</td>
      <td class="cr-table__cell cr-table__cell--number">647.5</td>
      <td class="cr-table__cell cr-table__cell--number">603.4</td>
      <td class="cr-table__cell cr-table__cell--number">496.9</td>
      <td class="cr-table__cell cr-table__cell--number">568.8</td>
    </tr>
    <tr class="cr-table__row">
      <td class="cr-table__cell cr-table__cell--heading" scope="row">AS Rate</td>
      <td class="cr-table__cell cr-table__cell--number">670.8</td>
      <td class="cr-table__cell cr-table__cell--number">697.4</td>
      <td class="cr-table__cell cr-table__cell--number">693.1</td>
      <td class="cr-table__cell cr-table__cell--number">650.1</td>
      <td class="cr-table__cell cr-table__cell--number">673.6</td>
    </tr>
    <tr class="cr-table__row">
      <td class="cr-table__cell cr-table__cell--heading" scope="row">AS Rate - 95% LCL</td>
      <td class="cr-table__cell cr-table__cell--number">667.4</td>
      <td class="cr-table__cell cr-table__cell--number">683.6</td>
      <td class="cr-table__cell cr-table__cell--number">682.3</td>
      <td class="cr-table__cell cr-table__cell--number">631.1</td>
      <td class="cr-table__cell cr-table__cell--number">670.5</td>
    </tr>
    <tr class="cr-table__row">
      <td class="cr-table__cell cr-table__cell--heading" scope="row">AS Rate - 95% UCL</td>
      <td class="cr-table__cell cr-table__cell--number">674.2</td>
      <td class="cr-table__cell cr-table__cell--number">711.2</td>
      <td class="cr-table__cell cr-table__cell--number">704.0</td>
      <td class="cr-table__cell cr-table__cell--number">669.1</td>
      <td class="cr-table__cell cr-table__cell--number">676.8</td>
    </tr>
    <tr class="cr-table__row">
      <td class="cr-table__cell cr-table__cell--heading" scope="row">Cases</td>
      <td class="cr-table__cell cr-table__cell--number">146,031</td>
      <td class="cr-table__cell cr-table__cell--number">9,269</td>
      <td class="cr-table__cell cr-table__cell--number">16,270</td>
      <td class="cr-table__cell cr-table__cell--number">4,454</td>
      <td class="cr-table__cell cr-table__cell--number">176,024</td>
    </tr>
    <tr class="cr-table__row">
      <td class="cr-table__cell cr-table__cell--heading" scope="row">Crude Rate</td>
      <td class="cr-table__cell cr-table__cell--number">530.2</td>
      <td class="cr-table__cell cr-table__cell--number">590.1</td>
      <td class="cr-table__cell cr-table__cell--number">591.4</td>
      <td class="cr-table__cell cr-table__cell--number">474.9</td>
      <td class="cr-table__cell cr-table__cell--number">536.6</td>
    </tr>
  </tbody>
</table>
{% endexample %}
