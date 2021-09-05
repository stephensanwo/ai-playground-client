import React from "react";
import "./style.scss";

const Table = () => {
  return (
    <table class="bx--data-table bx--data-table--short">
      <thead>
        <tr>
          <th>
            <span class="bx--table-header-label">Date</span>
          </th>
          <th>
            <span class="bx--table-header-label">Revenue</span>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>2021-10-8</td>
          <td>450,000,000</td>
        </tr>
        <tr>
          <td>2021-10-9</td>
          <td>550,000,000</td>
        </tr>
        <tr>
          <td>2021-10-8</td>
          <td>450,000,000</td>
        </tr>
        <tr>
          <td>2021-10-9</td>
          <td>550,000,000</td>
        </tr>
        <tr>
          <td>2021-10-8</td>
          <td>450,000,000</td>
        </tr>
        <tr>
          <td>2021-10-9</td>
          <td>550,000,000</td>
        </tr>
        <tr>
          <td>2021-10-8</td>
          <td>450,000,000</td>
        </tr>
        <tr>
          <td>2021-10-9</td>
          <td>550,000,000</td>
        </tr>
        <tr>
          <td>2021-10-8</td>
          <td>450,000,000</td>
        </tr>
        <tr>
          <td>2021-10-9</td>
          <td>550,000,000</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
