<template>
    <b-table striped hover :items="records" :fields="fields">
        <template #cell(show_details)="row">
            <b-button size="sm"  class="mr-2">

            </b-button>
        </template>
        <template v-slot:cell(actions)="data">
            <b-button variant="success" @click="$router.push('/detail/' + data.item.id) ">Open</b-button>
        </template>
    </b-table>


</template>

<script>
    export default {
        name: "UsersList",
        props: {
            records: {
                required: true,
                type: Array
            }
        },
        data: () => ({
            fields: ["id", "name", "contactId", "contactName", "actions"],
        }),

    }
</script>

<style scoped>
    td{
        padding-right: 7% ;
    }
</style>