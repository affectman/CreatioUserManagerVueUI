<template>
    <div>
        <Loader v-if="loading" />
        <div v-else-if="record">
            <h1 class="detail-h1">Информация о пользовате</h1>
            <div class="row detail-window">
                <div class="col s12 m6">
                    <div class="card red">
                        <div class="card-content white-text">
                            <p>id Контакта:  {{record.contact.id}}</p>
                            <p>ФИО:  {{record.contact.name}}</p>
                            <p>Имя аккаунта:  {{record.name}}</p>

                        </div>
                    </div>
                </div>
            </div>
            <div class="breadcrumb-wrap detailButton">
                <b-button variant="outline-primary"@click="$router.push('/users')">Назад</b-button>
                <b-button variant="danger"@click="deleteContact">Удалить</b-button>
            </div>
        </div>
        <p class="center" v-else>Запись с id={{$route.params.id}} не найдена</p>
    </div>
</template>

<script>
    export default {
        name: "Detail",

        data: () => ({
            record: null,
            loading: true
        }),
        async mounted() {
            const record = await this.$store.dispatch("fetchUserById", this.$route.params.id);
            this.loading = false
            this.record = {
                ...record
            }
        },
        methods: {
            deleteContact: async function () {
                try {
                    const deleteUser = await this.$store.dispatch('deleteUserById', this.$route.params.id)
                    await this.$router.push('/users')

                } catch (e) {
                }

            }
        }
    }
</script>

<style scoped>
    .detail-h1{
        padding-top: 5%;
    }
    .detail-window{
         padding-top: 5%;
    }
</style>