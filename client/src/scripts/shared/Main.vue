<template>
    <div class="root-div">
        <ul id="dropdown1" class="dropdown-content">
            <li><a @click="logOut">Wyloguj</a></li>
            <li><a @click="changeName">Zmień imię</a></li>
        </ul>
        <nav>
            <div class="nav-wrapper teal">
                <h2 class="brand-logo center hide-on-med-and-down">nodemegle</h2>
                <a v-show="username" class="dropdown-button right" data-activates="dropdown1"><h4>{{username}}</h4></a>
            </div>
        </nav>

        <div class="container">
            <slot></slot>
        </div>
    </div>
</template>

<script type="text/babel">
    import 'materialize-css/bin/materialize.css';
    import '../../styles/main.scss';
    import VLink from '../components/VLink.vue';
    import {mapState, mapMutations} from 'vuex';
    import {NAVIGATE_TO, LOG_OUT} from '../mutations-dictionary'

    export default {
        components: {
            VLink
        },
        computed: {
            ...mapState(['username'])
        },
        mounted: () => {
            $(".dropdown-button").dropdown();
        },
        methods: {
            ...mapMutations({
                navigateTo: NAVIGATE_TO,
                logOut: LOG_OUT
            }),
            changeName: function () {
                this.navigateTo('/');
            }
        },
        watch: {
            username: function (username) {
                if (!username) {
                    this.navigateTo('/');
                }
            }
        }
    }


</script>

<style scoped lang="css" rel="stylesheet/css">
    .root-div {
        height: 100%;
        box-sizing: border-box;
    }

    .container {
        max-width: 1000px;
        margin: 5px auto 0 auto;
        padding: 15px 10px;
        height: 90%;
        overflow: hidden;
        box-sizing: border-box;
    }

    @media (max-width: 600px) {
        .container {
            padding: 5px 0px;
        }
    }

    .dropdown-button>h4 {
        margin-right: 10px;
    }

    .dropdown-button, ul.dropdown-content li {
        cursor: pointer;
        cursor: hand;
        cursor: -webkit-hand;
    }

</style>
