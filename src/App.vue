<template>
    <div>
        <b-navbar type="dark" variant="dark">
            <b-container>
                <b-navbar-nav>
                    <router-link tag="b-nav-item" to="/">Главная</router-link>
                    <b-nav-item-dropdown text="Меню" left>
                        <router-link tag="b-dropdown-item"
                                     :to="{ name: 'users' }"> Пользователи
                        </router-link>
                        <router-link tag="b-dropdown-item"
                                     :to="{ name: 'createUser' }"> Создать нового пользователя
                        </router-link>
                        <router-link tag="b-dropdown-item"
                                     :to="{ name: 'weather' }"> Погодка
                        </router-link>
                    </b-nav-item-dropdown>
                    <span class="text-white">{{date | formatDate}}</span>
                </b-navbar-nav>
            </b-container>
        </b-navbar>

        <b-container>
            <router-view />
        </b-container>

    </div>
</template>

<script>
    import 'bootstrap/dist/css/bootstrap.css'

    import 'bootstrap-vue/dist/bootstrap-vue.css'

    export default {
        data:() =>({
            date: new Date(),
            interval: null,
        }),
        mounted() {
            this.interval = setInterval(() => {
                this.date = new Date()
            },1000)
        },
        beforeDestroy() {
            clearInterval(this.interval)
        }
    };
</script>

<style>
</style>

