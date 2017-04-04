---
layout: page
title: Table
---

The Table pattern is to be used for the purpose of displaying tabular data in table representation which is useful for supporters.


{% example html %}
<table class="cr-table column-row-header">
  <caption class="cr-table__caption">tabular data</caption>
  <thead class="cr-table__header">
    <tr class="cr-table__row">
     <th class="cr-table__cell cr-table__cell--left" scope="col"></th>
     <th class="cr-table__cell cr-table__cell--left" scope="col">England</th>
     <th class="cr-table__cell cr-table__cell--left" scope="col">Wales</th>
     <th class="cr-table__cell cr-table__cell--left" scope="col">Scotland</th>
     <th class="cr-table__cell cr-table__cell--left" scope="col">Northern Ireland</th>
     <th class="cr-table__cell cr-table__cell--left" scope="col">UK</th> 
   </tr>
 </thead>
  <tbody class="cr-table__body">
    <tr class="cr-table__row">
      <th class="cr-table__cell cr-table__cell--left" scope="row">Cases</th>
      <td class="cr-table__cell cr-table__cell--right">150,832</td>
      <td class="cr-table__cell cr-table__cell--right">9,850</td>
      <td class="cr-table__cell cr-table__cell--right">15,668</td>
      <td class="cr-table__cell cr-table__cell--right">4,486</td>
      <td class="cr-table__cell cr-table__cell--right">180,836</td>
    </tr>
    <tr class="cr-table__row">
      <th class="cr-table__cell cr-table__cell--right" scope="row">Crude Rate</th>
      <td class="cr-table__cell cr-table__cell--right">563.4</td>
      <td class="cr-table__cell cr-table__cell--right">647.5</td>
      <td class="cr-table__cell cr-table__cell--right">603.4</td>
      <td class="cr-table__cell cr-table__cell--right">496.9</td>
      <td class="cr-table__cell cr-table__cell--right">568.8</td>
    </tr>
    <tr class="cr-table__row">
      <th class="cr-table__cell cr-table__cell--left" scope="row">AS Rate</th>
      <td class="cr-table__cell cr-table__cell--right">670.8</td>
      <td class="cr-table__cell cr-table__cell--right">697.4</td>
      <td class="cr-table__cell cr-table__cell--right">693.1</td>
      <td class="cr-table__cell cr-table__cell--right">650.1</td>
      <td class="cr-table__cell cr-table__cell--right">673.6</td>
    </tr>
    <tr class="cr-table__row">
      <th class="cr-table__cell cr-table__cell--left" scope="row">AS Rate - 95% LCL</th>
      <td class="cr-table__cell cr-table__cell--right">667.4</td>
      <td class="cr-table__cell cr-table__cell--right">683.6</td>
      <td class="cr-table__cell cr-table__cell--right">682.3</td>
      <td class="cr-table__cell cr-table__cell--right">631.1</td>
      <td class="cr-table__cell cr-table__cell--right">670.5</td>
    </tr>
    <tr class="cr-table__row">
      <th class="cr-table__cell cr-table__cell--left" scope="row">AS Rate - 95% UCL</th>
      <td class="cr-table__cell cr-table__cell--right">674.2</td>
      <td class="cr-table__cell cr-table__cell--right">711.2</td>
      <td class="cr-table__cell cr-table__cell--right">704.0</td>
      <td class="cr-table__cell cr-table__cell--right">669.1</td>
      <td class="cr-table__cell cr-table__cell--right">676.8</td>
    </tr>
    <tr class="cr-table__row">
      <th class="cr-table__cell cr-table__cell--left" scope="row">Cases</th>
      <td class="cr-table__cell cr-table__cell--right">146,031</td>
      <td class="cr-table__cell cr-table__cell--right">9,269</td>
      <td class="cr-table__cell cr-table__cell--right">16,270</td>
      <td class="cr-table__cell cr-table__cell--right">4,454</td>
      <td class="cr-table__cell cr-table__cell--right">176,024</td>
    </tr>
    <tr class="cr-table__row">
      <th class="cr-table__cell cr-table__cell--left" scope="row">Crude Rate</th>
      <td class="cr-table__cell cr-table__cell--right">530.2</td>
      <td class="cr-table__cell cr-table__cell--right">590.1</td>
      <td class="cr-table__cell cr-table__cell--right">591.4</td>
      <td class="cr-table__cell cr-table__cell--right">474.9</td>
      <td class="cr-table__cell cr-table__cell--right">536.6</td>
    </tr>
  </tbody>
</table>
{% endexample %}