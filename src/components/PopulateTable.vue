<template>
    <table>
      <thead>
        <tr v-for="title in titles">
          <th>{{ title }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in items">
            <div v-for="attr in item && title in titles">
                <td data-title={{ title }}>
                    {{ attr }}
                </td>
            </div>
        </tr>
      </tbody>
    </table>
</template>

<script setup>
defineProps({
  titles: {
    type: Array,
    required: true
  },
  items: {
    type: Array,
    required: true
  }
})
</script>

<style scoped>
table {
  display: block;
  background-color: #2C3845;
}

tr, td, tbody, tfoot {
  display: block;
}

thead {
  display: none;
}

tr {
  padding-bottom: 10px;
  border-bottom: 2px solid #5BB9B8;
}

td {
  padding: 10px 10px 0;
  text-align: center;
  color: #fff;
}
td:before {
  content: attr(data-title);
  color: #7a8aaa;
  text-transform: uppercase;
  font-size: 1.4rem;
  padding-right: 10px;
  display: block;
}

table {
  width: 100%;
}

th {
  text-align: left;
  font-weight: 700;
}

thead th {
  background-color: #202932;
  color: #ff0000;
  border: 1px solid #202932;
}

@media (min-width: 460px) {
  td {
    text-align: left;
  }
  td:before {
    display: inline-block;
    text-align: right;
    width: 140px;
  }
}
@media (min-width: 720px) {
  table {
    display: table;
  }

  tr {
    display: table-row;
  }

  td, th {
    display: table-cell;
  }

  tbody {
    display: table-row-group;
  }

  thead {
    display: table-header-group;
  }

  td {
    border: 1px solid #28333f;
  }
  td:before {
    display: none;
  }

  td, th {
    padding: 10px;
  }
}
</style>