<template>
    <div>
        <div class="page-title">
            <h3>Пользователи системы</h3>
        </div>

        <p class="center" v-if="!records.length">Записей пока нет.
            <router-link to="/createUser">Добавте первого пользователя.</router-link>
        </p>

        <section v-else>
            <UsersTable :records="records" />
        </section>
    </div>
</template>

<script>
    import UsersTable from './templates/UsersList'

    export default {
        name: 'Users',
        data: () => ({
            loading: true,
            records: [],
            scope: this
        }),
        async mounted () {
            const users = await this.$store.dispatch('fetchUsers')

            this.records = users.map(record => {
                return {
                    id: record.id,
                    name: record.name,
                    contactId: record.contact.id,
                    phone: record.contact.phone,
                    contactName: record.contact && record.contact.name ? record.contact.name : '',
                }
            })

            this.loading = false
        },
        methods: {
            pageChangeHandler () {

            }
        },
        components: {
            UsersTable
        }
    }
</script>

<style scoped>

</style>