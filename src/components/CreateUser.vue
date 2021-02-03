<template>
    <div>
        <b-form @submit="submitHandler">

            <b-card bg-variant="light">
                <b-form-group
                        label-cols-lg="3"
                        label="Создать нового пользователя"
                        label-size="lg"
                        label-class="font-weight-bold pt-0"
                        class="mb-0"
                >
                    <b-form-group
                            label="Логин:"
                            label-for="accountName"
                            label-cols-sm="3"
                            label-align-sm="right"
                    >
                        <b-form-input  id="accountName"
                                       v-model="user.accountName">

                        </b-form-input>
                    </b-form-group>

                    <b-form-group
                            label="Тип аккаунта:"
                            label-for="accountType"
                            label-cols-sm="3"
                            label-align-sm="right"
                    >
                        <b-form-input id="accountType"
                                      v-model.number="user.accountType">

                        </b-form-input>
                    </b-form-group>

                    <b-form-group
                            label="ФИО:"
                            label-for="contactName"
                            label-cols-sm="3"
                            label-align-sm="right"
                    >
                        <b-form-input id="contactName"
                                      v-model="user.contactName">
                        </b-form-input>
                    </b-form-group>

                    <b-form-group
                            label="Телефон:"
                            label-for="phone"
                            label-cols-sm="3"
                            label-align-sm="right"
                    >
                        <b-form-input id="phone"
                                      v-model="user.phone"
                        >
                        </b-form-input>
                    </b-form-group>

                    <b-button variant="success" type="submit">Добавить</b-button>
                </b-form-group>
            </b-card>
        </b-form>
    </div>
</template>

<script>
    export default {
        name: "CreateUser",
        data: function () {
            return {
                user: {
                    accountName: "",
                    number: 4,
                    accountType: 0,
                    phone: "",
                    contactName: ""
                }
            }
        },
        methods: {
            async submitHandler() {
                try {
                    const category = await this.$store.dispatch('createUser',
                        {
                            name: this.user.accountName,
                            sysAdminUnitTypeValue: 4,
                            contact:{
                                name: this.user.contactName,
                                phone: this.user.phone
                            },
                        })

                } catch (e) {
                }

            }
        }

    }
</script>

<style scoped>
</style>